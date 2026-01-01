const mongoose = require("mongoose")

const userPassword = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: [true, "Email iD Already Exist!"]
    },
    mobile: {
        type: String,
        trim: true,
        required: true,
        unique: [true, "Mobile Number Already Exist!"]
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    otp: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("userPassword", userPassword)