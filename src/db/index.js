import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("ENV CHECK MONGODB_URI =", process.env.MONGODB_URI);

    await mongoose.connect(`${process.env.MONGODB_URI}/videotube`);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MONGODB connection FAILED", error);
    process.exit(1);
  }
};

export default connectDB;
