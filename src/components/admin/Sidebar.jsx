/**
 * @fileoverview Menu sidebar for the administrator pages, used to navigate the
 * admin interface and log out)
 */

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Icon from '@mui/material/Icon';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/**import {
  faKey,
  faTv,
  faEye,
  faThLarge,
  faImages,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'
import DropdownButton from '../DropdownButton'
*/
// i18next
import { useTranslation } from 'next-i18next'

//import  {disp}  from '../../lib/store'
//import { getDisplays } from '../../actions/display'
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

// Simulation DB for UIX test
import displaysDb from '../../lib/db-fictive/displays'


function Sidebar(props) {
  const display = displaysDb[0]
  const [displays, setDisplays] = useState(props.displays || [])
  const { t } = useTranslation()
  const Session = useSession()
  const router = useRouter()
  const loggedIn = Session.status === 'authenticated'
  /** 
  componentDidMount() {
    const host = window.location.origin
    getDisplays(host).then(async displays => {
      this.setState({ displays })
      const displayId = (display.id === null) ? displays[0]._id : display.id
      await display.setId(displayId)
    })
  }
*/
    const menu = loggedIn
    ? [
        {
          id: 'screen',
          name: t('sidebar.screen'),
          path: '/admin/screens?display=' + display.id,
          icon: 'tv'
        },
        {
          id: 'layout',
          name: t('sidebar.layout'),
          path: '/admin/layout?display=' + display.id,
          icon: 'grid_view'
        },
        {
          id: 'preview',
          name: t('sidebar.preview'),
          path: '/admin/preview?display=' + display.id,
          icon: 'visibility'
        },
        {
          id: 'slideshow',
          name: t('sidebar.slideshow'),
          path: '/admin/slideshows?display=' + display.id,
          icon: 'slideshow'
        }
      ]
    : [
        {
          id: 'login',
          name: t('sidebar.login'),
          path: '/login?display=' + display.id,
          icon: 'login'
        }
      ]



  const navigateToAdmin = async id => {
    router.push('/admin/layout?display=' + id)
    await display.setId(id)
  }
  return (
    <div className='sidebar'>
      {loggedIn && (
        /** 
        <DropdownButton
          onSelect={this.navigateToAdmin}
          choices={displays.map(display => ({
            key: display._id,
            name: display.name
          }))}
          style={{ marginTop: 20, marginBottom: 20 }}
          menuStyle={{ left: 20, top: '70%' }}
        >
          <div className='logo'>
            <div className='icon'>
              <FontAwesomeIcon icon={faTv} fixedWidth color='#7bc043' />
            </div>
            <div className='info'>
              <span className='name'>{display.name}</span>
              <span className='status online'>{t('sidebar.online')}</span>
            </div>
            <div className='caret'>
              <FontAwesomeIcon icon={'caret-down'} fixedWidth />
            </div>
          </div>
        </DropdownButton>
        )}*/
      <ul className='menu'>
        <li>
          {t('sidebar.session.username')} {Session?.data?.username}
        </li>
        {menu.map(item => (
          <Link href={item.path} key={item.path}>
            <li className={item.path == router.pathname && 'active'}>
              <Icon fontSize="small">{item.icon}</Icon>
              <span className={'text'}>
                {'   '}
                {item.name}
              </span>
            </li>
          </Link>
        ))}
      </ul>
      )}    
      {loggedIn && (
        <div className='logout' onClick={() => signOut({callbackUrl: '/'})}>
          <Icon fontSize="small">logout</Icon>
          <span className={'text'}>{t('sidebar.logout')}</span>
        
        </div>
      )}
      <style jsx>
        {`
          .sidebar {
            min-width: 300px;
            max-width: 300px;
            min-height: 100vh;
            background: white;
            display: flex;
            flex-direction: column;
          }

          .menu {
            list-style: none;
            padding: 0px;
            margin: 0px;
            display: flex;
            flex-direction: column;
            flex: 1;
            width: 100%;
          }
          .menu li,
          .logout {
            padding: 20px;
            text-transform: uppercase;
            font-family: 'Open Sans', sans-serif;
            font-size: 16px;
            font-weight: 600;
            color: #4f4f4f;
          }
          .menu li.active,
          .menu li:hover,
          .logout:hover {
            background: #f0f0f0;
            cursor: pointer;
          }
          .menu li .text {
            margin-left: 8px;
          }
          .logo {
            display: flex;
            flex-direction: row;
            padding-right: 10px;
            padding-left: 10px;
            position: relative;
            cursor: pointer;
          }
          .logo .icon {
            min-width: 3em;
            min-height: 3em;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: scale(2);
          }
          .logo .info {
            font-family: 'Open Sans', sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            white-space: nowrap;
            overflow: hidden;
          }
          .logo .info .name {
            font-weight: 600;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .logo .info .status.online {
            color: #7bc043;
          }
          .logo .info .status.online::before {
            content: '•';
            color: #7bc043;
            font-size: 32px;
            vertical-align: middle;
            line-height: 16px;
            padding-right: 4px;
          }
          .logo .caret {
            position: absolute;
            top: 50%;
            margin-top: -8px;
            right: 16px;
          }
          @media only screen and (max-width: 900px) {
            .sidebar {
              min-width: 0px;
            }
            .logo .info {
              display: none;
            }
            .logo .icon {
              min-width: 0px;
              min-height: 0px;
              transform: scale(1);
            }
            .logo {
              margin: 0px;
              padding: 0px;
            }
            .menu li .text,
            .logout .text {
              display: none;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Sidebar
