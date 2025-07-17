const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app'); // Make sure app.js exports express app
const Sweets = require('../models/sweetsDB');

describe('GET /search - Search sweets', () => {
  let testSweet2;

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);

    // Insert test sweets
    

    testSweet2 = await Sweets.create({
      sweetId: 1001,
      name: 'Laddu',
      price: 100,
      quantity: 5,
      category: 'Traditional',
      description: 'Delicious laddu sweet',
    });
  });

  afterAll(async () => {
    await Sweets.deleteMany({});
    await mongoose.connection.close();
  });

  test('should find sweet by name', async () => {
    const res = await request(app).get('/search?name=laddu');

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0].name.toLowerCase()).toContain('laddu');
  });

  test('should find sweet by category', async () => {
    const res = await request(app).get('/search?category=Traditional');

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0].category.toLowerCase()).toContain('traditional');
  });



  test('should return empty array for no match', async () => {
    const res = await request(app).get('/search?name=laddu');

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

 
  
});
