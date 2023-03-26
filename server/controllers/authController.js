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

module.exports = {
    registerUser
}