const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
        require: true,
        type: String,
        minlength: 3,
        trim: true
    },

    secondName: {
        require: true,
        type: String,
        minlength: 3,
        trim: true
    },

    email: {
        require: true,
        type: String,
        minlength: 13,
        trim: true,
        unique: true
    },

    password: {
        require: true,
        type: String,
        minlength: 8,
        trim: true
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;