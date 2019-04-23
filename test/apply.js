import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../server/app';

chai.use(chaiHttp);
chai.should();

describe('Apply', () => {
  it('user should be able to apply for a loan', (done) => {
    const user = {
      email: 'ray@gmail.com',
    };
    const token = jwt.sign(user, 'SECRET_KEY', { expiresIn: '15min' });
    const loan = {
      firstName: 'Raymond',
      lastName: 'Gakwaya',
      email: 'ray@gmail.com',
      tenor: '12 months',
      amount: 600000,
      interest: 30000,
      paymentInstallment: 52500,
      balance: 600000,
    };
    chai.request(app)
      .post('/api/v1/users/apply')
      .set('Authorization', token)
      .send(loan)
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(201);
        res.body.should.have.property('data');
        done();
      });
  });

  it('user should not be able to apply for a loan when he/she is not authorized', (done) => {
    const loan = {
      firstname: 'Raymond',
      lastName: 'Gakwaya',
      email: 'raymond@gmail.com',
      tenor: '12 months',
      amount: 600000,
      interest: 30000,
      paymentInstallment: 52500,
      balance: 600000,
    };
    chai.request(app)
      .post('/api/v1/users/apply')
      .send(loan)
      .end((err, res) => {
        res.should.have.status(401);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(401);
        res.body.should.have.property('error');
        done();
      });
  });
  it('user should not be able to apply for a loan when he/she is not in the system', (done) => {
    const user = {
      email: 'raymond@gmail.com',
    };
    const token = jwt.sign(user, 'SECRET_KEY', { expiresIn: '15min' });
    const loan = {
      firstName: 'Raymond',
      lastName: 'Gakwaya',
      email: 'patrick@gmail.com',
      tenor: '12 months',
      amount: 600000,
      interest: 30000,
      paymentInstallment: 52500,
      balance: 600000,
    };
    chai.request(app)
      .post('/api/v1/users/apply')
      .set('Authorization', token)
      .send(loan)
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(404);
        res.body.should.have.property('error');
        done();
      });
  });
  it('user should not be able to apply for a loan when there is a missing info', (done) => {
    const user = {
      email: 'ray@gmail.com',
    };
    const token = jwt.sign(user, 'SECRET_KEY', { expiresIn: '15min' });
    const newLoan = {
      firstname: 'Raymond',
      lastName: 'Gakwaya',
      tenor: '12 months',
      amount: 600000,
      interest: 30000,
      paymentInstallment: 52500,
      balance: 600000,
    };
    chai.request(app)
      .post('/api/v1/users/apply')
      .set('Authorization', token)
      .send(newLoan)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(400);
        res.body.should.have.property('error');
        done();
      });
  });
  it('user should not be able to apply for a loan when there is an empty info', (done) => {
    const user = {
      email: 'ray@gmail.com',
    };
    const token = jwt.sign(user, 'SECRET_KEY', { expiresIn: '15min' });
    const loan = {
      firstname: 'Raymond',
      lastName: 'Gakwaya',
      email: 'raymond@gmail.com',
      status: 'approved',
      tenor: '12 months',
      amount: 600000,
      interest: 30000,
      paymentInstallment: 52500,
      balance: 6000000,
    };
    chai.request(app)
      .post('/api/v1/users/apply')
      .set('Authorization', token)
      .send(loan)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(400);
        res.body.should.have.property('error');
        done();
      });
  });
  it('user should not be able to apply for a loan when there is a wrong input data type', (done) => {
    const user = {
      email: 'ray@gmail.com',
    };
    const token = jwt.sign(user, 'SECRET_KEY', { expiresIn: '15min' });
    const newLoan = {
      firstname: 'Raymond',
      lastName: 'Gakwaya',
      email: 1,
      tenor: '12 months',
      amount: 600000,
      interest: 30000,
      paymentInstallment: 52500,
      balance: 600000,
    };
    chai.request(app)
      .post('/api/v1/users/apply')
      .set('Authorization', token)
      .send(newLoan)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(400);
        res.body.should.have.property('error');
        done();
      });
  });
  it('user should not be able to apply for a loan when he already applied for another loan', (done) => {
    const user = {
      email: 'ray@gmail.com',
    };
    const token = jwt.sign(user, 'SECRET_KEY', { expiresIn: '15min' });
    const loan = {
      firstName: 'Raymond',
      lastName: 'Gakwaya',
      email: 'ray@gmail.com',
      tenor: '12 months',
      amount: 600000,
      interest: 30000,
      paymentInstallment: 52500,
      balance: 600000,
    };
    chai.request(app)
      .post('/api/v1/users/apply')
      .set('Authorization', token)
      .send(loan)
      .end((err, res) => {
        res.should.have.status(403);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(403);
        res.body.should.have.property('error');
        done();
      });
  });
  it('user should not be able to apply for a loan when he/she puts an invalid token', (done) => {
    const user = {
      email: 'ray@gmail.com',
    };
    const token = jwt.sign(user, 'SECRET', { expiresIn: '15min' });
    const loan = {
      firstName: 'Raymond',
      lastName: 'Gakwaya',
      email: 'ray@gmail.com',
      tenor: '12 months',
      amount: 600000,
      interest: 30000,
      paymentInstallment: 52500,
      balance: 600000,
    };
    chai.request(app)
      .post('/api/v1/users/apply')
      .set('Authorization', token)
      .send(loan)
      .end((err, res) => {
        res.should.have.status(401);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(401);
        res.body.should.have.property('error');
        done();
      });
  });
});
