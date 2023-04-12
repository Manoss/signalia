import multer from('multer')
import path from('path')

const CommonHelper = require('../helpers/common_helper')
const Slide = require('../models/Slide')
const SlideHelper = require('../helpers/slide_helper')
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

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname))
    }
  })
  const upload = multer({ storage: storage })

  switch (method) {

    case 'POST' /* Post */:
      try {
        upload.single('data')
        if(!!req.file || !req.file.path) {
          res.status(400).json(new Error('Missing file upload'))
        }
        res.status(200).json({ success: true, url: '/' + req.file.path.replace(/\\/g, "/") })
      } catch (error) {
        res.status(400).json(new Error(error))
      }
    break

    default:
      res.status(400).json({ success: false })
      break
  }
}