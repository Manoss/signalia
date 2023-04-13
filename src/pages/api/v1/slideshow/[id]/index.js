import dbConnect from '../../../../../lib/db/dbConnect'
import Slideshow from '../../../../../lib/api/models/Slideshow'
const SlideshowHelper = require('../../../../../lib/api/helpers/slideshow_helper')

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const slideshow = await Slideshow.findById(id).populate('slides')
        if (!slideshow) {
          res.status(400).json(new Error('Slideshow not found'))
        }
        res.status(200).json(slideshow)
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

    case 'PUT' /* Edit a model by its ID */:
      try {
        const display = await Display.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!display) {
          res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: display })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

      case 'PATCH' /* Edit a model by its ID */:
        try {
          const slideshow = await Slideshow.findById(id)
          if(!slideshow) {
            res.status(400).json(new Error('Slideshow not found'))
          }

          if ('title' in req.body) slideshow.title = req.body.title
          
          await display.save()
          await CommonHelper.broadcastUpdate(res.io)
          res.status(200).json(slideshow)
        } catch (error) {
          res.status(400).json(new Error(error))
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