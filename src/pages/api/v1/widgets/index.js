import dbConnect from '@/lib/db/dbConnect'
import Widget from '../../../../lib/api/models/Widget'
import Display from '../../../../lib/api/models/Display'

const DisplayHelper = require('../../../../lib/api/helpers/widget_helper')
const CommonHelper = require('../../../../lib/api/helpers/common_helper')

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const displays = await Display.find({}).populate('widgets')
        res.status(200).json({ success: true, data: displays })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
    try{
      const widget = new Widget(req.body)
      const widgetSaved = await widget.save()
      const display = await Display.findById(widgetSaved.display)
      if(!display) {
        res.status(400).json(new Error('Display not found'))
      }
      await display.widgets.push(widgetSaved._id)
      await display.save()
      res.status(200).json(widgetSaved)
    } catch (error) {
      res.status(400).json(error)
    }
    break

    default:
      res.status(400).json({ success: false })
      break
  }
}

