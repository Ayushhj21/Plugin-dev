const User = require("../model/users");
const Plugin = require("../model/plugins");


const createUser = async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json({ user });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
};




  module.exports = {
  createUser
  };