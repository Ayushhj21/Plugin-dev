const User = require("../model/users");
const Plugin = require("../model/plugins");
const ObjectId = require("mongodb").ObjectId;

const createPlugin = async (req, res) => {
  try {
    const plugin = await Plugin.create(req.body);
    return res.status(201).json({ plugin });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const getAllPlugins = async (req, res) => {
  try {
    const plugins = await Plugin.find({});
    return res.status(201).json({ plugins });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const getSpecificPlugin = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const plugin = await User.findOne({ _id: userId });
    if (plugin.pluginId.length == 0) {
      return res.status(404).json({ msg: `No plugin with this ${userId}` });
    } else {
      const plugins = await Plugin.aggregate([
        {
          $match: {
            _id: {
              $in: plugin.pluginId,
            },
          },
        },
      ]);
      return res.status(200).json({ plugins });
    }
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const storePlugin = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const { pluginId } = req.body;
    const plugin = await User.findOneAndUpdate(
      { _id: userId },
      {
        $addToSet: {
          pluginId: pluginId,
        },
      },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      }
    );
    return res.status(200).json({ msg:"Stored Successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports = {
  createPlugin,
  getAllPlugins,
  getSpecificPlugin,
  storePlugin,
};
