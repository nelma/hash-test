'use sctric';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../src/index');

chai.use(chaiHttp);

describe('API Calculator', () => {
	it('/POST calculator with 3 installments', done => {
		chai.request(app)
			.post('/api/calculator')
			.send({ grossValue: 150.0, installments: 3, MDR: 4 })
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body.result.tomorrow).to.be.equal(132.48);
				expect(res.body.result.in15Days).to.be.equal(135.36);
				expect(res.body.result.in30Days).to.be.equal(138.24);
				expect(res.body.result.in90Days).to.be.equal(144);
				done();
			});
	});

	it('/POST calculator with 12 installments', done => {
		chai.request(app)
			.post('/api/calculator')
			.send({ grossValue: 120.0, installments: 12, MDR: 4 })
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body.result.tomorrow).to.be.equal(85.25);
				expect(res.body.result.in15Days).to.be.equal(87.55);
				expect(res.body.result.in30Days).to.be.equal(89.86);
				expect(res.body.result.in90Days).to.be.equal(97.92);
				done();
			});
	});

	it('/POST violations installments', done => {
		chai.request(app)
			.post('/api/calculator')
			.send({ grossValue: 120.0, installments: 13, MDR: 4 })
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body.violations.length).to.be.equal(1);
				expect(res.body.violations[0]).to.be.equal(
					'invalid-installments'
				);
				done();
			});
	});

	it('/POST Required data', done => {
		chai.request(app)
			.post('/api/calculator')
			.send({ grossValue: 120.0, installments: 13 })
			.end((err, res) => {
				expect(res).to.have.status(400);
				expect(res.body.message).to.be.equal('Required data.');
				done();
			});
	});
});
