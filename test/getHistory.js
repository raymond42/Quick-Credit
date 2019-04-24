import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../server/app';

chai.use(chaiHttp);
chai.should();

describe('Repayment history', () => {
  const user = {
    email: 'ray@gmail.com',
  };
  const token = jwt.sign(user, 'SECRET_KEY', { expiresIn: '15min' });
  it('user should be able to get loan repayment history', (done) => {
    chai.request(app)
      .get('/api/v1/users/history/1')
      .set('Authorization', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        done();
      });
  });

  it('user should not be able to get loan repayment history when he/she is not authorized', (done) => {
    chai.request(app)
      .get('/api/v1/users/history/1')
      .end((err, res) => {
        res.should.have.status(401);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(401);
        res.body.should.have.property('error');
        done();
      });
  });

  it('user should not be able to get loan repayment history when there is none with such id', (done) => {
    chai.request(app)
      .get('/api/v1/users/history/1234')
      .set('Authorization', token)
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(404);
        res.body.should.have.property('error');
        done();
      });
  });
});
