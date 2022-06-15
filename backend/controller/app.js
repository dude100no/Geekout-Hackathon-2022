const express = require("express");
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
const jwt = require("jsonwebtoken");

const { key } = require("../config.js");

const User_info = require("../model/user.js");

var app = express();

var cors = require('cors');
app.options('*',cors());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// GET Endpoint: To get the user information
app.get("/user/:userid", isLoggedInMiddleware, (req, res) => {
  User_info.getUserInfo(req.params.userid, (err, userinfo) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).json(userinfo);
    };
  });
});



model.exports = app;