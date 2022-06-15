const express = require("express");
const path = require('path');
const fs = require('fs');
const jwt = require("jsonwebtoken");

const User = require("../model/user.js");

var app = express();

var cors = require('cors');
app.options('*',cors());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

module.exports = app;