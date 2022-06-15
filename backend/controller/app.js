const express = require("express");
const path = require('path');
const fs = require('fs');
const jwt = require("jsonwebtoken");

const { key } = require("../config.js");

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
      res.status(500).json(err);
    } else {
      res.status(200).json(userinfo);
    };
  });
});



module.exports = app;