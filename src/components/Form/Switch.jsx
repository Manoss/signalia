import React, { useState } from 'react'
import { Switch, Icon } from '@mui/material/'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import ReactSwitch from 'react-switch'

function Switchs(props) {
  const [checked, setChecked] = useState(props.checked = false)
  const {
    checkedLabel,
    uncheckedLabel,
    checkedIcon,
    uncheckedIcon,
    inline = true,
    expand = true,
    disabled = false,
    color = '#7bc043',
    className
  } = props
/**
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== this.props.checked) {
      this.setState({ checked: nextProps.checked })
    }
  }
*/

  const handleChange = checked => {
    const { onChange = () => {}, name = '' } = props
    setChecked(checked)
    /**
    this.setState({ checked }, () => {
      onChange(name, checked)
    })
    */
  }


    return (
      <div className='inputGroup'>
        {checkedLabel && (
          <label>
            {checkedLabel}
            {checkedIcon && (
              <div className='icon'>
                <Icon fontSize="small">{checkedIcon}</Icon>
              </div>
            )}
          </label>
        )}
        <div className={'switch-container'}>
          <Switch
            onChange={handleChange}
            checked={checked}
            disabled={disabled}
            className={className}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor={color}
          />
        </div>
        {uncheckedLabel && (
          <label>
            {uncheckedIcon && (
              <div className='icon'>
                <Icon fontSize="small">{uncheckedIcon}</Icon>
              </div>
            )}
            {uncheckedLabel}
          </label>
        )}
        <style jsx>{`
          .inputGroup {
            margin-bottom: 16px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
          }

          .switch-container {
            margin-right: 8px;
            margin-left: 8px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }

          label {
            color: #878787;
            font-family: 'Open Sans', sans-serif;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding-bottom: ${inline ? '0px' : '16px'};
          }

          label .icon {
            margin-right: 8px;
            margin-left: 8px;
          }

          input {
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
        `}</style>
      </div>
    )
  }


export default Switchs
