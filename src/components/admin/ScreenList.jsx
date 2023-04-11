import React, {useEffect, forwardRef, useState, useImperativeHandle} from 'react'
import ContentLoader from 'react-content-loader'

import ScreenCard from './ScreenCard'

//import displays from '../../lib/db-fictive/displays'

import { getDisplays } from '../../lib/actions/display'
//mUI
import { Skeleton } from '@mui/material'

const ScreenList = forwardRef(function ScreenList(props, ref) {
  const [screens, setScreens] = useState([])

  useImperativeHandle(ref, () => ({
    refresh: refresh
  }))

  useEffect(()=> {
    refresh()
  },[])

  const refresh = async () => {
    const displays = await getDisplays()
    setScreens(displays) 
  }
  
  return (
    <div className={'list'}>
      {screens
        ? screens.map((value, index) => (
            <ScreenCard
              key={`item-${index}`}
              index={index}
              value={value}
              refresh={refresh}
            />
          ))
        : Array(4)
            .fill()
            .map((index) => (
              <ContentLoader key={index}  height={120} width={640}>
                <rect x='0' y='0' rx='5' ry='5' width='100%' height='80' />
              </ContentLoader>
            ))}
      <style jsx>
        {`
          .list {
            position: relative;
          }
        `}
      </style>
    </div>
  )
})
export default ScreenList
