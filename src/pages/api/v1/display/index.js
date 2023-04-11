import dbConnect from '@/lib/db/dbConnect'
import Display from '../../../../lib/api/models/Display'

const DisplayHelper = require('../../../../lib/api/helpers/display_helper')
const CommonHelper = require('../../../../lib/api/helpers/common_helper')

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const displays = await Display.find({}).populate('widgets')
        res.status(200).json(displays)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const display = await DisplayHelper.newDisplay(
          req
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: display })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}

