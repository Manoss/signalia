import {useEffect, useState, forwardRef, useImperativeHandle} from 'react'
import _ from 'lodash'

//import Dialog from '../Dialog'
import { Input } from '../Form'

import { getSlide, addSlide, updateSlide } from '../../lib/actions/slide'

// i18next
import { useTranslation } from 'next-i18next'
//import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Button, Dialog, DialogTitle, DialogActions, DialogContent } from '@mui/material';

const SlideEditDialog = forwardRef(function SlideEditDialog(props, ref) {

  const [state, setState] = useState({data: null, title:'', description:'', duration:5, type: 'photo', upload:props.upload })
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
    console.debug('useEffect SlideEditDialog - ref : ', ref, ' props : ', props, ' upload : ', upload, ' state : ', state)
    
    //refresh()
  })

  useEffect(() => {
    console.log('useEffetct Props Diag : ', props.upload)
    setState( state => ({
      ...state,
      upload: props.upload,
      ...(props.upload ? { type: 'photo' } : {})
    }))
  },[props])
  
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
  const refresh = async() => {
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
      setState(state => ({
        ...state,
        data: undefined,
        title: undefined,
        description: undefined,
        type: undefined,
        duration: undefined,
        upload,
        ...(upload ? { type: 'photo' } : {})
      }))
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
    setState(state => ({
      ...state,
      [name]: value,
      // Clean up data if the type of slide changed
      ...(name == 'type' ? { data: '' } : {})
    }))
  }

  const save = () => {
    const { slide, slideshow } = props
    const { upload, ...otherProps } = state
    console.log('Save Props : ',props, ' State : ', state, ' Upload : ', upload)
    if (slideshow) {
      
      return addSlide(slideshow, upload, _.pickBy(otherProps, v => v !== undefined)).then(() => {
        close()
      })
      //close()
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
        <Input
          type={'select'}
          name={'type'}
          label={'Slide Type'}
          value={type}
          choices={choices}
          onChange={handleChange}
          ></Input>
        </div>
        {type == 'photo' || upload ? (
          <div>
          <Input
            type={'photo'}
            label={'Photo'}
            name={'upload'}
            value={upload ? upload.preview : data}
            onChange={handleChange}
            inline={true}
          ></Input>
          </div>
        ) : (
          <div>
          <Input
            type={'text'}
            label={type == 'web' ? 'Web URL' : type == 'youtube' ? 'Youtube URL' : 'Data'}
            name={'data'}
            value={data}
            onChange={handleChange}
          ></Input>
          </div>
        )}
        <div>
        <Input
          type={'number'}
          label={'Duration'}
          name={'duration'}
          value={duration}
          placeholder={'Secondes'}
          onChange={handleChange}
        ></Input>
        </div>
        <div>
        <Input
          type={'text'}
          label={'Title'}
          name={'title'}
          value={title}
          placeholder={'Header title...'}
          onChange={handleChange}
        ></Input>
        </div>
        <div>
        <Input
          type={'textarea'}
          label={'Description'}
          name={'description'}
          value={description}
          placeholder={'Short content description...'}
          onChange={handleChange}
        ></Input>
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
