const { MongoClient } = require("mongodb");
const { findUser, findUserIndex, sendResponse } = require("./utils");

// const assert = require("assert");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { ObjectId } = require("mongodb");
//addLike handle?

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

// const sentMessages = [];
// const addUserMessage = (req, res) => {
//   let {message} = req.body;
//   sentMessages.push[message];

// }

// const getMessages = async (req, res) => {
//   const client = await MongoClient(MONGO_URI, options);
//   await client.connect();
//   const db = client.db("rivers-final");
//   const result1 = await db.collection("messages").find().toArray();
//   if (result1) {
//     res.status(200).json(result1);
//   } else {
//     res.status(404).json({ message: "Messsages Not Found" });
//   }
//   client.close();
// };
// const getUserById = (req, res) => {
//   const userId = req.params.id;
//   const user = findUser(res.locals.users, userId);

//   user
//     ? sendResponse(res, 200, user)
//     : sendResponse(res, 404, null, "user not found");
// };

const getSigns = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("rivers-final");
  const result2 = await db.collection("signs").find().toArray();
  if (result2) {
    res.status(200).json(result2);
  } else {
    res.status(404).json({ message: "Signs Not Found" });
  }
  client.close();
};

const addUser = async (req, res) => {
  // get new user info from form
  const infoToPost = req.body;
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("rivers-final");
  // insert the new user
  await db.collection("app-users").insertOne(infoToPost);
  // have to get all users and get the last item in the users array
  // the reason for this is because we do not have the most recent id from
  // the one we just added
  const getThem = await db.collection("app-users").find().toArray();
  if (getThem) {
    res
      .status(200)
      .json({ message: "user added", data: getThem[getThem.length - 1] });
  } else {
    res.status(404).json({ message: "Cannot add User lol" });
  }
  client.close();
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("rivers-final");
  const oneUser = await db
    .collection("app-users")
    .findOne({ _id: ObjectId(id) });
  if (oneUser) {
    res.status(200).json({ message: "user found", data: oneUser });
  } else {
    res.status(404).json({ message: "User Not Found" });
  }
  client.close();
};

const updateUserLikes = async (req, res) => {
  const { id } = req.params;
  const likes = req.body;
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("rivers-final");
  await db
    .collection("app-users")
    .findOneAndUpdate({ _id: ObjectId(id) }, { $set: { likes } });
  const updatedUser = await db
    .collection("app-users")
    .findOne({ _id: ObjectId(id) });
  if (updatedUser) {
    res.status(200).json({ message: "user likes updated", data: updatedUser });
  } else {
    res.status(404).json({ message: "User Not Found" });
  }
  client.close();
};

const updateUserMatches = async (req, res) => {
  const { id } = req.params;
  const matches = req.body;
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("rivers-final");
  await db
    .collection("app-users")
    .findOneAndUpdate({ _id: ObjectId(id) }, { $set: { matches } });

  const updatedMatch = await db
    .collection("app-users")
    .findOne({ _id: ObjectId(id) });
  if (updatedMatch) {
    res.status(200).json({ message: "user likes updated", data: updatedMatch });
  } else {
    res.status(404).json({ message: "User Not Found" });
  }
  client.close();
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("rivers-final");
  const deletedUser = await db
    .collection("app-users")
    .deleteOne({ _id: ObjectId(id) });
  if (deletedUser) {
    res.status(200).json({ message: "user deleted", data: deletedUser });
  } else {
    res.status(404).json({ message: "User Not Found" });
  }
  client.close();
};

module.exports = {
  getUsers,
  getSigns,
  getUserById,
  addUser,
  updateUserLikes,
  updateUserMatches,
  deleteUser,
};
