const listNamesReceivable = require('./listNamesReceivables');

module.exports = result => {
	listNamesReceivable.forEach(name => {
		document.getElementById(name).textContent = new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		}).format(result[name]);
	});
};
