const { Schema, model } = require("mongoose");

const appreticeSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    appretices: Array,
    motiveOrProhibition: String,
    message: String,
    otherIntegrants: Array,
    attachFiles: Array,
    spokesman: Object,
    status: {
        type: Boolean,
        default: false
    },
    create_at: {
        type: Date,
        default: new Date()
    }
});

module.exports = model("Solicity", appreticeSchema);
