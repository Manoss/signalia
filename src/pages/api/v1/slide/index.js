import multer from'multer'
import dbConnect from '../../../../lib/db/dbConnect'
import Slide from '../../../../lib/api/models/Slide'
import SlideHelper from '../../../../lib/api/helpers/slide_helper'

const upload = multer({ dest: './public/uploads' });

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
    body,
  } = req

  await dbConnect()

  switch (method) {
    /**
     * Used
     */
    case 'GET' /* Get a model by its ID */:
      try {
        //const { id } = req.params
        const slide = await Slide.findById(id)
        if (!slide) {
          res.status(400).json(new Error('Widget not slide'))
        }
        res.status(200).json(slide)
      } catch (error) {
        res.status(400).json(new Error(error))
      }
      break

    case 'POST' /* Post */:
      console.log('POST SLIDE ENTER')
      console.log('POST SLIDE : ',req)
      try {
        const middleware = upload.single('data')
        if(body.slideshow == undefined) {
          res.status(400).json(new Error('Missing Slideshow ID, slide not added'))
        }

        middleware(req,res,async() => {
        const data = req.file && req.file.path ? '/' + req.file.path : req.body.data

        const newSlide = new Slide({
          data: data,
          type: req.body.type,
          title: req.body.title,
          description: req.body.description,
          duration: req.body.duration,
          slideshow: req.body.slideshow
        })
        console.log('POST SLIDE : ', newSlide )
        const slide = await SlideHelper.addSlide(newSlide, res)
        console.log('SLIDE : ',slide)
        res.status(200).json(slide)
        })
      } catch (error) {
        res.status(400).json(error)
      }
    break
    
    /**
     * Used
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
       * Used
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
/**
export const config = {
  api: {
      bodyParser: false,
  },
};
*/