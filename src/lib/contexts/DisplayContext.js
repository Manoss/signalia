//const ReactEasyState = require('@risingstack/react-easy-state')
//const store = ReactEasyState.store
import { useState, useEffect, createContext, useContext } from 'react';
const _ = require('lodash')
const DisplayActions = require('../actions/display')
const shortid = require('shortid')

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

    const updateDisplayThrottled = _.debounce((id, data) => {
        return DisplayActions.updateDisplay(id, data)
      }, 300)

    const displayInitial = {
        id: null,
        name: null,
        layout: null,
        statusBar: null,
        widgets: null,
        setId,
        setName,
        updateName,
        updateLayout,
        addStatusBarItem,
        removeStatusBarItem,
        reorderStatusBarItems
    }

    const [display, setDisplay] = useState(displayInitial);

    const setId = async(id) => {
        if (!id) return
        display.id = id
        const displayInfo = await DisplayActions.getDisplay(id)
        display.layout = displayInfo.layout
        display.statusBar = displayInfo.statusBar
        display.name = displayInfo.name
        display.widgets = displayInfo.widgets
    }

    const setName = async (name) => {
        if (!name) return
        display.name = name
    }

    const updateName = async (name) => {
        if (!name) return
        display.name = name
        updateDisplayThrottled(display.id, { name })
    }

    const updateLayout = async(layout) => {
        if (!layout || !['spaced', 'compact'].includes(layout)) return
        display.layout = layout
        updateDisplayThrottled(display.id, { layout })
    }

    const addStatusBarItem = async(type) => {
        display.statusBar = [...display.statusBar, type + '_' + shortid.generate()]
        updateDisplayThrottled(display.id, { statusBar: display.statusBar })
        return Promise.resolve()
    }

    const removeStatusBarItem = async(id) => {
        display.statusBar = [...display.statusBar.slice(0, id).concat(display.statusBar.slice(id + 1))]
        updateDisplayThrottled(display.id, { statusBar: display.statusBar })
    }

    const reorderStatusBarItems = async(startIndex, endIndex) => {
        const result = Array.from(display.statusBar)
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)

        display.statusBar = result
        updateDisplayThrottled(display.id, { statusBar: display.statusBar })
    }

  return (
    <StateContext.Provider
      value={{
        audio,
        setAudio,
        activeMenu,
        setActiveMenu,
        isClicked,
        screenSize,
        homePlayerToggle,
        currentSong,
        setcurrentSong,
        setHomePlayerToggle,
        setScreenSize,
        initialState,
        setIsClicked,
        handleClick,
        topCharts,
        setTopCharts,
        isFetching,
        setIsFetching,
        topTrending,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
