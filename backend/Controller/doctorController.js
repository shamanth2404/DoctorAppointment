import BookingSchema from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    ).select("-password");

    res.status(200).json({
      status: true,
      message: "Updated successfully",
      data: updatedDoctor,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "Failed to Update" });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(id).select(
      "-password"
    );

    res.status(200).json({ status: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ status: false, message: "Failed to Delete" });
  }
};

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id).populate("reviews").select("-password");

    res
      .status(200)
      .json({ status: true, message: "Doctor Found", data:doctor });
  } catch (error) {
    res.status(404).json({ status: false, message: "Doctor not found" });
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    }else{
     doctors = await Doctor.find({isApproved:"approved"}).select("-password");
    }
    
    res
      .status(200)
      .json({ status: true, message: "Doctors Found", data: doctors, });
  } catch (error) {
    res.status(404).json({ status: false, message: "Not found" });
  }
};

export const getDoctorProfile = async(req,res) => {
  const doctorId = req.userId;

  try {
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "doctor Not Found" });
    }
    const { password, ...rest } = doctor._doc;
    const appointments = await BookingSchema.find({doctor:doctorId});

    res
      .status(200)
      .json({ success: true, message: "Profile info", data: { ...rest,appointments } });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something Went Wrong" });
  }
}
