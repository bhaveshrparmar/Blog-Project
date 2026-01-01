const { Schema, model } = require("mongoose")

const blogSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },

    description: {
        type: String,
        trim: true,
        required: true
    },

    image: {
        type: [String],
        required: false
    }
}, {
    timestamps: true
})

module.exports = model("blog", blogSchema)

