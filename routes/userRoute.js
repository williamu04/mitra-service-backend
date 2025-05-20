const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/me', userController.getUser);
router.put('/me', userController.updateUser);

module.exports = router;
