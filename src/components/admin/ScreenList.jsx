import React from 'react'
//import ContentLoader from 'react-content-loader'

import ScreenCard from './ScreenCard'

import displays from '../../lib/db-fictive/displays'

//import { getDisplays } from '../../actions/display'

function ScreenList(props) {
  const [screens, setScreens] = React.useState(displays)

/**
  componentDidMount() {
    refresh()
  }
*/
  const refresh = async () => {
    getDisplays().then(screens => {
      setScreens(screens)
    })
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
              {/**
              <ContentLoader key={index}  height={120} width={640}>
                <rect x='0' y='0' rx='5' ry='5' width='100%' height='80' />
              </ContentLoader>
              */}
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
}


export default ScreenList
