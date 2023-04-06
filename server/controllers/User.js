const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try {
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      email: req.body.email,
      password: hashedPassword
    });

    const savedUser = await user.save();

    const token = jwt.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).json({ token: token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: 'Email is not registered' });
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).json({ token: token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



// GET User Id
exports.getUserId = async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId);

    res.json({ user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



// GET All users
exports.getAllUsers = async (req, res) => {
  try {
      const users = await User.find({});
    res.json({ users });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
