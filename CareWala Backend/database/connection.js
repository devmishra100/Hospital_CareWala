import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "CareWala_Backend",
    })
    .then(() => {
      console.log("Database connected successfully!");
    })
    .catch((err) => {
      console.log(`Database connection error: ${err}`);
    });
};