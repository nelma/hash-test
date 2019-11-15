const axios = require('axios');

module.exports = (data, method, success) => {
	return axios({
		baseURL: '/calculator',
		timeout: 100000,
		method,
		data
	})
		.then(res => {
			success(res);
		})
		.catch(err => {
			console.log(err);
		});
};
