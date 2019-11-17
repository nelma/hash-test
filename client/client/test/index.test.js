const sinon = require('sinon');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');

jest.dontMock('fs');

describe('Check Money Mask', () => {
	it('saleValue', () => {
		document.documentElement.innerHTML = html.toString();
		document.getElementById('saleValue').value = '150.00';

		var eventKeyUp = new Event('keyup', {
			bubbles: true,
			cancelable: false
		});
		document.dispatchEvent(eventKeyUp);

		require('../src/js/index');

		document.getElementById('saleValue').dispatchEvent(eventKeyUp);
		expect(document.getElementById('saleValue').value).toEqual('R$ 150,00');
	});
});
