const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const Sweet = require('../models/sweetsDB');

describe('PUT /sweet/:sweetId - Edit a sweet', () => {
  let server;
  let sweetId;

  beforeAll(async () => {
    server = app.listen(4001);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const sweet = await Sweet.create({
      sweetId: 1010,
      name: 'Cake',
      quantity: 5,
      price: 180
    });

    sweetId = sweet.sweetId;
  });

  afterAll(async () => {
    await Sweet.deleteMany({});
    await mongoose.connection.close();
    await server.close();
  });

  test('should return success message after update', async () => {
    const res = await request(server)
      .put(`/sweet/${sweetId}`)
      .send({
        name: 'Updated Sweet',
        quantity: 10,
        price: 200
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Sweet updated successfully' });
  });
});
