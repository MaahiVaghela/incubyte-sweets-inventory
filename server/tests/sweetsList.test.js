
const request = require("supertest");
const app = require("../app"); // or wherever your Express app is exported
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const Sweet = require("../models/sweetsDB"); // your sweet schema

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  await Sweet.deleteMany({}); // clear before each test
});

test("should successfully add a sweet with valid data", async () => {
  const imagePath = path.join(__dirname, "assets", "sample.jpg");

  const res = await request(app)
    .post("/add")
    .field("sweetId", 1010)
    .field("name", "Test Sweet " + Date.now()) // avoid duplicate
    .field("description", "Test Description")
    .field("price", 200)
    .field("quantity", 10)
    .field("category", "Dry")
    .attach("image", fs.readFileSync(path.join(__dirname, "kaju-katli.jpg")), "kaju-katli.jpg");

  expect(res.statusCode).toBe(201);
  expect(res.body).toHaveProperty("name");
  expect(res.body).toHaveProperty("price", 200);
});
