import React, {useState} from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

function ColorPicker(props)  {
  const [displayColorPicker, setdisplayColorPicker] = useState(false)
  const [color, setColor] = useState(props.color || '#FFFFFF')


  const handleClick = () => {
    setdisplayColorPicker(!displayColorPicker)
    //this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  const handleClose = () => {
    setdisplayColorPicker(false)
    //this.setState({ displayColorPicker: false })
  }

  const handleChange = color => {
    const { onChange = () => {} } = props
    setColor(color.hex)
    /** 
    setColor(
      { color: color.hex }, () => {
        onChange(color.hex)
      }
    )
    /**
    this.setState({ color: color.hex }, () => {
      onChange(color.hex)
    })
    */
  }


    const styles = reactCSS({
      default: {
        color: {
          width: '64px',
          height: '42px',
          borderRadius: '2px',
          background: color
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer'
        },
        popover: {
          position: 'absolute',
          zIndex: '2'
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        }
      }
    })

    return (
      <div>
        <div style={styles.swatch} onClick={handleClick}>
          <div style={styles.color} />
        </div>
        {displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={handleClose} />
            <SketchPicker color={color} onChange={handleChange} />
          </div>
        ) : null}
      </div>
    )
  }


export default ColorPicker