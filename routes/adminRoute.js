import express from "express";

const router = express.Router();

router.get("/stats", (req, res) => {
    res.send("Admin Stats");
});

router.get('/unpaid', (req, res) => {
    res.send("Unpaid Users");
});

router.get('/ratings', (req, res) => {
    res.send("Users Ratings");
});

router.get('/notifications', (req, res) => {
    res.send("Notifications");
});


