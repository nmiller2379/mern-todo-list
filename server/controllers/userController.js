const e = require("express");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    console.log(req.body);
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Incorrect username." });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true });
    res.json({ message: "Login successful." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserTodos = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("todos");
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    res.json(user.todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logout successful." });
};
