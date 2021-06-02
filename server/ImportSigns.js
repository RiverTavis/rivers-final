const { MongoClient } = require("mongodb");
const fs = require("file-system");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const signs = JSON.parse(fs.readFileSync("signs.json"));
const SignImport = async () => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("rivers-final");
  const result = await db.collection("signs").insertMany(signs);
  //   assert.equal(134, result.insertedCount);
  console.log(result);

  client.close();
};

// node ImportUsers.js in terminal to add

SignImport();
