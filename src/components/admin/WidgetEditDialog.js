import React, { useEffect } from 'react'
import Dialog from '../Dialog'
//import { Form, Button, ButtonGroup } from '../Form'
//import { getWidget, updateWidget } from '../../actions/widgets'

function WidgetEditDialog(props) {
  const [data, setData] = React.useState({})
  const [id, setId] = React.useState(props.id)
  const dialog = React.createRef(props.ref)

  useEffect(() => {
    setId(props.id)
  })

  const open = e => {
    console.debug('Open - e : ', e)
    if (e) e.stopPropagation()
    dialog && dialog.current && dialog.current.open()
  }

  const close = e => {
    if (e) e.stopPropagation()
    return Promise.resolve().then(
      () => dialog && dialog.current && dialog.current.close()
    )
  }

  const handleChange = data => {
    setData(data)
  }

  const saveData = () => {
    return updateWidget(id, { data }).then(() => {
      close()
    })
  }
/**
  componentDidMount() {
    const { id } = this.props
    //getWidget(id).then(({ data }) => this.setState({ data }))
  }
*/

  return (
    <Dialog ref={dialog}>
      {/**
      <OptionsComponent data={data} onChange={this.handleChange} />
  
      <ButtonGroup style={{ marginTop: 20 }}>
        <Button text={'Save'} color={'#8bc34a'} onClick={this.saveData} />
        <Button text={'Cancel'} color={'#e85454'} onClick={this.close} />
      </ButtonGroup>
      */}
    </Dialog>
  )
}


export default WidgetEditDialog
