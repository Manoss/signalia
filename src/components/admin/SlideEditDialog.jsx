import React, {useEffect, useState, forwardRef, useImperativeHandle} from 'react'
import _ from 'lodash'

//import Dialog from '../Dialog'
//import { Form, Input, Button, ButtonGroup } from '../Form'

//import { getSlide, addSlide, updateSlide } from '../../actions/slide'

// i18next
import { useTranslation } from 'next-i18next'
//import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Button, Box, MenuItem, TextField, Dialog, DialogTitle, DialogActions, DialogContent } from '@mui/material';

const SlideEditDialog = forwardRef(function SlideEditDialog(props, ref) {
  /** 
  const [upload, setUpload] = React.useState(props.upload,
    ...(props.upload ? { type: 'photo' } : {}))
  */
  const [state, setState] = useState({})
  const [dialog,setDialog] = useState(false)
  const { data, title, description, duration, type = 'photo', upload } = state
  const { t } = useTranslation()
  const choices = [
    { id: 'youtube', label: 'Youtube Video' },
    { id: 'web', label: 'Web Page' },
    { id: 'photo', label: 'Photo' }
  ]

 

  useImperativeHandle(ref, () => ({
    open: open
  }))

  useEffect(() => {
    console.debug('useEffect')
    console.debug('ref : ', ref, ' props : ', props)
    //refresh()
  })
/**
  componentDidUpdate(prevProps) {
    if (this.props.upload != prevProps.upload) {
      this.setState({
        upload: this.props.upload,
        ...(this.props.upload ? { type: 'photo' } : {})
      })
    }
  }
*/
  const refresh = () => {
    const { slide, upload } = props
    if (slide) {
    
      return getSlide(slide).then(data => {
        setState({
          data: undefined,
          title: undefined,
          description: undefined,
          type: undefined,
          duration: undefined,
          ...data,
          upload,
          ...(upload ? { type: 'photo' } : {})
        })
      })
    } else {
      setState({
        data: undefined,
        title: undefined,
        description: undefined,
        type: undefined,
        duration: undefined,
        upload,
        ...(upload ? { type: 'photo' } : {})
      })
      return Promise.resolve()
    }
  }

  const open = () => {
    console.debug('open')
    refresh()
    //dialog && dialog.open()
    setDialog(true)
  }

  const close = () => {
    console.debug('close')
    const { refresh } = props
    setDialog(false)
    //dialog && dialog.close()
    if (refresh) return refresh()
    return Promise.resolve()
  }

  const handleChange = (name, value) => {
    setState({
      [name]: value,
      // Clean up data if the type of slide changed
      ...(name == 'type' ? { data: '' } : {})
    })
  }

  const save = () => {
    const { slide, slideshow } = props
    const { upload, ...otherProps } = state
    if (slideshow) {
      /**
      return addSlide(slideshow, upload, _.pickBy(otherProps, v => v !== undefined)).then(() => {
        close()
      })*/
      close()
    } else {
      /**
      return updateSlide(slide, upload, _.pickBy(otherProps, v => v !== undefined)).then(() => {
        close()
      })*/
      close()
    }
  }

  return (
    <Dialog 
    sx={{
      '& .MuiTextField-root': { m: 1, width: '50ch' },
    }}
      onClose={close} open={dialog}>
      <DialogTitle>Title</DialogTitle>
      <DialogContent>
      <form>
        <div>
        <TextField
          select
          name={'type'}
          label={'Slide Type'}
          defaultValue={type}
          onChange={handleChange}
        > {choices.map((choice) => (
          <MenuItem key={choice.id} value={choice.id}>
            {choice.label}
          </MenuItem>
        ))}</TextField>
        </div>
        {type == 'photo' || upload ? (
          <div>
          <TextField
            type={'photo'}
            label={'Photo'}
            name={'upload'}
            defaultValue={upload ? upload.preview : data}
            onChange={handleChange}
            inline={true}
          ></TextField>
          </div>
        ) : (
          <div>
          <TextField
            type={'text'}
            label={type == 'web' ? 'Web URL' : type == 'youtube' ? 'Youtube URL' : 'Data'}
            name={'data'}
            defaultValue={data}
            onChange={handleChange}
          ></TextField>
          </div>
        )}
        <div>
        <TextField
          type={'number'}
          label={'Duration'}
          name={'duration'}
          defaultValue={duration}
          placeholder={'5'}
          onChange={handleChange}
        ></TextField>
        </div>
        <div>
        <TextField
          type={'text'}
          label={'Title'}
          name={'title'}
          defaultValue={title}
          placeholder={'Header title...'}
          onChange={handleChange}
        ></TextField>
        </div>
        <div>
        <TextField
          multiline
          rows={4}
          label={'Description'}
          name={'description'}
          defaultValue={description}
          placeholder={'Short content description...'}
          onChange={handleChange}
        ></TextField>
        </div>
      </form>
      </DialogContent>
      <DialogActions>
        <Button variant="contained"onClick={save}>Save</Button>
        <Button variant="outlined"onClick={close}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
})

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

export default SlideEditDialog
