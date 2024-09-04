const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Destination = require("../models/Destination.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");

//Post /api/destinations - creates new location
router.post("/destinations", isAuthenticated, (req, res, next) => {
    const { location, description, imageUrl } = req.body;

    Destination.create({ location, description, imageUrl })
        .then((response) => res.status(201).json(response))
        .catch((error) => res.json(error));
})

//Get /api/destinations - all destinations
router.get("/destinations", (req, res, next) => {
    Destination.find()
        .then((allDestinations) => res.json(allDestinations))
        .catch((error) => res.json(error));
})

// GET /api/destinations/:destinationId

router.get("/destinations/:destinationId", (req, res, next) => {
    const { destinationId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(destinationId)) {
        res.status(400).json({ message: "Specified id is not valid" });
        return;
    }
    Destination.findById(destinationId)
        .then((destination) => res.status(200).json(destination))
        .catch((error) => res.json(error));
});



module.exports = router; 