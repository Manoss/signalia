import dbConnect from '../../../../lib/db/dbConnect'
import Slideshow from '../../../../lib/api/models/Slideshow'


/**
 * Route : /api/v1/widget/:id
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    /**
     * Used
     */
    case 'GET' /* Get a model by its ID */:
      try {
        const slideshows = await Slideshow.find({})
        if (!slideshows) {
          res.status(400).json(new Error('Widget not found'))
        }
        res.status(200).json(slideshows)
      } catch (error) {
        res.status(400).json(new Error(error))
      }
      break

    /**
     * Not used
     */
    case 'POST' /* Post */:
      try {

        const newSlideShow = new Slideshow({
            title: req.body.title
        })
        const slideshow = await newSlideShow.save()
        if(!slideshow){
            res.status(400).json(new Error('Slideshow not created'))
        }
        res.status(200).json(slideshow)
      } catch (error) {
        res.status(400).json({ success: false })
      }
    break
    
    /**
     * Not used
     */
    case 'PUT' /* Edit a model by its ID */:
      console.debug('PUT widget : ', req.body)
      try {
        const widget = await Widget.findById(id)
        if(!widget) {
          res.status(400).json(new Error('Widget not found'))
        }
        const data = req.body
        if(!data.data) {   
          widget.x = data.x
          widget.y = data.y
          widget.w = data.w
          widget.h = data.h
        } else {
          widget.data = data.data
        }
        await widget.save()
        res.status(200).json({ success: true})
      } catch (error) {
        res.status(400).json(new Error(error))
      }
      break

      /**
       * Not used
       */
    case 'DELETE' /* Delete a model by its ID */:
      try {
        const widget = await Widget.findByIdAndDelete(id)
        if (!widget) {
          res.status(400).json(new Error('Widget not found'))
        }
        const display = await Display.findById(widget.display)
        if(!display) {
          res.status(400).json(new Error('Display not found'))
        }
        await display.widgets.pull(widget._id)
        await display.save()
        res.status(200).json({success: true})
      } catch (error) {
        res.status(400).json(error)
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}