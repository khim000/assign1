// Import Express and create a router
const express = require("express");
const router = express.Router();

// Render the home page
router.get("/", (req, res) => {
    res.render("partials/home");
});


router.get("/homeejs", (req, res) => {
    res.render("partials/home");
});

// Render the about page
router.get("/aboutMeejs", (req, res) => {
    res.render("partials/aboutMe");
});

// Render the service page
router.get("/serviceejs", (req, res) => {
    res.render("partials/service");
});

// Render the project page
router.get("/projectejs", (req, res) => {
    res.render("partials/project");
});

// Render the contact page
router.get("/contactejs", (req, res) => {
    res.render("partials/contact");
});

// Export the router for use in the application
module.exports = router;