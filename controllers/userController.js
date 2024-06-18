const User = require("../models/userModel");

exports.allUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.createuser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newuser = await User.create({
      name,
      email,
      password,
    });
    res.status(200).send(newuser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.testuser = (req, res) => {
  res.send("test called");
};

exports.oneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id, req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
