const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/create', paymentController.postPayment);

router.get('/status/:id', paymentController.getPaymentStatus)

module.exports = router;
