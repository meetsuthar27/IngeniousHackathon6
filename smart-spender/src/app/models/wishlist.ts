import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
  stockName: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.models.User || mongoose.model("Wishlist", wishlistSchema);