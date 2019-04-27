const users = [];

const user1 = {
  id: 1,
  email: 'ray@gmail.com',
  firstName: 'Raymond',
  lastName: 'Gakwaya',
  password: 'Asdfg1',
  address: 'Rwanda',
  status: 'verified',
  isAdmin: 'true',
};
users.push(user1);
const user2 = {
  id: 2,
  email: 'chris@gmail.com',
  firstName: 'Raymond',
  lastName: 'Gakwaya',
  password: 'Asdfg1',
  address: 'Rwanda',
  status: 'unverified',
  isAdmin: 'false',
};
users.push(user2);
export default users;
