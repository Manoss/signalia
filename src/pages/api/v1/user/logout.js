import dbConnect from '@/lib/db/dbConnect'
import User from '../../../../lib/api/models/User'


export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        req.logout()
        res.redirect('/login')
      } catch (error) {
        res.status(400).json(new Error(error))
      }
      break
    
    default:
        res.status(400).json({ success: false })
        break
  }
}