import User from "../models/UserSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    ).select("-password");

    res
      .status(200)
      .json({
        status: true,
        message: "Updated successfully",
        data: updatedUser,
      });
  } catch (error) {
    res.status(500).json({ status: false, message: "Failed to Update" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(id).select("-password");

    res.status(200).json({ status: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ status: false, message: "Failed to Delete" });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select("-password");

    res.status(200).json({ status: true, message: "User Found", data: user });
  } catch (error) {
    res.status(404).json({ status: false, message: "User not found" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");

    res.status(200).json({ status: true, message: "Users Found", data: users });
  } catch (error) {
    res.status(404).json({ status: false, message: "Not found" });
  }
};
