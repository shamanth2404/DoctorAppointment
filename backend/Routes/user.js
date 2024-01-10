import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  getUserProfile,
  getMyAppointments,
} from "../Controller/userController.js";

import { authenticate , restrict} from "../auth/verifyToken.js";

const router = express.Router();

router.put("/:id", authenticate , restrict(['patient']) ,  updateUser);
router.delete("/:id", authenticate , restrict(['patient']) , deleteUser);
router.get("/", authenticate , restrict(['admin']) , getAllUsers);
router.get("/:id",authenticate , restrict(['patient']) , getSingleUser);
router.get("/profile/me",authenticate , restrict(['patient']) , getUserProfile);
router.get("/appointments/my-appointments",authenticate , restrict(['patient']) , getMyAppointments);

export default router;
