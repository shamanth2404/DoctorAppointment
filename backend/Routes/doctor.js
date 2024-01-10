import express from "express";
import {
  updateDoctor,
  deleteDoctor,
  getAllDoctors,
  getSingleDoctor,
  getDoctorProfile,
} from "../Controller/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from './review.js';

const router = express.Router();

router.use('/:doctorId/reviews',reviewRouter);

router.put("/:id", authenticate , restrict(['doctor']) , updateDoctor);
router.delete("/:id",authenticate , restrict(['doctor']) ,  deleteDoctor);
router.get("/", getAllDoctors);
router.get("/:id", getSingleDoctor);
router.get('/profile/me',authenticate,restrict(['doctor']),getDoctorProfile);

export default router;