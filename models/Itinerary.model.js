const { Schema, model } = require("mongoose");

const itinerarySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    details: [String],

    destinations: [{
        type: Schema.Types.ObjectId,
        ref: "Destination"
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = model("Itinerary", itinerarySchema);