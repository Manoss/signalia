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

case 'POST' /* Post */:
    console.log('POST SLIDE ENTER')
    console.log('POST SLIDE : ',req)
    try {
        const middleware = upload.single('data')
        /** 
        if(body.slideshow == undefined) {
        res.status(400).json(new Error('Missing Slideshow ID, slide not added'))
        }
        */

        const slide = middleware(req,res,async() => {
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
        return slide
        })
        res.status(200).json(slide)
    } catch (error) {
        res.status(400).json(error)
    }
    break

    default:
        res.status(400).json({ success: false })
        break
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
};