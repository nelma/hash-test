const validationCalculator = require('../validation/validationCalculator');

class CalculatorService {
	calc(body) {
		const grossValue = body.grossValue;
		const installments = body.installments;
		const MDR = body.MDR;
		const calc = validationCalculator.validation(
			grossValue,
			installments,
			MDR
		);

		if (calc.violations.length > 0) {
			return calc;
		}

		const percentMDR = MDR / 100;
		calc.result = this.calcResult(grossValue, installments, percentMDR);

		return calc;
	}

	calcNetValue(grossValue, percentMDR) {
		return grossValue - grossValue * percentMDR;
	}

	calcResult(grossValue, installments, percentMDR) {
		const installmentNetValue =
			this.calcNetValue(grossValue, percentMDR) / installments;

		//TODO: rever cálculo 90 dias
		return {
			tomorrow: this.calcTomorrow(
				installmentNetValue,
				installments,
				percentMDR
			),
			in15Days: this.calc15Days(
				installmentNetValue,
				installments,
				percentMDR
			),
			in30Days: this.calc30Days(
				installmentNetValue,
				installments,
				percentMDR
			),
			in90Days: this.calc90Days(
				installmentNetValue,
				installments,
				percentMDR
			)
		};
	}

	calcTomorrow(installmentValue, installments, percentMDR) {
		let index = 1;
		let sum = 0;

		while (index <= installments) {
			sum += installmentValue - installmentValue * (percentMDR * index);
			index++;
		}

		return Number(sum.toFixed(2));
	}

	calc15Days(installmentValue, installments, percentMDR) {
		let index = 1;
		let percentMDRHalf = percentMDR / 2;
		let sum = installmentValue - installmentValue * 0.02;
		installments = installments - 1;

		while (index <= installments) {
			sum +=
				installmentValue -
				installmentValue * (percentMDR * index + percentMDRHalf);

			index++;
		}

		return Number(sum.toFixed(2));
	}

	calc30Days(installmentValue, installments, percentMDR) {
		let sum = installmentValue;
		let index = 1;
		installments = installments - 1;

		while (index <= installments) {
			sum += installmentValue - installmentValue * (percentMDR * index);
			index++;
		}

		return Number(sum.toFixed(2));
	}

	calc90Days(installmentValue, installments, percentMDR) {
		let sum = installmentValue * 3;
		let index = 3;
		let key = 1;

		while (index < installments) {
			sum += installmentValue - installmentValue * (percentMDR * key);
			index++;
			key++;
		}

		return Number(sum.toFixed(2));
	}
}

module.exports = new CalculatorService();
