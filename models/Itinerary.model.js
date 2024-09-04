const { Schema, model } = require("mongoose");

const itinerarySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    destinations: [{
        type: Schema.Types.ObjectId,
        ref: "Destination"
    }]
})


module.exports = model("Itinerary", itinerarySchema);