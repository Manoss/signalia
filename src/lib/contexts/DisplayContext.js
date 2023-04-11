//const ReactEasyState = require('@risingstack/react-easy-state')
//const store = ReactEasyState.store
import { useState, useEffect, createContext, useContext } from 'react';
const _ = require('lodash')
const DisplayActions = require('../actions/display')
const shortid = require('shortid')

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

    const updateDisplayThrottled = _.debounce((id, data) => {
      console.log('Throttled : ', id, ' data : ', data, ' Display : ', displayCtx)
        return DisplayActions.updateDisplay(id, data).then(display => setDisplayCtx(display))
      }, 300)

    const displayInitial = {
        id: null,
        name: null,
        layout: null,
        statusBar: null,
        widgets: null,
        /**
        setId,
        setName,
        updateName,
        updateLayout,
        addStatusBarItem,
        removeStatusBarItem,
        reorderStatusBarItems
        */
    }

    const [displayCtx, setDisplayCtx] = useState(displayInitial);

    const setIdCtx = async(id) => {
        if (!id) return
        displayCtx._id = id
        const displayInfo = await DisplayActions.getDisplay(id)
        displayCtx.layout = displayInfo.layout
        displayCtx.statusBar = displayInfo.statusBar
        displayCtx.name = displayInfo.name
        displayCtx.widgets = displayInfo.widgets
    }

    const setNameCtx = async (name) => {
        if (!name) return
        displayCtx.name = name
    }

    const updateNameCtx = async (name) => {
        if (!name) return
        displayCtx.name = name
        updateDisplayThrottled(displayCtx._id, { name })
    }

    const updateLayoutCtx = async(layout) => {
        if (!layout || !['spaced', 'compact'].includes(layout)) return
        displayCtx.layout = layout
        updateDisplayThrottled(displayCtx._id, { layout })
    }

    const addStatusBarItemCtx = async(type) => {
      displayCtx.statusBar = [...displayCtx.statusBar, type + '_' + shortid.generate()]
        updateDisplayThrottled(displayCtx._id, { statusBar: displayCtx.statusBar })
        return Promise.resolve()
    }

    const removeStatusBarItemCtx = async(id) => {
      displayCtx.statusBar = [...displayCtx.statusBar.slice(0, id).concat(display.statusBar.slice(id + 1))]
        updateDisplayThrottled(displayCtx.id, { statusBar: displayCtx.statusBar })
    }

    const reorderStatusBarItemsCtx = async(startIndex, endIndex) => {
        const result = Array.from(displayCtx.statusBar)
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)

        displayCtx.statusBar = result
        updateDisplayThrottled(displayCtx.id, { statusBar: displayCtx.statusBar })
    }

  return (
    <StateContext.Provider
      value={{
        displayCtx,
        setDisplayCtx,
        setIdCtx,
        setNameCtx,
        updateNameCtx,
        updateLayoutCtx,
        addStatusBarItemCtx,
        removeStatusBarItemCtx,
        reorderStatusBarItemsCtx
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
