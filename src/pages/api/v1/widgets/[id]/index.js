import dbConnect from '../../../../../lib/db/dbConnect'
import Widget from '../../../../../lib/api/models/Widget'
import Display from '../../../../../lib/api/models/Display'
const WidgetHelper = require('../../../../../lib/api/helpers/widget_helper')

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
        //const { id } = req.params
        const widget = await Display.findById(id)
        if (!widget) {
          res.status(400).json({ success: false })
        }
        res.status(200).json(widget)
      } catch (error) {
        res.status(400).json({ success: false })
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