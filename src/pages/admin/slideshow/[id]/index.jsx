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
//import Upload from '../../../components/Upload.js'
//import Button from '../../../components/Form/Button.js'
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
//import Dialog from '../../../components/Dialog.js'

//import { getSlideshow, updateSlideshow } from '../../../actions/slideshow'
//import { display } from '../../../stores'

import { useRouter } from 'next/router.js'
import { useSession } from "next-auth/react"

const updateSlideshowThrottled = _.debounce((id, data) => {
  return updateSlideshow(id, data)
}, 300)

function Slideshow(props) {
  const [slideshow, setSlideshow] = useState(props.slideshow)
  const slideList = createRef()
  const dialog = createRef()
  const router = useRouter()
  const Session = useSession()
  const { t } = useTranslation()
  const loggedIn = Session.status ==='authenticated'

  useEffect(() => {
    
    const displayId = router.query.display
    console.log('displayId : ', displayId)
    //display.setId(displayId)

  },[])
  /**
  componentDidMount() {
    //const { displayId } = this.props
    const displayId = this.props.router.query.display
    console.log('displayId : ', displayId)
    display.setId(displayId)
  }
 */
  const refresh = () => {
    
    console.debug('Refresh')
    /** 
    const { _id: id } = slideshow
    
    return getSlideshow(id).then(slideshow => {
      setSlideshow({ slideshow }, () => {
        slideList && slideList.current && slideList.current.refresh()
      }) 
      /**
      this.setState({ slideshow }, () => {
        slideList && slideList.current && slideList.current.refresh()
      })
      
    })*/
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
            setSlideshow({
              ...slideshow,
              title
            }, () => {
              updateSlideshowThrottled(slideshow._id, { title })
            } )
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
          <Icon fontSize="small">pencil</Icon>
        </div>
      </div>
      <div className='wrapper'>

        {/**<Upload slideshow={slideshow && slideshow._id} refresh={this.refresh} /> */}
        <SlideEditDialog
          slideshow={slideshow && slideshow._id}
          refresh={refresh}
          ref={dialog}
        />
        <Button
          onClick={openAddDialog}
        >{t('slideshow.button')}</Button>
        <SlideList ref={slideList} slideshow={slideshow && slideshow._id} />
        {/**<Dialog />*/}
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
