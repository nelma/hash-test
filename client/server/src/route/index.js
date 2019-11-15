const express = require('express');
const CalculatorController = require('../controller/');

const router = express.Router();
router.post('/calculator', CalculatorController.calc);

module.exports = router;
