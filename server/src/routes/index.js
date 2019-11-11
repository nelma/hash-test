const express = require('express');
const CalculatorController = require('../controller/calculator');

const router = express.Router();

/**
 * @api {post} /calculator Execute calc
 * @apiGroup Calculator
 *
 * @apiParam {Number} grossValue
 * @apiParam {Number} installments
 * @apiParam {Number} MDR
 *
 * @apiExample Example usage:
 * curl -X POST http://localhost:3000/api/calculator -H 'Content-Type: application/json' -d '{"grossValue": 120.0,"installments": 12,"MDR": 4}'
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "result": {
 * 			"tomorrow": 132,67,
 * 			"in15Days": 135,36,
 * 			"in30Days": 138,24,
 * 			"in90Days": 144,00
 * 		},
 *      "violations": []
 *    }
 *
 */
router.post('/calculator', CalculatorController.calc);

module.exports = router;
