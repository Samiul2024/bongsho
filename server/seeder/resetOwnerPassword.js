import mongoose from "mongoose";

import dotenv from "dotenv";

import bcrypt from "bcryptjs";

import User from "../models/User.js";

dotenv.config();

const resetPassword = async () => {

  try {

    await mongoose.connect(
      process.env.MONGO_URI
    );



    const hashedPassword =
      await bcrypt.hash(
        "owner123",
        10
      );



    const updatedUser =
      await User.findOneAndUpdate(
        {
          email:
            "owner@bongsho.com",
        },

        {
          password:
            hashedPassword,
        },

        {
          new: true,
        }
      );



    console.log(
      "PASSWORD RESET SUCCESS"
    );

    console.log(updatedUser);

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);
  }
};

resetPassword();