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

// getting all users
describe('Get all users', () => {
  it('admin should be able to get all users', (done) => {
    chai.request(app)
      .get('/api/v1/admin/users')
      .set('Authorization', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        done();
      });
  });

  it('admin should not be able to get any user when he is not authorized', (done) => {
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

// getting single user
describe('Get a single user', () => {
  it('admin should be able to get a single user', (done) => {
    chai.request(app)
      .get('/api/v1/admin/user/1')
      .set('Authorization', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        done();
      });
  });

  it('admin should not be able to get a user when there is none with the requested id', (done) => {
    chai.request(app)
      .get('/api/v1/admin/user/1234')
      .set('Authorization', token)
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(404);
        res.body.should.have.property('error');
        done();
      });
  });

  it('admin should not be able to get a user when he/she is not authorized', (done) => {
    chai.request(app)
      .get('/api/v1/admin/user/1')
      .end((err, res) => {
        res.should.have.status(401);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(401);
        res.body.should.have.property('error');
        done();
      });
  });
});
