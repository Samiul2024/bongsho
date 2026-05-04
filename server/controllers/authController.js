import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import User from "../models/User.js";



const generateToken = (id) => {

    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        {
            expiresIn: "30d",
        }
    );
};




// LOGIN
export const loginUser = async (
    req,
    res
) => {

    try {

        const {
            email,
            password,
        } = req.body;



        const user =
            await User.findOne({ email });



        if (!user) {

            return res.status(400).json({
                message:
                    "User not found",
            });
        }


        console.log("BODY:", req.body);

        console.log("FOUND USER:", user);

        const isMatch =
            await bcrypt.compare(
                password,
                user.password
            );

        console.log("PASSWORD MATCH:", isMatch);

        if (!isMatch) {

            return res.status(400).json({
                message:
                    "Invalid credentials",
            });
        }



        res.status(200).json({
            token: generateToken(
                user._id
            ),

            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });
    }
};