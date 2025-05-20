const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
});

//  create a model or a collection
const Contant = model("Contant", contactSchema);
module.exports = Contant;