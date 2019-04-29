import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../server/app';

chai.use(chaiHttp);
chai.should();

describe('Approve or reject a loan application', () => {
  const user = {
    email: 'ray@gmail.com',
  };
  const token = jwt.sign(user, 'SECRET_KEY', { expiresIn: '15min' });
  it('admin should be able to approve or reject a loan application', (done) => {
    chai.request(app)
      .patch('/api/v1/admin/approve/1')
      .set('Authorization', token)
      .send({
        email: 'ray@gmail.com',
        status: 'approved',
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        done();
      });
  });
  it('admin should not be able to approve or reject a loan application when there is no admin email input', (done) => {
    chai.request(app)
      .patch('/api/v1/admin/approve/1')
      .set('Authorization', token)
      .send({
        email: '',
        status: 'approved',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(400);
        res.body.should.have.property('error');
        done();
      });
  });
  it('admin should not be able to approve or reject a client when there is an incorrect input', (done) => {
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
  it('admin should not be able to approve or reject a loan application when he/she is not authorized', (done) => {
    chai.request(app)
      .patch('/api/v1/admin/approve/1')
      .send({
        email: 'ray@gmail.com',
        status: 'approved',
      })
      .end((err, res) => {
        res.should.have.status(401);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(401);
        res.body.should.have.property('error');
        done();
      });
  });
  it('admin should not be able to approve or reject a loan application when the client does not found', (done) => {
    chai.request(app)
      .patch('/api/v1/admin/approve/5')
      .set('Authorization', token)
      .send({
        email: 'ray@gmail.com',
        status: 'approved',
      })
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(404);
        res.body.should.have.property('error');
        done();
      });
  });
  it('admin should not be able to approve or reject a loan application when the admin email does not found', (done) => {
    chai.request(app)
      .patch('/api/v1/admin/approve/2')
      .set('Authorization', token)
      .send({
        email: 'raymmm@gmail.com',
        status: 'approved',
      })
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(404);
        res.body.should.have.property('error');
        done();
      });
  });
  it('admin should not be able to approve or reject a loan application when the status changed is not approved or rejected', (done) => {
    chai.request(app)
      .patch('/api/v1/admin/approve/2')
      .set('Authorization', token)
      .send({
        email: 'ray@gmail.com',
        status: 'afdgfdgfdg',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(400);
        res.body.should.have.property('error');
        done();
      });
  });
  it('admin should not be able to approve or reject a loan application when the email is not registered as the admin', (done) => {
    chai.request(app)
      .patch('/api/v1/admin/approve/2')
      .set('Authorization', token)
      .send({
        email: 'chris@gmail.com',
        status: 'approved',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(400);
        res.body.should.have.property('error');
        done();
      });
  });
});
