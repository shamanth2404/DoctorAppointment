import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    ).select("-password");

    res
      .status(200)
      .json({
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
    const deletedDoctor = await Doctor.findByIdAndDelete(id).select("-password");

    res.status(200).json({ status: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ status: false, message: "Failed to Delete" });
  }
};

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id).select("-password");

    res.status(200).json({ status: true, message: "Doctor Found", data: doctor });
  } catch (error) {
    res.status(404).json({ status: false, message: "Doctor not found" });
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({}).select("-password");

    res.status(200).json({ status: true, message: "Doctors Found", data: doctors });
  } catch (error) {
    res.status(404).json({ status: false, message: "Not found" });
  }
};
