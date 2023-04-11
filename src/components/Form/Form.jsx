import React from 'react'

function Form(props) {
    console.debug('Props Form : ', props)
    const { children } = props
    return (
      <div className={'form'}>
        {children}
        <style jsx>{`
          .form {
            display: flex;
            flex-direction: column;
          }
        `}</style>
      </div>
    )
  }

export default Form
