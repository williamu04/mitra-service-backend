const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.post('/', reviewController.postReview);
router.get('/:id', reviewController.getReviews);

module.exports = router;
