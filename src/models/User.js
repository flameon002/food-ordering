
import mongoose, { model, models, Schema } from "mongoose";
import bcrypt from "bcrypt";


const User = models.User || model("User", new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String },
  },
  { timestamps: true }
));

// User.post("validate", function (user) {
//   const password = user.password;
//   const salt = bcrypt.genSaltSync(10);
//   const hashedPassword = bcrypt.hashSync(password, salt);

//   user.password = hashedPassword;
// });

export { User };