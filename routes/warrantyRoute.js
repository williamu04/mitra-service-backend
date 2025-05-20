const express = require('express');
const router = express.Router();
const warrantyController = require('../controllers/warrantyController');

router.post('/warranty', warrantyController.postWarranty);
router.get('/warranty/status/:id', warrantyController.getWarrantyStatus);

module.exports = router;
