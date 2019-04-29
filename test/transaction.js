import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../server/app';

chai.use(chaiHttp);
chai.should();

describe('Post repayment transaction', () => {
  const user = {
    email: 'ray@gmail.com',
  };
  const token = jwt.sign(user, 'SECRET_KEY', { expiresIn: '15min' });
  it('admin should be able to post payment transaction in favor of a client', (done) => {
    chai.request(app)
      .post('/api/v1/admin/transaction/1')
      .set('Authorization', token)
      .send({
        loanId: 1,
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        done();
      });
  });
  it('admin should not be able to post payment transaction when there is no loan id input', (done) => {
    chai.request(app)
      .post('/api/v1/admin/transaction/1')
      .set('Authorization', token)
      .send({
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(400);
        res.body.should.have.property('error');
        done();
      });
  });
  it('admin should not be able to post payment transaction when the loan id is input is not found', (done) => {
    chai.request(app)
      .post('/api/v1/admin/transaction/1')
      .set('Authorization', token)
      .send({
        loanId: 5,
      })
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(404);
        res.body.should.have.property('error');
        done();
      });
  });
  it('admin should not be able to post payment transaction when the user is not found', (done) => {
    chai.request(app)
      .post('/api/v1/admin/transaction/8')
      .set('Authorization', token)
      .send({
        loanId: 1,
      })
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(404);
        res.body.should.have.property('error');
        done();
      });
  });
});
