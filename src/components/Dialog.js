import React, {forwardRef, useImperativeHandle} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const FormDialog = forwardRef(function FormDialog(props, ref) {
  const [dialogIsOpen, setDialogIsOpen] = React.useState(false);
  const { children, style = {} } = props

  useImperativeHandle(ref, () => ({
    open: open,
    close: close
  }))

  const open = (e) => {
    if (e) e.stopPropagation()
    console.debug('Open - Props : ', props)
    setDialogIsOpen(true);
    console.debug('Open - Props : ', props, ' isOpen : ', dialogIsOpen)
  };

  const close = (e) => {
    if (e) e.stopPropagation()
    console.debug('Close')
    setDialogIsOpen(false);
  };

  return (
    <div>
      <h1>{props.children}</h1>
      <Dialog open={dialogIsOpen} onClose={close}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
        <div className='form'>{children}</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Save</Button>
          <Button onClick={close}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
})

export default FormDialog