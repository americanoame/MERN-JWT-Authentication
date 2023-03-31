const User = require('../models/UserModel');

const registerUser = async (req, res) => {
    const { user, email, password } = req.body

    const userExist = await User.findOne({ email })

    if (userExist) {
        return res.status(200).send({ success: false, msg : 'User already register with this email' })
    } else {
        try {
            const newEntry = new User(req.body)
            newEntry.save()
            console.log(newEntry)

            return res.status(200).send({success: true, msg : 'Registration successful'})
        } catch (error) {
            return res.status(400).send({success: false, msg : 'error'}) 
        }
    }
}

const loginUser = async (req, res) => {
 const {email, password} = req.body
   try {
    const user = await User.find({email, password})
    if(user) {
      return  res.status(200).send({success: true, msg: 'Login successful'})
    } else{
        return res.send({success: false, msg: 'Invalid credentials'})
    }
   } catch (error) {
      return res.send(error) 
   }


}

module.exports = {
    registerUser,
    loginUser
}