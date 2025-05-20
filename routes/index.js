const express = require('express');
const dashboardRoute = require('./dashboardRoute');
const estimateRoute = require('./estimateRoute');
const paymentRoute = require('./paymentRoute');
const pickupRoute = require('./pickupRoute');
const repairRoute = require('./repairRoute');
const reviewRoute = require('./reviewRoute');
const userRoute = require('./userRoute');
const warrantyRoute = require('./warrantyRoute');

const router = express.Router();

router.use('/users', userRoute)
router.use('/admin', dashboardRoute);
router.use('/repair', estimateRoute);
router.use('/payment', paymentRoute);
router.use('/pickup', pickupRoute);
router.use('/repair', repairRoute);
router.use('/reviews', reviewRoute);
router.use('/repair', warrantyRoute);

module.exports = router;
