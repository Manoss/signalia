import React, {useEffect, useState} from 'react'
import ContentLoader from 'react-content-loader'
//import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'

import SlideCard from './SlideCard'

//import { getSlides } from '../../actions/slide'
//import { reorderSlides } from '../../actions/slideshow'

//const SortableItem = SortableElement(SlideCard)


//const SortableList = SortableContainer(({ items, refresh }) => {
const SortableList = ({items, refresh}) => {
  return (
    <div className={'list'}>
      <div className={'timeline'} />
      {items.map((value, index) => (
        <div
          key={`item-${index}`}
          index={index}
          id={index}
          value={value}
          refresh={refresh}
        />
      ))}
      <style jsx>
        {`
          .list {
            position: relative;
          }
          .timeline {
            width: 4px;
            height: calc(100% - 20px);
            border-radius: 2px;
            position: absolute;
            left: 50%;
            top: 10px;
            margin-left: -2px;
            background: #cccccc;
            z-index: 0;
          }
        `}
      </style>
    </div>
  )
}


function SlideList(props) {
  const [slides,  setSlides] = useState(null)

  useEffect(()=>{
    console.debug('useEffet Props SlideList : ', props)
    const { slideshow } = props
    /** 
    getSlides(slideshow).then(slides => {
      setSlides(slides)
    })
    */
  })

  /**
  componentDidMount() {
    console.debug('DidMount Props : ', this.props)
    const { slideshow } = this.props
    getSlides(slideshow).then(slides => {
      this.setState({
        slides: slides
      })
    })
  }
*/

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const { slideshow } = props
    setSlides([...arrayMove(state.slides, oldIndex, newIndex)], () =>{reorderSlides(slideshow, oldIndex, newIndex)})
    /** 
    this.setState(
      {
        slides: [...arrayMove(state.slides, oldIndex, newIndex)]
      },
      () => {
        reorderSlides(slideshow, oldIndex, newIndex)
      }
    )
    */
  }

  const refresh = () => {
    const { slideshow } = props
    console.debug('Refresh SlideList ', slideshow)
    return getSlides(slideshow).then(slides => {
      return setSlides(slides) 
    })
  }

  return slides ? (
    <SlideCard
      items={slides}
      refresh={refresh}
      onSortEnd={onSortEnd}
      distance={2}
      lockAxis='y'
    />
  ) : (
    Array(4)
      .fill()
      .map((i, index) => (
        
        <div height={120} width={640} key={`loading-${index}`}>
          <rect x='0' y='0' rx='5' ry='5' width='100%' height='100' />
        </div>
      ))
  )
}

export default SlideList
