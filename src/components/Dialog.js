import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {
  const [dialogIsOpen, setDialogIsOpen] = React.useState(false);

  const open = (e) => {
    if (e) e.stopPropagation()
    console.debug('Open - Props : ', props)
    setDialogIsOpen(true);
    console.debug('Open - Props : ', props, ' isOpen : ', dialogIsOpen)
  };

  const close = () => {
    console.debug('Close')
    setDialogIsOpen(false);
  };

  return (
    <div>
      <h1>{props.children}</h1>
      <Dialog open={dialogIsOpen} onClose={close}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={close}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}