const express = require('express');
const router = express.Router();
const pickupController = require('../controllers/pickupController');

router.post('/request', pickupController.postPickup);
router.get('/status', pickupController.getPickupStatus);

module.exports = router;
