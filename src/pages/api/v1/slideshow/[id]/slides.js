import dbConnect from '../../../../../lib/db/dbConnect'
import Slideshow from '../../../../../lib/api/models/Slideshow'
const SlideshowHelper = require('../../../../../lib/api/helpers/slideshow_helper')

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  /**
   * used
   */

  switch (method) {
    case 'GET' /* Get a model by its ID */:
        console.debug('GET slides :', id, req)
      try {
        const slideshow = await Slideshow.findById(id).populate('slides')
        if (!slideshow) {
          res.status(400).json(new Error('Slideshow not found'))
        }
        res.status(200).json(slideshow.slides)
      } catch (error) {
        res.status(400).json(new Error(error))
      }
      break

    case 'POST' /* Post */:
      try {
        //const { id } = req.params
        const display = await DisplayHelper.newDisplay(req, res, next)
        if(!display) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json(display)
      } catch (error) {
        res.status(400).json({ success: false })
      }
    break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const slideshow = await Slideshow.findByIdAndDelete(id)
        if(!slideshow) {
            res.status(400).json(new Error('Slideshow not found'))
        }
        await SlideshowHelper.deleteSlides(slideshow.slides, res)
        res.status(200).json({ success: true })
      } catch (error) {
        console.debug('Error : ', error)
        res.status(400).json(new Error(error))
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}