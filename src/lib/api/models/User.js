const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const User = new Schema({
    username: {
        type: String,
        required: true,
        //unique: [true, "Account already exists"],
        //validate: [validator.isEmail, 'Please enter a valid email']
    },
    email: {
        type: String,
        required: true,
        //unique: [true, "Account already exists"],
        //validate: [validator.isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        //required: [true, "Please enter your email"],
        minLength: [6, "Your password must be at least 6 characters long"],
        //select: false, //dont send back password after request
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user','admin']
    }

},{ timestamps: true })

// ENCRYPTION 

User.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

User.methods.comparePassword = async function(enteredPassword, userPassword){
    console.log('User comparePassword : ', enteredPassword, ' model : ', userPassword)
    return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.models.User || mongoose.model('User', User)