import React, { Component } from 'react'
//import { Form, Input, InlineInputGroup } from '../../../components/Form'

import CongratsContent from './CongratsContent'

function CongratsOptions(props) {
  //const { animation, text, fontSize, color, textColor } = props.data || {}
  const [state, setState] = React.useState({
    animation:'',
    text:'',
    color:'',
    fontSize:'',
    textColor:''
  })

  const handleChange = (name, value) => {
    const { onChange = () => {} } = this.props
    setState(
      {
        [name]: value
      },
      () => {
        onChange(state)
      }
    )
  }


  return (
    <div className={'container'}>
      <Form>
        <h3>Widget: Congratulations</h3>
        <p>Choose your preferences for the congratulations widget.</p>
        <InlineInputGroup>
          <Input
            inline={false}
            label={'Background color'}
            type={'color'}
            name={'color'}
            value={state.color}
            onChange={handleChange}
          />
          <Input
            inline={false}
            label={'Text color'}
            type={'color'}
            name={'textColor'}
            value={state.textColor}
            onChange={handleChange}
          />
          <Input
            inline={false}
            label={'Animation'}
            type={'select'}
            name={'animation'}
            value={state.animation}
            choices={[
              { id: 'confetti', label: 'Confetti' },
              { id: 'balloons', label: 'Balloons' }
            ]}
            onChange={handleChange}
            expand={false}
          />
          <Input
            inline={false}
            label={'Font Size'}
            type={'number'}
            name={'fontSize'}
            value={state.fontSize}
            onChange={handleChange}
            expand={false}
          />
        </InlineInputGroup>

        <Input
          inline={false}
          label={'Text to be displayed'}
          type={'textarea'}
          name={'text'}
          value={state.text}
          onChange={handleChange}
        />
      </Form>
      <div className={'previewContainer'}>
        <p>Preview</p>
        <div className={'preview'}>
          <CongratsContent data={state} />
        </div>
      </div>
      <style jsx>
        {`
          h3,
          p {
            font-family: 'Open Sans', sans-serif;
          }
          .container {
            display: flex;
            flex-direction: row;
          }
          .preview {
            display: block;
            width: 240px;
            height: 240px;
            border-radius: 6px;
            overflow: hidden;
          }
          .previewContainer {
            margin-left: 16px;
            width: 240px;
          }
        `}
      </style>
    </div>
  )
}


export default CongratsOptions
