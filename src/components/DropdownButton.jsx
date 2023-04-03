import React from 'react'
/**
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false
library.add(fas)
library.add(fab)
*/

function DropdownButton(props) {
 const [showMenu, setShowMenu] = React.useState()
 const {
  icon = null,
  text = 'Show menu',
  choices = [],
  onSelect = () => {},
  style = {},
  menuStyle = {},
  children
} = props

    //this.showMenu = this.showMenu.bind(this)
    //this.closeMenu = this.closeMenu.bind(this)


  const handleShowMenu = (event) => {
    event.preventDefault()
    setShowMenu(prevState => (!prevState.showMenu))
  }
  

  const handleCloseMenu = (event, force = false) => {
    if (force || (this.dropdownMenu && !this.dropdownMenu.contains(event.target))) {
      setShowMenu(false), () => {
        document && document.removeEventListener('click', this.closeMenu)
      }
    }
  }

  return (
    <div className={'dropdownContainer'}>
      {children ? (
        <div style={style} onClick={handleShowMenu}>
          {children}
        </div>
      ) : (
        <button className={'btn'} onClick={handleShowMenu} style={style}>
          <div className={'btnIcon'}></div>
          {text}
        </button>
      )}

      {showMenu ? (
        <div
          className='menu'
          ref={element => {
            dropdownMenu = element
          }}
          style={menuStyle}
        >
          {choices.map(choice => (
            <button
              key={choice.key}
              className={'choice'}
              onClick={event => {
                handleCloseMenu(event, true /* force */)
                onSelect(choice.key)
              }}
            >
              {choice.icon && (
                <div className={'btnIcon'}>
                  Choice Icone
                </div>
              )}
              {choice.name}
            </button>
          ))}
        </div>
      ) : null}
      <style jsx>
        {`
          .dropdownContainer {
            display: inline-block;
            vertical-align: middle;
            position: relative;
          }
          .btn {
            font-family: 'Open Sans', sans-serif;
            background: #7bc043;
            text-decoration: none;
            text-transform: uppercase;
            color: white;
            font-size: 14px;
            border-radius: 4px;
            border: none;
            display: inline-block;
            padding: 16px;
            padding-left: 24px;
            padding-right: 24px;
            outline: none;
            cursor: pointer;
          }
          .btnIcon {
            margin-right: 16px;
            display: inline;
          }
          .menu {
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            display: flex;
            flex-direction: column;
            z-index: 2;
            background: white;
            box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            overflow: hidden;
            min-width: 100%;
          }
          .choice {
            font-family: 'Open Sans', sans-serif;
            background: white;
            text-decoration: none;
            text-transform: uppercase;
            color: #333;
            min-width: 200px;
            font-size: 14px;
            border: none;
            border-bottom: 1px solid #efefef;
            display: flex;
            padding: 16px;
            padding-left: 24px;
            padding-right: 24px;
            text-align: left;
            outline: none;
            cursor: pointer;
            flex-direction: row;
          }
          .choice:hover {
            background: #fafafa;
          }
          .choice:last-child {
            border-bottom: 0px;
          }
        `}
      </style>
    </div>
  )
}


export default DropdownButton
