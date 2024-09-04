const { Schema, model } = require("mongoose");

const destinationSchema = new Schema({
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        
    }
})


module.exports = model("Destination", destinationSchema);