import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minLength: [3, "First name must have at least 3 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    minLength: [3, "Last name must have at least 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
  },
  dob: {
    type: Date,
    required: [true, "Date of birth is required"],
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: [true, "Gender is required"],
  },
  appointment_date: {
    type: String,
    required: [true, "Appointment date is required"],
  },
  department: {
    type: String,
    required: [true, "Department is required"],
  },
  doctor: {
    firstName: {
      type: String,
      required: [true, "Doctor's first name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Doctor's last name is required"],
    },
  },
  hasVisited: {
    type: Boolean,
    default: false,
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
  patientId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);