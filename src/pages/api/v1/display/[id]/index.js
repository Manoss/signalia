import dbConnect from '../../../../../lib/db/dbConnect'
import Display from '../../../../../lib/api/models/Display'
const DisplayHelper = require('../../../../../lib/api/helpers/display_helper')

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        //const { id } = req.params
        const display = await Display.findById(id).populate('widgets')
        if (!display) {
          res.status(400).json({ success: false })
        }
        res.status(200).json(display)
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
        const display = await Display.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!display) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: display })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deleteDisplay = await Display.findByIdAndDelete(id)
        if (!deleteDisplay) {
          res.status(400).json({ success: false })
        }
        const deleteWidgets = await DisplayHelper.deleteWidgets(deleteDisplay.widgets, res)
        res.status(200).json({ success: true })
      } catch (error) {
        console.debug('Error : ', error)
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}