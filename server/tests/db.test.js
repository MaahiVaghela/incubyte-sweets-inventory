// tests/db.test.js
require('dotenv').config();
const mongoose = require('mongoose');

describe('MongoDB Atlas Connection', () => {
  it('should connect to MongoDB Atlas successfully', async () => {
    const dbURI = process.env.MONGO_URI;
    await expect(mongoose.connect(dbURI)).resolves.toBeDefined();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});
