import React, {useState, useEffect} from 'react'
import ColorPicker from './ColorPicker'
import ContentLoader from 'react-content-loader'
import dynamic from 'next/dynamic'
import Image from 'next/image'
//MUI
import {Typography, TextField, MenuItem} from '@mui/material';

const DropzoneWithNoSSR = dynamic(() => import('react-dropzone'), {
  ssr: false,
  loading: () => (
    <ContentLoader height={120} width={640}>
      <rect x='0' y='0' rx='5' ry='5' width='100%' height='100' />
    </ContentLoader>
  )
})

function Input(props) {
    console.debug('input props value : ', props)   
    const [value, setValue] = useState(props.value)
    const [state, setState] = useState(value)
    const {
      label = '',
      inline = true,
      expand = true,
      type = 'text',
      placeholder = '',
      choices = [],
      disabled = false,
      onKeyDown = () => {},
      className = ''
    } = props
/**
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
  }
*/

  useEffect(() => {
    console.debug('On change useEffect')
  },[])

  const handleInputChange = event => {
    console.debug('handleInputChange : ', event.target.value)
    const target = event.target
    const value = target.value

    handleChange(value)
  }

  const handleChange = value => {
    console.debug('HandleChange : ', value, ' Name : ', props.name)
    const { onChange = () => {}, name = '' } = props
    /**
    setValue(
      { value }, () => {
        onChange(name, value)
      }
    )
    */
    onChange(props.name, value)
    //setState({...state, [props.name]:value})
  }

  const handleOnDropAccepted = acceptedFiles => {
    const { onChange = () => {} } = props
    const file = Object.assign(acceptedFiles[acceptedFiles.length - 1], {
      preview:
        URL && URL.createObjectURL
          ? URL.createObjectURL(acceptedFiles[acceptedFiles.length - 1])
          : typeof window !== 'undefined' && window.webkitURL
          ? window.webkitURL.createObjectURL(acceptedFiles[acceptedFiles.length - 1])
          : null
    })
    onChange('upload', file)
  }

  const handleOnDropRejected = rejectedFiles => {
    alert('This file type is not allowed:' + rejectedFiles[rejectedFiles.length - 1].name)
  }

  return (
    <div className='inputGroup'>
      
      {type == 'text' || type == 'password' || type == 'number' ? (
        <TextField
          label={label}
          className={className}
          type={type}
          helperText={placeholder}
          defaultValue={value}
          onChange={handleInputChange}
          disabled={disabled}
          onKeyDown={onKeyDown}
        />
      ) : type == 'select' ? (
        <TextField
          label={label}
          select
          onChange={handleInputChange}
          defaultValue={value}
          >
          {choices.map(choice => (
            <MenuItem  key={choice.id} value={choice.id}>
              {choice.label}
            </MenuItem >
          ))}
        </TextField>
      ) : type == 'color' ? (
        <>
          <Typography>{label}</Typography>
          <ColorPicker label={label} color={value} onChange={handleChange} />
        </>
      ) : type == 'photo' ? (
        <DropzoneWithNoSSR
          accept='image/*'
          onDropAccepted={handleOnDropAccepted}
          onDropRejected={handleOnDropRejected}
          multiple={false}
        >
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div {...getRootProps()} className='upload'>
                <input {...getInputProps()} />
                {isDragActive || (!value || value == '') ? (
                  <div className={'photo-upload'}>Drop a photo here...</div>
                ) : (
                  <div className={'photo'}>
                    <Image
                      className={'thumbnail'}
                      src={value}
                      width='100'
                      height='100'
                    />
                    <span className={'link'}>{value}</span>
                  </div>
                )}
              </div>
            )
          }}
        </DropzoneWithNoSSR>
      ) : (
        <TextField
          multiline
          rows={4}
          label={label}
          onChange={handleInputChange}
          defaultValue={value}
          helperText={placeholder}
          className={className}
        />
      )}
      <style jsx>{`
        .inputGroup {
          margin-bottom: 16px;
          display: ${!inline ? 'flex' : 'inline-block'};
          flex-direction: ${inline ? 'row' : 'column'};
          justify-content: flex-start;
        }

        label {
          margin-right: 16px;
          color: #878787;
          font-family: 'Open Sans', sans-serif;
          min-width: 100px;
          max-width: ${inline ? '100px' : 'none'};
          display: inline-block;
          padding-top: 16px;
          padding-bottom: ${inline ? '0px' : '16px'};
        }

        input,
        textarea,
        select,
        .photo,
        .photo-upload {
          font-family: 'Open Sans', sans-serif;
          color: #333;
          background-color: #f7f7f7;
          min-height: 40px;
          min-width: ${expand ? '450px' : '0px'};
          border-radius: 2px;
          border: none;
          outline: none;
          padding: 8px;
          padding-left: 16px;
          padding-right: 16px;
          font-size: 16px;
        }

        input:disabled,
        textarea:disabled,
        select:disabled {
          background-color: #d7d7d7;
          cursor: not-allowed;
        }

        textarea {
          resize: vertical;
          min-height: 100px;
        }

        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          padding: 16px;
        }

        input[type='number'] {
          min-width: 50px !important;
          max-width: 50px !important;
          text-align: center;
        }

        .upload {
          display: ${inline ? 'inline-block' : 'flex'};
          cursor: pointer;
          outline: none;
          max-width: 100%;
        }

        .photo {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 8px;
        }

        .photo-upload {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 8px;
          font-family: 'Open Sans', sans-serif;
          text-align: center;
          border-radius: 4px;
          border: 2px dashed #adadad;
          background: white;
          height: 40px;
        }

        .photo .link {
          margin-left: 16px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 400px;
        }

        .photo .thumbnail {
          height: 40px;
          width: 40px;
          border-radius: 2px;
          background-size: cover;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

export default Input
