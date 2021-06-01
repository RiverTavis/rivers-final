const { MongoClient } = require("mongodb");
const fs = require("file-system");
const assert = require("assert");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const users = JSON.parse(fs.readFileSync("users.json"));
const batchImport = async () => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("rivers-final");
  const result = await db.collection("app-users").insertMany(users);
  //   assert.equal(134, result.insertedCount);
  console.log(result);
  client.close();
};

// node ImportUsers.js in terminal to add

batchImport();
