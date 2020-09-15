const { Schema, model } = require("mongoose");

const citationSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    parentID: {
        type: String,
        default: null,
    },
    pdfLink: {
        type: String,
        required: true,
    },
    lastChange: {
        type: String,
        required: true,
    },
    description: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

module.exports = model("Citation", citationSchema);
