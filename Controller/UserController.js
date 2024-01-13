const UserModel = require("../Models/UserModel");
const asyncHandler = require("express-async-handler");

const AddNewUser = asyncHandler(async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.json({
      status: "200",
      massage: "Record Saved",
      Data: user,
    });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const GetAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json({
      status: "success",
      massage: "All The Records",
      Data: users,
    });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

const GetUserById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    res.json({
      status: "200",
      massage: "User Information",
      Data: user,
    });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const DeleteUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndDelete(id);

    if (!user) {
      res.status(404);
      throw new Error(`cannot find any User with ID ${id}`);
    }
    res.json({
      status: "200",
      massage: "Deleted User",
      Data: user,
    });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const UpdateUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndUpdate(id, req.body);
    if (!user) {
      res.status(404);
      throw new Error(`cannot find any user with ID ${id}`);
    }
    const updatedUser = await UserModel.findById(id);
    res.status(200).json({
      message: "Updated Record",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  AddNewUser,
  GetAllUsers,
  GetUserById,
  DeleteUser,
  UpdateUser,
};
