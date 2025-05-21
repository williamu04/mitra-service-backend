const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/stats', dashboardController.getStats);
router.get('/unpaid', dashboardController.getUnpaid);
router.get('/ratings', dashboardController.getRatings);
router.get('/notifications', dashboardController.getNotifications);

module.exports = router;
