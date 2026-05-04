import mongoose from "mongoose";

import dotenv from "dotenv";

import bcrypt from "bcryptjs";

import User from "../models/User.js";

dotenv.config();



const createOwner = async () => {

  try {

    await mongoose.connect(
      process.env.MONGO_URI
    );



    const existingOwner =
      await User.findOne({
        role: "owner",
      });



    if (existingOwner) {

      console.log(
        "Owner already exists"
      );

      process.exit();
    }



    const hashedPassword =
      await bcrypt.hash(
        "owner123",
        10
      );



    const owner =
      await User.create({
        name: "MD. Samiulla Hossen",

        email:
          "owner@bongsho.com",

        password:
          hashedPassword,

        role: "owner",
      });



    console.log(
      "Owner created:"
    );

    console.log(owner);

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);
  }
};

createOwner();