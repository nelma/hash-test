const express = require('express');
const CalculatorController = require('../controller/calculator');

const router = express.Router();

/**
 * @api {get} /calculator Execute calc
 * @apiGroup Calculator
 *
 * @apiParam {Number} initial-amount
 * @apiParam {Number} interest
 * @apiParam {Number} period
 *
 *  @apiExample Example usage:
 * curl -X GET http://localhost:3000/api/calculator?totalValue=150.0&installments=1&MDR=4
 *
 * @apiSuccess {Number} totalValue
 * @apiSuccess {Number} installments
 * @apiSuccess {Number} MDR
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "result": {
 * 			tomorrow: 132,67,
 * 			in15Days: 135,36,
 * 			in30Days: 138,24,
 * 			in90Days: 144,00
 * 		},
 *      "violations": []
 *    }
 *
 */
router.post('/calculator', CalculatorController.calc);

module.exports = router;
