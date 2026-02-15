import mongoose from "mongoose";
<<<<<<< HEAD

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
=======
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.
            MONGODB_URI}/${DB_NAME}`)
            console.log(`\n MongoDB connected 
                !! DB HOST:${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MONGODB connection FAILED: ",error);
        process.exit(1);
    }
}

export default connectDB;
>>>>>>> 6d7682ae87cb24209b2d87f154cc582ddd8fd7a6
