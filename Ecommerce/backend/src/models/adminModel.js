const {Schema, model} = require("mongoose");

const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        default: "admin"
    },
    status: {
        type: String,
        default: "pending"
    },

})

module.exports =model('admins',adminSchema)