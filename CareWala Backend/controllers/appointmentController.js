import asyncHandler from "express-async-handler";
import { Appointment } from "../models/appointmentSchema.js";

// ================== BOOK NEW APPOINTMENT ==================
export const postAppointment = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    dob,
    gender,
    appointment_date,
    department,
    doctor_firstName,
    doctor_lastName,
    hasVisited,
    address,
  } = req.body;

  // Doctor name ko validation check se hata diya gaya hai
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !dob ||
    !gender ||
    !appointment_date ||
    !department ||
    !address
  ) {
    res.status(400);
    throw new Error("Please fill full appointment form!");
  }

  const appointment = await Appointment.create({
    firstName,
    lastName,
    email,
    phone,
    dob,
    gender,
    appointment_date,
    department,
    doctor: {
      firstName: doctor_firstName || "General",
      lastName: doctor_lastName || "Doctor",
    },
    hasVisited: hasVisited || false,
    address,
    patientId: req.user._id,
  });

  res.status(200).json({
    success: true,
    message: "Appointment Sent Successfully!",
    appointment,
  });
});

// ================== GET ALL APPOINTMENTS (Admin) ==================
export const getAllAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find();

  res.status(200).json({
    success: true,
    appointments,
  });
});

// ================== UPDATE APPOINTMENT STATUS (Admin) ==================
export const updateAppointmentStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;

  let appointment = await Appointment.findById(id);

  if (!appointment) {
    res.status(404);
    throw new Error("Appointment not found!");
  }

  appointment = await Appointment.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    message: "Appointment Status Updated!",
    appointment,
  });
});

// ================== DELETE APPOINTMENT (Admin) ==================
export const deleteAppointment = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const appointment = await Appointment.findById(id);

  if (!appointment) {
    res.status(404);
    throw new Error("Appointment not found!");
  }

  await appointment.deleteOne();

  res.status(200).json({
    success: true,
    message: "Appointment Deleted!",
  });
});