const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI)
        if (con)
            console.log('Mongo connected')
        else
            console.log('not connected')
    } catch (error) {
        console.log('something went wrong')
        process.exit()
    }
}

module.exports = connectDb