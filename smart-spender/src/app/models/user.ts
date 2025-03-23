import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  wishlist: [
    {
      type: String,
    },
  ],
});

// module.exports = mongoose.model("User", userSchema);
export default mongoose.models.User || mongoose.model("User", userSchema);
