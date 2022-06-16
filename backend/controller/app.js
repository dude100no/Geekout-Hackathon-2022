const express = require("express");
const path = require('path');
const fs = require('fs');
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser')

const User = require("../model/user.js");
const Message = require("../model/message.js");

var app = express();

var cors = require('cors');
app.options('*',cors());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// GET Endpoint: To get the user's sentiment
app.post("/user/sentiment/", (req, res) => {
  User.getUserSentiment(req.body.sender, req.body.recipient, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result)
    };
  });
});

// GET Endpoint: To get the user information
app.get("/user/:userid", (req, res) => {
  User.getUserInfo(req.params.userid, (err, userinfo) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(userinfo);
    };
  });
});

// POST Endpoint: To add new user to the database
app.post("/user", (req, res) => {
  User.addUserInfo(req.body.firstname, req.body.lastname, req.body.type, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({ 'message': `1 user successfully added` })
    };
  });
});

// GET Endpoint: To get all messages a user has sent or received
app.get("/user/messages/:userid", (req, res) => {
  Message.getAllUserMsg(req.params.userid, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    };
  });
});

module.exports = app;