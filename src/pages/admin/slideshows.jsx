import React, {useState, createRef} from 'react'

//import { view } from '@risingstack/react-easy-state'

// i18next
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Frame from '../../components/admin/Frame'
import SlideshowList from '../../components/admin/SlideshowList'
//import Dialog from '../components/Dialog.js'
//import { Button } from '../components/Form'

import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';

//import { addSlideshow } from '../actions/slideshow'

//import { display } from '../stores'

import { useRouter } from 'next/router.js'
import { useSession } from "next-auth/react"

function Slideshows(props) {
  const slideshowList = createRef()
  const Session = useSession()
  const router = useRouter()
  const { t } = useTranslation()
  const loggedIn = Session.status ==='authenticated'

  const add = () => {
    return addSlideshow().then(() => {
      slideshowList && slideshowList.current && slideshowList.current.refresh()
    })
  }
/** 
  componentDidMount() {
    //const { displayId } = this.props
    const displayId = this.props.router.query.display
    console.log('displayId : ', displayId)
    display.setId(displayId)
  }
*/

  return (
    <Frame loggedIn={loggedIn}>
      <h1>{t('slideshows.title')}</h1>
      <div className='wrapper'>
        <SlideshowList ref={slideshowList} />
        {/**
        <Dialog />*/}
        <Button
          onClick={add}
        >{t('slideshows.button')}</Button>
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

export default Slideshows