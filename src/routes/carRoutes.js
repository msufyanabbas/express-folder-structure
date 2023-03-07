const express = require('express');
const router = express.Router();
const {createCar} = require('../controllers/carControllers')

router.post('/create', createCar);

module.exports = router;