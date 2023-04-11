import React from 'react'

function ButtonGroup() {
    const { children, align = 'right', style = {} } = props

  return (
    <div className={'btnGroup'} style={style}>
      {children}
      <style jsx>{`
        .btnGroup {
          display: flex;
          flex-direction: row;
          justify-content: ${align == 'right'
            ? 'flex-end'
            : align == 'center'
            ? 'center'
            : 'flex-start'};
          flex: 1;
        }
      `}</style>
    </div>
  )
}


export default ButtonGroup
