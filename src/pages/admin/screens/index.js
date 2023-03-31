import { useRef }from 'react'

//import { view } from '@risingstack/react-easy-state'

// i18next
import { useTranslation } from 'react-i18next'

import Frame from '../../../components/admin/Frame'
import ScreenList from '../../../components/admin/ScreenList'
//import Dialog from '../../components/Dialog.js'
//import { Button } from '../../components/Form'

//import { addDisplay } from '../../actions/display'

//import { display } from '../../stores'

import { useSession } from "next-auth/react"
//MUI
import Button from '@mui/material/Button';

// Simulation DB for UIX test
import displays from '../../../lib/db-fictive/displays'


function Screens(props)  {
  const Session = useSession()
  const screenList = useRef()
  const { t } = useTranslation()

  //TODO add Helper Testing
  const addDisplay = {
  
    _id: {
      $oid: "63fe1510493ec27e2418074c"
    },
    layout: "spaced",
    widgets: [
      {
        $oid: "63fe1f6d0ec17d9704c48d50"
      },
      {
        $oid: "640210a4be6f8ede55b3c092"
      },
      {
        $oid: "6405a9d5f8db32bd73ca9dba"
      },
      {
        $oid: "640b2ed69b8a097b82defbbd"
      },
      {
        $oid: "6421a9367cf4b7782e3971a0"
      }
    ],
    name: "Maison Accueil",
    statusBar: [
      "date_TFuo8HOfO",
      "spacer_dqjssq293h",
      "time__qv5YEH5m4"
    ]
  }

  const add = () => {

    console.debug('Add Display : ')
    screenList && screenList.current && screenList.current.refresh()
    /** 
    return addDisplay().then(() => {
      screenList && screenList.current && screenList.current.refresh()
    })*/
  }
/** 
  componentDidMount() {
    const { displayId } = this.props
    display.setId(displayId)
  }
*/


    const loggedIn = Session.status ==='authenticated'
    console.log('LoggedIn Screens : ', loggedIn)
    return (
      <Frame loggedIn={loggedIn} display={null}>
        <h1>{t('screen.title')}</h1>
        <div className='wrapper'>
          <ScreenList ref={screenList} />

          {/**
          <Dialog />
          <Button
            text={t('screen.button')}
            color={'#8bc34a'}
            onClick={this.add}
            style={{ marginLeft: 0, width: '100%' }}
          />*/
          <Button style={{ marginLeft: 0, width: '100%' }} onClick={add} variant="contained">{t('screen.button')}</Button>
          }
        </div>
        <style jsx>
          {`
            h1 {
              font-family: 'Open Sans', sans-serif;
              font-size: 24px;
              color: #4f4f4f;
              margin: 0px;
            }
            .wrapper {
              margin: 40px auto;
              max-width: 640px;
            }
          `}
        </style>
      </Frame>
    )
  }

//withSession(Screens)
export default Screens
