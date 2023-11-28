import { User } from "../../../../models/User.js";
import clientPromise from "../../../../libs/mongoConnect.js";
import NextAuth from "next-auth";
import * as mongoose from "mongoose";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

export const authOptions = {
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        try {
          await mongoose.connect(process.env.MONGO_URL);
          console.log("MongoDB connected");

          const user = await User.findOne({ email });
          console.log("User found:", user);

          const passwordOk =
            user && bcrypt.compareSync(password, user.password);
          console.log("Password check:", passwordOk);

          if (passwordOk) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error:", error);
          // mongoose.connection.close();
          return null;
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


// await mongoose.connect(process.env.MONGO_URL);
// const user = await User.findOne({email});
// const passwordOk = user && bcrypt.compareSync(password, user.password);

// console.log(credentials);

// if (passwordOk) {
//   return user;
// }

// return null
