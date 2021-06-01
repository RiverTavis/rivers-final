const { MongoClient } = require("mongodb");
const assert = require("assert");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getUsers = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("rivers-final");
  const result = await db.collection("app-users").find().toArray();
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: "Users Not Found" });
  }
  client.close();
};

module.exports = { getUsers };
