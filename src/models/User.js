import mongoose, { model, models, Schema } from "mongoose";

const UserSchema =  mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
