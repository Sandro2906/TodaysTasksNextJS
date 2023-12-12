import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  title: {
    type: String,
  },
  task: {
    type: String,
  },

});

const User =
  mongoose.models.User || mongoose.model("User", userSchema);

export default User;