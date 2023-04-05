import { Component } from 'react'
import React from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faClock } from '@fortawesome/free-regular-svg-icons'
//import { faTrash, faEdit, faPlay, faGlobe } from '@fortawesome/free-solid-svg-icons'

import SlideEditDialog from './SlideEditDialog'

//import { deleteSlide } from '../../actions/slide'

import { useRouter } from 'next/router.js'
import { useSession } from "next-auth/react"

import Icon from '@mui/material/Icon';

// i18next
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

function SlideCard(props) {
  const dialog = React.createRef()
  const { value, refresh = () => {} } = props
  const [loading, setLoading] = React.useState(false)
  const { t } = useTranslation()


  return (
    <div className='card'>
      <div className='order'>{value.order}</div>
      <div className='left'>
        <div
          className={'thumbnail'}
          style={{
            backgroundImage: value.type == 'photo' ? `url(${value.data})` : 'none',
            backgroundColor:
              value.type == 'youtube'
                ? '#c23616'
                : value.type == 'web'
                ? '#0097e6'
                : 'transparent'
          }}
        >
          {value.type == 'youtube' && (
             <Icon fontSize="small">play_arrow</Icon>
          )}
          {value.type == 'web' && (
             <Icon fontSize="small">public</Icon>
          )}
        </div>
      </div>
      <div className='middle'>
        <div className='title'>{value.title ? value.title : t('slidecard.title')}</div>
        <div className='duration'>
          <div className='icon'>
          <Icon fontSize="small">schedule</Icon>
          </div>
          <span className='text'>{value.duration}s</span>
        </div>
      </div>
      <div className='right'>
        <div className='actionIcon'>
        <Icon fontSize="small"
        onClick={() => dialog && dialog.current.open()}
        >edit</Icon>
        </div>
        <div className='actionIcon'>
        <Icon fontSize="small"
        onClick={
          loading
            ? () => {}
            : () =>
                this.setState({ loading: true }, () =>
                  deleteSlide(value._id)
                    .then(refresh)
                    .then(() => {
                      this.setState({ loading: false })
                    })
                )
        }
        >delete</Icon>
        </div>
      </div>
      <SlideEditDialog ref={this.dialog} slide={value._id} refresh={refresh} />
      <style jsx>
        {`
          .card {
            padding: 12px;
            font-family: 'Open Sans', sans-serif;
            border-radius: 4px;
            cursor: pointer;
            background: white;
            margin-top: 40px;
            margin-bottom: 40px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            position: relative;
            z-index: 1;
          }

          .title {
            font-family: 'Open Sans', sans-serif;
            font-size: 16px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #4f4f4f;
          }

          .left {
            font-family: 'Open Sans', sans-serif;
            justify-content: center;
            padding-right: 8px;
          }

          .duration {
            font-family: 'Open Sans', sans-serif;
            font-size: 14px;
            color: #878787;
          }

          .duration .icon {
            margin-right: 4px;
            display: inline;
            vertical-align: middle;
          }

          .duration .text {
            vertical-align: middle;
          }

          .middle {
            font-family: 'Open Sans', sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 8px;
            padding-right: 8px;
            flex: 1;
            min-width: 0;
          }

          .right {
            display: flex;
            flex-direction: row;
            font-family: 'Open Sans', sans-serif;
            justify-content: center;
            align-items: center;
            padding-left: 8px;
            padding-right: 8px;
          }

          .thumbnail {
            height: 60px;
            width: 60px;
            border-radius: 2px;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .actionIcon {
            margin-right: 8px;
            margin-left: 8px;
          }
        `}
      </style>
    </div>
  )
}


export default withTranslation() (SlideCard)
