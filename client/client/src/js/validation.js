module.exports = (dataValues, callback, callbackSuccess) => {
	if (Object.keys(dataValues).length === 3) {
		if (dataValues['grossValue'].match(/[R$ /t]/g)) {
			let updateDataValues = { ...dataValues };
			const value = dataValues['grossValue'];
			updateDataValues['grossValue'] = value
				.replace(/[R$ \t]/g, '')
				.replace(/\./g, '')
				.replace(/,/, '.');

			dataValues = updateDataValues;
		}
		callback(dataValues, 'POST', callbackSuccess);
	}
};
