"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {
  getUsers,
  getSigns,
  getUserById,
  addUser,
  updateUserLikes,
  updateUserMatches,
  deleteUser,
  updateMessageThreads,
} = require("./handlers");
const PORT = process.env.PORT || 8000;

express()
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // endpoints
  .get("/users", getUsers)

  .get("/signs", getSigns)

  .get("/users/:id", getUserById)

  .post("/users/new", addUser)

  .patch("/user/likes/:id", updateUserLikes)

  .patch("/user/matches/:id", updateUserMatches)

  .delete("/users/edit/remove/:id", deleteUser)

  .patch("/users/messages/update", updateMessageThreads)

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
