const mongoose = require("mongoose");

const ResponseSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Responses", ResponseSchema);