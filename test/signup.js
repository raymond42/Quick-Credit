import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/app';

chai.use(chaiHttp);
chai.should();

describe('signup', () => {
  it('user should be able to signup', (done) => {
    const user = {
      email: 'raymond@gmail.com',
      firstName: 'Raymond',
      lastName: 'Gakwaya',
      password: 'Asdfg1',
      address: 'Rwanda',
      status: 'Verified',
      isAdmin: 'False',
    };
    chai.request(app)
      .post('/api/v1/users/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(201);
        res.body.should.have.property('data');
        done();
      });
  });

  it('user should not be able to signup when there is incorrect data type', (done) => {
    const user = {
      email: 'patrick@gmail.com',
      firstName: 1,
      lastName: 'Gakwaya',
      password: 'Asdfg1',
      address: 'Rwanda',
      status: 'Verified',
      isAdmin: 'False',
    };
    chai.request(app)
      .post('/api/v1/users/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(400);
        res.body.should.have.property('error');
        done();
      });
  });

  it('user should not be able to signup when the email is already registered', (done) => {
    const user = {
      email: 'ray@gmail.com',
      firstName: 'Raymond',
      lastName: 'Gakwaya',
      password: 'Asdfg1',
      address: 'Rwanda',
      status: 'Verified',
      isAdmin: 'False',
    };
    chai.request(app)
      .post('/api/v1/users/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(403);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(403);
        res.body.should.have.property('error');
        done();
      });
  });

  it('user should not be able to signup when email is not entered', (done) => {
    const user = {
      firstName: 'Raymond',
      lastName: 'Gakwaya',
      password: 'Asdfg1',
      address: 'Rwanda',
      status: 'Verified',
      isAdmin: 'False',
    };
    chai.request(app)
      .post('/api/v1/users/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(400);
        res.body.should.have.property('error');
        done();
      });
  });
  it('user should not be able to signup when there is an empty field', (done) => {
    const user = {
      email: '',
      firstName: 'Raymond',
      lastName: 'Gakwaya',
      password: 'Asdfg1',
      address: 'Rwanda',
      status: 'Verified',
      isAdmin: 'False',
    };
    chai.request(app)
      .post('/api/v1/users/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(400);
        res.body.should.have.property('error');
        done();
      });
  });
});
