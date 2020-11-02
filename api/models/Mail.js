const { model, Schema } = require("mongoose");

const mailSchema = new Schema({
    identificationName: {
        type: String,
        required: true,
    },
    mails: {
        type: String,
        required: true,
    },
    mailType: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: new Date(),
    },
});


module.exports = model('Mail' , mailSchema);