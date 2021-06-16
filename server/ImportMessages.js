const { MongoClient } = require("mongodb");
const fs = require("file-system");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const messages = JSON.parse(fs.readFileSync("messages.json"));
const batchImport = async () => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("rivers-final");
  const result = await db.collection("messages").insertMany(messages);

  client.close();
};

// node ImportSigns.js in terminal to add

batchImport();
