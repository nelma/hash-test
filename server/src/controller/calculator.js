const CalculatorService = require('../service/calculator');

class CalculatorController {
	calc(req, res) {
		if (
			Object.entries(req.body).length === 0 ||
			!req.body['grossValue'] ||
			!req.body['installments'] ||
			!req.body['MDR']
		) {
			res.status(400).json({ message: 'Required data.' });
			return;
		}

		try {
			const result = CalculatorService.calc(req.body);
			res.json(result);
		} catch (error) {
			res.status(500).send({ message: error.message });
		}
	}
}

module.exports = new CalculatorController();
