const listNamesReceivable = require('./listNamesReceivables');
const validation = require('./validation');
const internalAPI = require('./internalAPI');

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
	validation(dataValues, internalAPI, updateValueNamesReceivable);

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

	validation(dataValues, internalAPI, updateValueNamesReceivable);
};

const updateValueNamesReceivable = res => {
	listNamesReceivable.forEach(name => {
		document.getElementById(name).textContent = new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		}).format(res.data.result[name]);
	});
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
