const express = require('express');
const router = express.Router();
const repairController = require('../controllers/repairController');

router.post('/request', repairController.postRepair);
router.get('/status/:id', repairController.getRepairStatus);
router.get('/history', repairController.getRepairHistory);

module.exports = router;
