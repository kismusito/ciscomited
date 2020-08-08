const {Schema , model} = require('mongoose')

const rolSchema = new Schema({
    role_name: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

module.exports = model("Rol" , rolSchema)