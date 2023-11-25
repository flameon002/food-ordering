
import mongoose, { model, models, Schema } from "mongoose";

const User = models.User || model("User", new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String },
  },
  { timestamps: true }
));


export { User };