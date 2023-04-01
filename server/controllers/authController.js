const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
    const { user, email, password } = req.body

    const userExist = await User.findOne({ email })

    if (userExist) {
        return res.status(200).send({ success: false, msg: 'User already register with this email' })
    } else {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            const newEntry = await User.create({
                user: user,
                email: email,
                password: hashedPassword
            })
            // const newEntry = new User(req.body)
            // newEntry.save()
            // console.log(newEntry)

            return res.status(200).send({ success: true, msg: 'Registration successful' })
        } catch (error) {
            console.error(error)
            return res.status(400).send({ success: false, msg: 'error', data: { error } })
        }
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        //get user
        const user = await User.findOne({ email })
        if (user) {
            if (user && (await bcrypt.compare(password, user.password))) {
                return res.status(200).send({ success: true, msg: 'Login successful' })

            } else {
                return res.status(200).send({ success: false, msg: 'Invalid credentials' })
            }

        } else {
            return res.send(200).send({ success: false, msg: 'Invalid credentials' })
        }
    } catch (error) {
        return res.send(error)
    }

}



module.exports = {
    registerUser,
    loginUser
}





// const loginUser = async (req, res) => {
//     const { email, password } = req.body
//     try {
//         //get user
//         const user = await User.findOne({ email })
//         if (!user) {
//             return res.json('Invalid credentials', 401)
//         }
//         //get hashed password
//         const storedPassHash = user.password

//         //take salt from hash
//         //has new password
//         const inputPasswordHash = await bcrypt.hash(password, storedPassHash.slice(0, 29))

//         //compare with stored pass word
//         if (inputPasswordHash !== storedPassHash) {
//             return res.json('Invalid credentials', 401)

//         }

//         if (user) {
//             return res.status(200).send({ success: true, msg: 'Login successful' })
//         } else {
//             return res.send({ success: false, msg: 'Invalid credentials' })
//         }
//     } catch (error) {
//         return res.send(error)
//     }


// }