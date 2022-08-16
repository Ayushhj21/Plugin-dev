const User = require("../model/users");
const Plugin = require("../model/plugins");


const createPlugin = async (req, res) => {
    try {
      const plugin = await Plugin.create(req.body);
      res.status(201).json({ plugin });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
};


const getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find({});
      res.status(201).json({ tasks });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  };




  module.exports = {
  createPlugin
  };