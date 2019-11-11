class ValidationCalculator {
	validation(grossValue, installments, MDR) {
		let violations = [];
		let result = 0;
		if (Math.sign(grossValue) === -1) {
			violations.push('invalid-gross-value');
		}

		if (Math.sign(installments) === -1 || installments > 12) {
			violations.push('invalid-installments');
		}

		if (Math.sign(MDR) === -1) {
			violations.push('invalid-MDR');
		}

		return { result, violations };
	}
}

module.exports = new ValidationCalculator();
