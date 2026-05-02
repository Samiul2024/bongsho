import Person from "../models/Person.js";


// CREATE PERSON
export const createPerson = async (req, res) => {
    try {
        const newPerson = await Person.create(req.body);

        res.status(201).json({
            success: true,
            data: newPerson,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// GET ALL PEOPLE
export const getPeople = async (req, res) => {
    try {
        const people = await Person.find()
            .populate("father")
            .populate("mother")
            .populate("children");

        res.status(200).json({
            success: true,
            count: people.length,
            data: people,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};