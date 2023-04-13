import React, {createRef, useState} from 'react'
import dynamic from 'next/dynamic'

import SlideEditDialog from './Admin/SlideEditDialog.jsx'

// i18next
import { useTranslation } from 'next-i18next'


const DropzoneWithNoSSR = dynamic(() => import('react-dropzone'), {
  ssr: false,
  loading: () => (
    <p>Loading...</p>
  )
})

function Upload(props) {
  const { slideshow, refresh } = props
  const dialog = createRef()
  const { t } = useTranslation()
  const [lastFile, setLastFile] = useState(null)


  const handleOnDropAccepted = acceptedFiles => {
    dialog && dialog.current.open()
    const file = Object.assign(acceptedFiles[acceptedFiles.length - 1], {
      preview:
        URL && URL.createObjectURL
          ? URL.createObjectURL(acceptedFiles[acceptedFiles.length - 1])
          : typeof window !== 'undefined' && window.webkitURL
          ? window.webkitURL.createObjectURL(acceptedFiles[acceptedFiles.length - 1])
          : null
    })
    setLastFile(file)
  }

  const handleOnDropRejected = rejectedFiles => {
    alert(t('upload.alert') + rejectedFiles[rejectedFiles.length - 1].name)
  }




  return (
    <div>
      <SlideEditDialog
        slideshow={slideshow}
        upload={lastFile}
        refresh={refresh}
        ref={dialog}
      />
      <DropzoneWithNoSSR
        accept={'image/*'} //Skipped "0" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.
        onDropAccepted={handleOnDropAccepted}
        onDropRejected={handleOnDropRejected}
        multiple={false}
      >
        {({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <div {...getRootProps()} className='upload'>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>{t('upload.dnd.true')}</p>
              ) : (
                <p>{t('upload.dnd.false')}</p>
              )}
            </div>
          )
        }}
      </DropzoneWithNoSSR>
      <style jsx>
        {`
          .upload {
            padding: 20px;
            font-family: 'Open Sans', sans-serif;
            text-align: center;
            border-radius: 4px;
            border: 2px dashed #adadad;
            cursor: pointer;
            background: white;
            outline: none;
          }
        `}
      </style>
    </div>
  )
}


export default Upload
