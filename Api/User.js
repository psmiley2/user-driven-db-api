const express = require("express");
const mongoose = require("mongoose");
const User = require("../DB/User");
const route = express.Router();

route.post("/", async (req, res) => {
    console.log(req.body)
    const {firstname} = req.body;
    let user = {};
    user.firstName = firstname;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
})

module.exports = route