const axios = require('axios');

describe('API test suite', () => {
  let userId;

  it('should retrieve a list of users', async () => {
    const response = await axios.get('https://reqres.in/api/users');
    expect(response.status).toEqual(200);
    expect(response.data.data.length).toBeGreaterThan(0);
  });

  it('should create a new user', async () => {
    const payload = {
      name: 'John',
      job: 'Software Engineer'
    };
    const response = await axios.post('https://reqres.in/api/users', payload);
    expect(response.status).toEqual(201);
    expect(response.data.name).toEqual('John');
    expect(response.data.job).toEqual('Software Engineer');
    userId = response.data.id;
  });

  it('should update the new user', async () => {
    const payload = {
      name: 'Jane',
      job: 'Data Analyst'
    };
    const response = await axios.put(`https://reqres.in/api/users/${userId}`, payload);
    expect(response.status).toEqual(200);
    expect(response.data.name).toEqual('Jane');
    expect(response.data.job).toEqual('Data Analyst');
  });

  it('should delete the new user', async () => {
    const response = await axios.delete(`https://reqres.in/api/users/${userId}`);
    expect(response.status).toEqual(204);
  });
});
