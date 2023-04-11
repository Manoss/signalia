import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';

function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChoice = (event, choice) => {
    onSelect(choice.key)
    console.log('handleChoice : ', event, ' Choice : ', choice)
    setAnchorEl(null)
  }
  const title = props.title || ''
  const choices = [] = props.choices || []
  const onSelect = props.onSelect

  console.debug('Menu choices : ', choices)
  console.debug('onSelect : ', onSelect)

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {choices.map(choice => (
            
                <MenuItem
                    key={choice.key}
                    onClick={(event) => handleChoice(event, choice)}
                >
                <ListItemIcon>
                    <Icon fontSize="small">{choice.icon}</Icon>
                </ListItemIcon>
                    {choice.key}
                </MenuItem>

            
        )
        )}

      </Menu>
    </div>
  );
}

export default BasicMenu