import React from 'react'
import Stack from '@mui/material/Stack';

function InlineInputGroup(props) {
    const { children = [] } = props
    return (
      <>
        <Stack 
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
          direction="row" spacing={2}>
          {children.map((child, index) => (
            <div key={`input-${index}`} className={index == children.length - 1 ? 'last' : 'notlast'}>
              {child}
            </div>
          ))}
        </Stack>
        <style jsx>{`
          .inputGroupe {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            flex: 1;
          }
          .notlast {
            margin-right: 16px;
          }
        `}</style>
      </>
    )
  }


export default InlineInputGroup
