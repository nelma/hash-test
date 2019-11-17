const validation = require('./validation');

let dataValues = {};

const moneyMask = event => {
	let value = event.target.value;
	value = value.replace(/[\.,]/g, '');

	if (value.length >= 9) {
		value = value.replace(/([0-9]{3})([0-9]{2}$)/g, '.$1,$2');
	} else {
		value = value.replace(/([0-9]{2}$)/g, ',$1');
	}

	dataValues['grossValue'] = value;
	validation(dataValues);

	if (value.indexOf('R$') === -1) {
		event.target.value = `R$ ${value}`;
	} else {
		event.target.value = value;
	}
};

const updateData = (event, type) => {
	let updateDataValues = { ...dataValues };
	updateDataValues[type] = event.target.value;
	dataValues = updateDataValues;

	validation(dataValues);
};

(() => {
	document.getElementById('saleValue').addEventListener('keyup', event => {
		moneyMask(event);
	});

	document.getElementById('installmentValue').addEventListener('change', event => {
		updateData(event, 'installments');
	});

	document.getElementById('MDRValue').addEventListener('change', event => {
		updateData(event, 'MDR');
	});
})();
