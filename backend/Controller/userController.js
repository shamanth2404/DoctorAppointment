import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    ).select("-password");

    res.status(200).json({
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

export const getUserProfile = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }
    const { password, ...rest } = user._doc;

    res
      .status(200)
      .json({ success: true, message: "Profile info", data: { ...rest } });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something Went Wrong" });
  }
};

export const getMyAppointments = async (req, res) => {
  try {
    //step 1 retrieve appointments from booking for specific user
    const bookings = await Booking.find({ user: req.userId });

    //step 2 extract doctors ids from appointmnet bookings
    const doctorIds = bookings.map((el) => el.doctor.id);

    //step 3 retrieve doctors using doctors ids
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
      "-password"
    );

    res
      .status(200)
      .json({ success: true, message: "Appointments", data: doctors });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something Went Wrong" });
  }
};
