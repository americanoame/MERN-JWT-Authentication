const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user:{
        type: String,
        trim: true,
        required: trusted
    },
    email: {
        type: String,
        trim: true,
        required: trusted
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    isVerified: {
        type: BOolean,
        default: false
    }
},{
    timestamp: true
})

const User = mongoose.model('user', userSchema);

module.exports = User;