import dbConnect from '@/lib/db/dbConnect'
import User from '../../../../lib/api/models/User'


export default async function handler(req, res) {
  const { body, method, username } = req

  await dbConnect()

  switch (method) {

    case 'GET':
      try {
        const user = await User.findOne({username:username})
        if(!user){
          res.status(400).json(new Error('User not found'))
        }
        res.status(200).json(user)
      } catch (error) {
        res.status(400).json(new Error(error))
      }
      break
      
    case 'POST':
    try{
        const newUser = new User({
            username: body.user.username,
            email: body.user.email,
            password: body.user.password
            })
        const user = await newUser.save()
        if(!user) {
            res.status(400).json(new Error('User not created'))
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
    break

    default:
        res.status(400).json({ success: false })
    break
  }
}
