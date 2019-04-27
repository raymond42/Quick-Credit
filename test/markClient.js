import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../server/app';

chai.use(chaiHttp);
chai.should();

describe('mark a client', () => {
  const user = {
    email: 'ray@gmail.com',
  };
  const token = jwt.sign(user, 'SECRET_KEY', { expiresIn: '15min' });
  it('admin should be able to verify a client', (done) => {
    chai.request(app)
      .patch('/api/v1/admin/mark/2')
      .set('Authorization', token)
      .send({
        email: 'ray@gmail.com',
        status: 'verified',
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        done();
      });
  });
  it('admin should not be able to verify a client when the admin not found', (done) => {
    chai.request(app)
      .patch('/api/v1/admin/mark/2')
      .set('Authorization', token)
      .send({
        email: 'raym@gmail.com',
        status: 'verified',
      })
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(404);
        res.body.should.have.property('error');
        done();
      });
  });
  it('admin should not be able to verify a client when there is an incorrect input', (done) => {
    chai.request(app)
      .patch('/api/v1/admin/mark/2')
      .set('Authorization', token)
      .send({
        email: 'raym@gmail.com',
        status: 'ver',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(400);
        res.body.should.have.property('error');
        done();
      });
  });
  it('admin should not be able to verify a client when the email input is not the admin', (done) => {
    chai.request(app)
      .patch('/api/v1/admin/mark/2')
      .set('Authorization', token)
      .send({
        email: 'chris@gmail.com',
        status: 'verified',
      })
      .end((err, res) => {
        res.should.have.status(401);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(401);
        res.body.should.have.property('error');
        done();
      });
  });
  it('admin should not be able to verify a client when he/she is not in the system', (done) => {
    chai.request(app)
      .patch('/api/v1/admin/mark/3')
      .set('Authorization', token)
      .send({
        email: 'ray@gmail.com',
        status: 'verified',
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
