const axios = require('axios');

class HttpClientCalculator {
	constructor() {
		this.apiPath = 'http://127.0.0.1:3000';
	}

	getApiCalc(criteria) {
		const { grossValue, installments, MDR } = criteria;
		const url = `${this.apiPath}/api/calculator`;

		return axios.post(url, { grossValue, installments, MDR });
	}
}

module.exports = new HttpClientCalculator();
