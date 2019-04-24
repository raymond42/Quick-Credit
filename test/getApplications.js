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

// getting all loan applications
describe('Get all loan applications', () => {
  it('admin should be able to get all loan applications', (done) => {
    chai.request(app)
      .get('/api/v1/admin/applications')
      .set('Authorization', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        done();
      });
  });

  it('admin should not be able to get any loan application when he is not authorized', (done) => {
    chai.request(app)
      .get('/api/v1/admin/applications')
      .end((err, res) => {
        res.should.have.status(401);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(401);
        res.body.should.have.property('error');
        done();
      });
  });
});

// getting single loan application
describe('Get a single loan application', () => {
  it('admin should be able to get a single loan application', (done) => {
    chai.request(app)
      .get('/api/v1/admin/application/1')
      .set('Authorization', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        done();
      });
  });

  it('admin should not be able to get a loan application when there is none with the requested id', (done) => {
    chai.request(app)
      .get('/api/v1/admin/application/1234')
      .set('Authorization', token)
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(404);
        res.body.should.have.property('error');
        done();
      });
  });

  it('admin should not be able to get a loan application when he/she is not authorized', (done) => {
    chai.request(app)
      .get('/api/v1/admin/application/1234')
      .end((err, res) => {
        res.should.have.status(401);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(401);
        res.body.should.have.property('error');
        done();
      });
  });
});
