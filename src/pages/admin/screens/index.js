import { useRef }from 'react'

//import { view } from '@risingstack/react-easy-state'

// i18next
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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

  // or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common'
      ])),
      // Will be passed to the page component as props
    },
  }
}

//withSession(Screens)
export default Screens
