const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { isAuthenticated } = require("../middleware/jwt.middleware");

const Itinerary = require("../models/Itinerary.model");
const Destination = require("../models/Destination.model");

//  POST /api/itineraries  -  Creates a new itenerary 
router.post("/itineraries", isAuthenticated, (req, res, next) => {
    const { title, description , destinations } = req.body;

    Itinerary.create({ title, description, destinations })
        .then((response) => res.status(201).json(response))
        .catch((err) => {
            console.log("Error while creating the itinerary ", err);
            res.status(500).json({ message: "Error while creating the itinerary " });
        });
});


//  GET /api/itineraries -  Retrieves all of the itinerary ***********
router.get("/itineraries", (req, res, next) => {
    Itinerary.find()
        .populate("destinations")
        .then((allItineraries) => res.json(allItineraries))
        .catch((err) => res.json(err));
});


//  GET /api/itineraries/:itineraryId -  Retrieves a specific itineraries by id 
router.get("/itineraries/:itineraryId", (req, res, next) => {
    const { itineraryId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(itineraryId)) {
        res.status(400).json({ message: "Specified id is not valid" });
        return;
    }

    Itinerary.findById(itineraryId)
        .populate("destinations")
        .then((itinerary) => res.status(201).json(itinerary))
        .catch((error) => res.json(error));
});


// PUT  /api/itineraries/:itineraryId  -  Updates a specific itinerary by id
router.put("/itineraries/:itineraryId", (req, res, next) => {
    const { itineraryId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(itineraryId)) {
        res.status(400).json({ message: "Specified id is not valid" });
        return;
    }

    Itinerary.findByIdAndUpdate(itineraryId, req.body, { new: true })
        .then((updatedItinerary) => res.json(updatedItinerary))
        .catch((error) => res.json(error));
});


// DELETE  /api/itineraries/:itineraryId  -  Deletes a specific itinerary by id
router.delete("/itineraries/:itineraryId", (req, res, next) => {
    const { itineraryId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(itineraryId)) {
        res.status(400).json({ message: "Specified id is not valid" });
        return;
    }

    Itinerary.findByIdAndDelete(itineraryId)
        .then(() =>
            res.json({
                message: `Itinerary with ${itineraryId} was removed successfully.`,
            })
        )
        .catch((error) => res.json(error));
});

module.exports = router;