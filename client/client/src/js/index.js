const axios = require('axios');

(() => {
	axios
		.post('/calculator', { grossValue: 150.0, installments: 3, MDR: 4 })
		.then(res => console.log(res))
		.catch(error => console.log(error));
})();
