import React, { useEffect, forwardRef, useImperativeHandle, useState, createRef } from 'react'
//import Dialog from '../Dialog'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Form from '../Form/Form'
//import { Form, Button, ButtonGroup } from '../Form'
//import { getWidget, updateWidget } from '../../actions/widgets'
import widgets from '../../lib/db-fictive/widgets.json'

import Button from '@mui/material/Button';

const WidgetEditDialog = forwardRef(function WidgetEditDialog(props, ref) {
  const [data, setData] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const { OptionsComponent = Form } = props
  const [id, setId] = useState()
  const dialog = createRef(null)

  useImperativeHandle(ref, () => ({
    open: open,
    handleChange: handleChange
  }))

  useEffect(() => {
    console.debug('props : ', props)
    getProps()
  }),[]

  const getProps = () => {
    setId(props.id)
    setData(widgets[2].data)
  }

  const open = e => {
    console.debug('Open - e : ', e)
    if (e) e.stopPropagation()
    setIsOpen(true)
    dialog && dialog.current && dialog.current.open()
  }

  const close = e => {
    if (e) e.stopPropagation()
    setIsOpen(false)
    return Promise.resolve().then(
      () => dialog && dialog.current && dialog.current.close()
    )
  }

  const handleChange = data => {
    console.log('handleChange data : ', data)
    setData(data)
  }

  const saveData = () => {
    console.debug('saveData : ', id, ' data : ', data)
    close()
    /*
    return updateWidget(id, { data }).then(() => {
      close()
    })
    */
  }
/**
  componentDidMount() {
    const { id } = this.props
    //getWidget(id).then(({ data }) => this.setState({ data }))
  }
*/

  return (
    <Dialog 
    fullWidth={true}
    maxWidth={'md'}
    sx={{ m: 0, p: 2}} 
    ref= {dialog} 
    open={isOpen} onClose={close}>
    <DialogContent>
      <OptionsComponent data={data} onChange={handleChange} />
    </DialogContent>
    <DialogActions>
      <Button variant="contained" onClick={saveData}>{'Save'}</Button>
      <Button variant="outlined" onClick={close}>{'Cancel'}</Button>
    </DialogActions>
  </Dialog>

  )
})


export default WidgetEditDialog
