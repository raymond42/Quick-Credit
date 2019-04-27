import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../server/app';

chai.use(chaiHttp);
chai.should();

const user = {
  email: 'ray@gmail.com',
};
const token = jwt.sign(user, 'SECRET_KEY', { expiresIn: '15min' });

describe('Repaid loans', () => {
  it('admin should be able to get all repaid loans', (done) => {
    chai.request(app)
      .get('/api/v1/admin/repaid')
      .set('Authorization', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        done();
      });
  });

  it('admin should not be able to get repaid loans when he/she is not authorized', (done) => {
    chai.request(app)
      .get('/api/v1/admin/repaid')
      .end((err, res) => {
        res.should.have.status(401);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(401);
        res.body.should.have.property('error');
        done();
      });
  });
});
