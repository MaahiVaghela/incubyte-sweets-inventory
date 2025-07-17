const request = require('supertest');
const app = require('../app'); 
const mongoose = require('mongoose');
const Sweet = require('../models/sweetsDB');
const path = require('path');
const fs = require('fs');

beforeAll(async () => {
  
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI);
  }
});

afterEach(async () => {
  await Sweet.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('POST /add', () => {
  it('should return 400 if required fields are missing', async () => {
    const res = await request(app).post('/add').field('name', '');
    expect(res.statusCode).toBe(400);
  });

  it('should successfully add a sweet with valid data', async () => {
    const imagePath = path.join(__dirname, 'kaju-katli.jpg');

    const res = await request(app)
      .post('/add')
      .field('name', 'Kheer')
      .field('description', 'Delicious sweet')
      .field('price', 150)
      .field('quantity', 10)
      .field('category', 'Barfi')
      .attach('image', fs.readFileSync(imagePath), 'sample.jpg');

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('name', 'Kheer');
    expect(res.body).toHaveProperty('price', 150);
  });

    it('should successfully add a sweet with valid data', async () => {
    const imagePath = path.join(__dirname, 'kaju-katli.jpg');

    const res = await request(app)
      .post('/add')
      .field('name', 'pastrey')
      .field('description', 'Delicious sweet')
      .field('price', 500)
      .field('quantity', 50)
      .field('category', 'pastrey')
      .attach('image', fs.readFileSync(imagePath), 'sample.jpg');

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('name', 'pastery');
    expect(res.body).toHaveProperty('price', 500);
  });

   it('should successfully add a sweet with valid data', async () => {
    const imagePath = path.join(__dirname, 'kaju-katli.jpg');

    const res = await request(app)
      .post('/add')
      .field('name', 'laddu')
      .field('description', 'Delicious sweet')
      .field('price', 340)
      .field('quantity', 100)
      .field('category', 'laddu')
      .attach('image', fs.readFileSync(imagePath), 'sample.jpg');

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('name', 'laddu');
    expect(res.body).toHaveProperty('price', 150);
  });
});
