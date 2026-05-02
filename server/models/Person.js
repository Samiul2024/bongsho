import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },

        lastName: {
            type: String,
            default: "",
        },

        gender: {
            type: String,
            enum: ["male", "female"],
            required: true,
        },

        photo: {
            type: String,
            default: "",
        },

        father: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Person",
            default: null,
        },

        mother: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Person",
            default: null,
        },

        spouses: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Person",
            },
        ],

        children: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Person",
            },
        ],

        bio: {
            type: String,
            default: "",
        },

        profession: {
            type: String,
            default: "",
        },

        village: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

const Person = mongoose.model("Person", personSchema);

export default Person;