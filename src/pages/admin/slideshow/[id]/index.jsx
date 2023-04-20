import React, {useEffect, useState, useRef, createRef} from 'react'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash'

//import { view } from '@risingstack/react-easy-state'

// i18next
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Frame from '../../../../components/admin/Frame'
import SlideList from '../../../../components/admin/SlideList'
import SlideEditDialog from '../../../../components/admin/SlideEditDialog'
import Upload from '../../../../components/Upload'
//import Button from '../../../components/Form/Button.js'
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Stack from '@mui/material/Stack';
//import Dialog from '../../../components/Dialog.js'
import Dialog from '../../../../components/Dialog'

import { getSlideshow, updateSlideshow } from '../../../../lib/actions/slideshow'
//import { display } from '../../../stores'
import { useStateContext } from '@/lib/contexts/DisplayContext'


import { useRouter } from 'next/router.js'
import { useSession } from "next-auth/react"

const updateSlideshowThrottled = _.debounce((id, data) => {
  return updateSlideshow(id, data)
}, 300)

function Slideshow(props) {
  const { displayCtx, setDisplayCtx } = useStateContext();
  const dialog = createRef(null)
  const [slideshow, setSlideshow] = useState()
  const [id, setId] = useState(null)
  const slideList = createRef()
  const router = useRouter()
  const Session = useSession()
  const { t } = useTranslation()
  const loggedIn = Session.status ==='authenticated'


  useEffect(() => {
    console.log('useEffect dialog : ', dialog.current)
    const displayId = displayCtx._id//router.query.display
    console.log('displayId : ', displayId, 'Props : ', props, ' Id : ',id)

    //display.setId(displayId)

  },[dialog,displayCtx])

  useEffect(() => {
    const {id} = router.query
    setId(id)
    console.log('Set Id slideshow : ', id)

    getSlideshow(id).then(slideshow => {
      setSlideshow(slideshow)
    })

  },[router.query, id])

  /**
  componentDidMount() {
    //const { displayId } = this.props
    const displayId = this.props.router.query.display
    console.log('displayId : ', displayId)
    display.setId(displayId)
  }
 */

  const refresh = async() => {
    
    console.debug('Refresh')
    
    //const { _id: id } = slideshow
    return getSlideshow(id).then(slideshow => {
      setSlideshow({ slideshow })
      console.log('Refresh slideshow : ', slideshow)
      slideList && slideList.current && slideList.current.refresh() 

      
      /**
      this.setState({ slideshow }, () => {
        slideList && slideList.current && slideList.current.refresh()
      })
      */
    })
  }

  const openAddDialog = () => {
    return Promise.resolve(dialog && dialog.current.open())
  }

  return (
    <Frame loggedIn={loggedIn}>
      <h1 className='title'>{t('slideshow.title.name')} : </h1>{' '}
      <div className='editable-title'>
        <input
          className='input'
          placeholder={t('slideshow.title.placeholder')}
          value={slideshow && slideshow.title}
          onChange={event => {
            const target = event.target
            const title = target && target.value
            setSlideshow(slideshow => ({
              ...slideshow,
              title
            }))
            updateSlideshowThrottled(slideshow._id, { title })
            
            /** 
            this.setState(
              {
                slideshow: {
                  ...slideshow,
                  title
                }
              }, 
              () => {
                updateSlideshowThrottled(slideshow._id, { title })
              }
            )
            */
          }}
          onClick={e => {
            if (e) e.stopPropagation()
          }}
          size={slideshow && slideshow.title && slideshow.title.length}
        />
        <div className='icon'>
          <Icon fontSize="small">create</Icon>
        </div>
      </div>
      
      <div className='wrapper'>
        <Stack spacing={2}>
          <Upload slideshow={slideshow && slideshow?._id} refresh={refresh} />
          <SlideEditDialog
            slideshow={slideshow && slideshow._id}
            refresh={refresh}
            ref={dialog}
          />
          <Button 
            variant="contained"
            onClick={openAddDialog}
          >{t('slideshow.button')}</Button>
          <SlideList ref={slideList} slideshow={slideshow && slideshow._id} />
        </Stack>
        <Dialog />
      </div>
      <style jsx>
        {`
          h1 {
            font-family: 'Open Sans', sans-serif;
            font-size: 24px;
            color: #4f4f4f;
            margin: 0px;
          }
          .title {
            display: inline-block;
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
          .wrapper {
            margin: 40px auto;
            max-width: 640px;
          }
        `}
      </style>
    </Frame>
  )
}

/** 
export async function getServerSideProps({query,req}){
  const id = query && query.id
  const host =
    req && req.headers && req.headers.host ? 'http://' + req.headers.host : window.location.origin
  const slideshow = id && (await getSlideshow(id, host))
  return { props: {slideshow: slideshow, host: host }}
}
*/

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export async function getServerSideProps ({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common'
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default Slideshow
