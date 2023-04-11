import dbConnect from '../../../../../lib/db/dbConnect'
import Display from '../../../../../lib/api/models/Display'
import { CropLandscapeOutlined } from '@mui/icons-material'
const DisplayHelper = require('../../../../../lib/api/helpers/display_helper')

/**
 * Route /api/v1/display/:id/widgets
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
    case 'GET' /* Get a model by its ID */:
        console.debug('Get')
      try {
        const display = await Display.findById(id).populate('widgets')
        if (!display) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json(display.widgets)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}