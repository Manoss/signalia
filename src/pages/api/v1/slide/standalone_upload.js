import multer from 'multer'

const upload = multer({ dest: './public/uploads' });

/**
 * Route : /api/v1/widget/:id
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */

export default async function handler(req, res) {
      try {
        const middleware = upload.single('data')

        middleware(req,res,async() => {
          console.log('Req Middleware : ', req.file)
          if(!req.file || !req.file.path) {
            res.status(400).json(new Error('Missing file upload'))
          }
          res.status(200).json({ success: true, url: '/uploads/' + req.file.filename })
        })
      } catch (error) {
        res.status(400).json(new Error(error))
      }
}

export const config = {
  api: {
      bodyParser: false,
  },
};