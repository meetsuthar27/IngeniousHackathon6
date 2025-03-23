import "dotenv/config";
import mongoose from "mongoose";

var isConnected = false;
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(
      "mongodb+srv://test_user:aNwyyTtxm6cLOV4A@cluster0.41e03.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    isConnected = true;
    console.log("MongoDB is successfully connected");
  } catch (error) {
    console.log("Error Occured", error);
  }
};
