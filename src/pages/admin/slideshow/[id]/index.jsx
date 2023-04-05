import React from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash'

//import { view } from '@risingstack/react-easy-state'

// i18next
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Frame from '../../../../components/admin/Frame'
import SlideList from '../../../../components/admin/SlideList.js'
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
  const [slideshow, setSlideshow] = React.useState(props.slideshow)
  const slideList = React.createRef()
  const dialog = React.createRef()
  const router = useRouter()
  const Session = useSession()
  const { t } = useTranslation()
  const loggedIn = Session.status ==='authenticated'

  useEffect(() => {
    
    const displayId = props.router.query.display
    console.log('displayId : ', displayId)
    //display.setId(displayId)

  })
  /**
  componentDidMount() {
    //const { displayId } = this.props
    const displayId = this.props.router.query.display
    console.log('displayId : ', displayId)
    display.setId(displayId)
  }
 */
  const refresh = () => {
    const { _id: id } = props.slideshow
    return getSlideshow(id).then(slideshow => {
      this.setState({ slideshow }, () => {
        this.slideList && this.slideList.current && this.slideList.current.refresh()
      })
    })
  }

  const openAddDialog = () => {
    return Promise.resolve(this.dialog && this.dialog.current.open())
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
          refresh={this.refresh}
          ref={this.dialog}
        />
        <Button
          text={t('slideshow.button')}
          color='#7bc043'
          style={{ flex: 1, margin: 0, width: '100%', marginTop: 20 }}
          onClick={this.openAddDialog}
        />
        <SlideList ref={this.slideList} slideshow={slideshow && slideshow._id} />
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


export async function getServerSideProps({query,req}){
  const id = query && query.id
  const host =
    req && req.headers && req.headers.host ? 'http://' + req.headers.host : window.location.origin
  const slideshow = id && (await getSlideshow(id, host))
  return { props: {slideshow: slideshow, host: host }}
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
/**
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
*/

export default withRouter(withTranslation() (withSession(view(Slideshow))))
