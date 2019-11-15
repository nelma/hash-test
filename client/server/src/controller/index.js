const HttpClientCalculator = require('../httpClient/');

class CalculatorController {
	async calc(req, res) {
		try {
			const request = await HttpClientCalculator.getApiCalc(req.body);
			res.json(request.data);
		} catch (error) {
			res.status(500).send({ message: error.message });
		}
	}
}

module.exports = new CalculatorController();
