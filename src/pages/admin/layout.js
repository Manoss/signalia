import React from 'react'

//import GridLayout from 'react-grid-layout'
//import { DragDropContext, Droppable } from 'react-beautiful-dnd'

//import { view } from '@risingstack/react-easy-state'

// i18next
import { useTranslation } from 'react-i18next'

import Frame from '../../components/admin/Frame'
//import EditableWidget from '../components/Admin/EditableWidget'
//import StatusBarElement from '../components/Admin/StatusBarElement'
//import WidthProvider from '../components/Widgets/WidthProvider'
//import DropdownButton from '../components/DropdownButton'

//import { Form, Switch } from '../components/Form'

//import { StatusBarElementTypes } from '../helpers/statusbar.js'

//import Widgets from '../widgets'

//import { addWidget, getWidgets, deleteWidget, updateWidget } from '../actions/widgets'

import { useSession } from "next-auth/react"
import { useRouter } from 'next/router.js'

//import { display } from '../stores'
import displays from '../../lib/db-fictive/displays'

//const GridLayoutWithWidth = WidthProvider(GridLayout)

function Layout(props) {
  const router = useRouter()
  const [widgets, setWidgets] = React.useState(props.widgets || [])
  const { t } = useTranslation()
  const Session = useSession()
  const loggedIn = Session.status ==='authenticated'
  /**
  const layout = widgets.map(widget => ({
    i: widget._id,
    x: widget.x || 0,
    y: widget.y || 0,
    w: widget.w || 1,
    h: widget.h || 1
  }))*/

  const display = displays[0]
/** TODO : React.useEffect()
  componentDidMount() {
    //const { displayId } = this.props
    const displayId = this.props.router.query.display
    console.log(displayId)
    display.setId(displayId)
    getWidgets(displayId).then(widgets => {
      this.setState({ widgets })
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.router.query.display != this.props.router.query.display) this.refresh()
  }
*/
  const refresh = async () => {
    const widgets = null //await getWidgets(display.id)
    this.setState({ widgets })
  }

  const addWidget = async type => {
    const widgetDefinition = null //Widgets[type]
    const result = await addWidget(display.id, type, widgetDefinition && widgetDefinition.defaultData)
    return refresh(result)
  }

  const deleteWidget = async id => {
    const result = await deleteWidget(id)
    return refresh(result)
  }

  const onLayoutChange = layout => {
    for (const widget of layout) {
      updateWidget(widget.i, {
        x: widget.x,
        y: widget.y,
        w: widget.w,
        h: widget.h
      })
    }
  }

  const onDragEnd = result => {
    if (!result.destination) {
      return
    }

    display.reorderStatusBarItems(result.source.index, result.destination.index)
  }
  return (
    <Frame loggedIn={loggedIn}>
      <div className={'head'}>
        <h1>{t('layout.head')}</h1>
        <div className='editable-title'>
          <input
            className='input'
            placeholder={t('layout.title.placeholder')}
            value={display && display.name || 'display name'}
            onChange={event => {
              const target = event.target
              const title = target && target.value
              display.updateName(title)
            }}
            onClick={e => {
              if (e) e.stopPropagation()
            }}
            size={display && display.name && display.name.length}
          />
          <div className='icon'>
            icone pencil
          </div>
        </div>
      </div>
      <div className='settings'>
        Stteings layout status bar
        {/** 
        <DropdownButton
          icon='plus'
          text={t('layout.settings.item')}
          onSelect={display.addStatusBarItem}
          choices={Object.keys(StatusBarElementTypes).map(statusBarEl => ({
            key: statusBarEl,
            name: StatusBarElementTypes[statusBarEl].name,
            icon: StatusBarElementTypes[statusBarEl].icon
          }))}
        />*/}
      </div>
      <div className='statusbar'>
        {display && display.statusBar && (
          <h1>DropContext</h1>
          /** 
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId='droppable' direction='horizontal'>
              {provided => (
                <div
                  ref={provided.innerRef}
                  style={{
                    display: 'flex',
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingRight: 4,
                    paddingLeft: 4,
                    overflow: 'auto',
                    height: '100%',
                    boxSizing: 'border-box'
                  }}
                  {...provided.droppableProps}
                >
                  {display.statusBar.map((item, index) => (
                    <StatusBarElement
                      item={item}
                      key={index}
                      index={index}
                      onDelete={display.removeStatusBarItem.bind(this, index)}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          */
        )}
      </div>
      <div className='settings'>
        settings
        {/** 
        <DropdownButton
          icon='plus'
          text={t('layout.settings.widget')}
          onSelect={this.addWidget}
          choices={Object.keys(Widgets).map(widget => ({
            key: widget,
            name: Widgets[widget].name,
            icon: Widgets[widget].icon
          }))}
        />
        <Form>
          <Switch
            checkedLabel={t('layout.compact')}
            uncheckedLabel={t('layout.spaced')}
            checkedIcon={faTh}
            uncheckedIcon={faThLarge}
            checked={display.layout == 'spaced'}
            onChange={(name, checked) => display.updateLayout(checked ? 'spaced' : 'compact')}
          />
        </Form>
        */}
      </div>
      <div className='layout'>
      GridLayoutWithWidth
      {/**
        <GridLayoutWithWidth
          layout={layout}
          cols={6}
          onLayoutChange={this.onLayoutChange}
          draggableCancel={'.ReactModalPortal,.controls'}
          margin={display.layout == 'spaced' ? [12, 12] : [4, 4]}
        >
          {widgets.map(widget => (
            <div key={widget._id}>
              <EditableWidget
                id={widget._id}
                type={widget.type}
                onDelete={this.deleteWidget.bind(this, widget._id)}
                layout={display.layout}
              />
            </div>
          ))}
        </GridLayoutWithWidth>
      */}
      </div>
      <style jsx>
        {`
          h1 {
            font-family: 'Open Sans', sans-serif;
            font-size: 24px;
            color: #4f4f4f;
            margin: 0px;
            display: inline-block;
            margin-right: 16px;
          }
          .head {
            margin-bottom: 24px;
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          .layout {
            background: #dfdfdf;
            border-radius: ${display.layout == 'spaced' ? '8px' : '0px'};
          }
          .statusbar {
            background: #dfdfdf;
            border-radius: 8px;
            flex: 1;
            margin-bottom: 16px;
            height: 64px;
          }
          .settings {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 16px;
          }
          .editable-title {
            display: inline-block;
            position: relative;
            margin-left: 16px;
            margin-right: 16px;
            border-bottom: 3px solid #aaa;
          }
          .editable-title .input {
            font-family: 'Open Sans', sans-serif;
            color: #666;
            background-color: transparent;
            min-height: 40px;
            border: none;
            outline: none;
            margin-right: 24px;
            font-size: 24px;
            font-weight: 600;
          }
          .editable-title .icon {
            position: absolute;
            right: 8px;
            top: 50%;
            margin-top: -8px;
          }
        `}
      </style>
    </Frame>
  )
}


export default Layout