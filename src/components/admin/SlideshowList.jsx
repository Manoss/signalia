import { Component } from 'react'
import React from 'react'
//import ContentLoader from 'react-content-loader'

import SlideshowCard from './SlideshowCard'
import getSlideshows from '../../lib/db-fictive/slideshows.json'

//import { getSlideshows } from '../../actions/slideshow'

function SlideshowList(props) {
  const [slideshows, setSlideshows] = React.useState(null)

  React.useEffect(() => {
    refresh()
  })
  /**
  componentDidMount() {
    this.refresh()
  }
  */
  const refresh = () => {
    setSlideshows(getSlideshows)
    /**
    getSlideshows().then(slideshows => {
      setSlideshows(slideshows)
    })
   */
  }

  return (
    <div className={'list'}>
      {slideshows
        ? slideshows.map((value, index) => (
            <SlideshowCard
              key={`item-${index}`}
              index={index}
              value={value}
              refresh={refresh}
            />
          ))
        : Array(4)
            .fill()
            .map((index) => (
              <div key={index} height={120} width={640}>
                <rect x='0' y='0' rx='5' ry='5' width='100%' height='80' />
              </div>
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


export default SlideshowList
