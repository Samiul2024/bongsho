import Person from "../models/Person.js";



// CREATE PERSON
export const createPerson = async (req, res) => {
  try {

    const {
      firstName,
      lastName,
      gender,
      profession,
      village,
      father,
      mother,
    } = req.body;

    const newPerson = await Person.create({
      firstName,
      lastName,
      gender,
      profession,
      village,

      father:
        father && father !== ""
          ? father
          : null,

      mother:
        mother && mother !== ""
          ? mother
          : null,
    });



    // ADD CHILD TO FATHER
    if (father) {

      await Person.findByIdAndUpdate(
        father,
        {
          $addToSet: {
            children: newPerson._id,
          },
        }
      );
    }



    // ADD CHILD TO MOTHER
    if (mother) {

      await Person.findByIdAndUpdate(
        mother,
        {
          $addToSet: {
            children: newPerson._id,
          },
        }
      );
    }



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




// UPDATE PERSON
export const updatePerson = async (req, res) => {
  try {

    const personId = req.params.id;

    const existingPerson =
      await Person.findById(personId);

    if (!existingPerson) {

      return res.status(404).json({
        success: false,
        message: "Person not found",
      });
    }



    const normalizedFather =
      req.body.father || null;

    const normalizedMother =
      req.body.mother || null;



    const oldFather =
      existingPerson.father?.toString() ||
      null;

    const oldMother =
      existingPerson.mother?.toString() ||
      null;



    // REMOVE FROM OLD FATHER
    if (
      oldFather &&
      oldFather !== normalizedFather
    ) {

      await Person.findByIdAndUpdate(
        oldFather,
        {
          $pull: {
            children: personId,
          },
        }
      );
    }



    // REMOVE FROM OLD MOTHER
    if (
      oldMother &&
      oldMother !== normalizedMother
    ) {

      await Person.findByIdAndUpdate(
        oldMother,
        {
          $pull: {
            children: personId,
          },
        }
      );
    }



    // ADD TO NEW FATHER
    if (
      normalizedFather &&
      oldFather !== normalizedFather
    ) {

      await Person.findByIdAndUpdate(
        normalizedFather,
        {
          $addToSet: {
            children: personId,
          },
        }
      );
    }



    // ADD TO NEW MOTHER
    if (
      normalizedMother &&
      oldMother !== normalizedMother
    ) {

      await Person.findByIdAndUpdate(
        normalizedMother,
        {
          $addToSet: {
            children: personId,
          },
        }
      );
    }



    const updatedPerson =
      await Person.findByIdAndUpdate(
        personId,
        {
          ...req.body,

          father: normalizedFather,

          mother: normalizedMother,
        },
        {
          new: true,
        }
      );



    res.status(200).json({
      success: true,
      data: updatedPerson,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




// DELETE PERSON
export const deletePerson = async (req, res) => {
  try {

    const personId = req.params.id;

    const person =
      await Person.findById(personId);

    if (!person) {

      return res.status(404).json({
        success: false,
        message: "Person not found",
      });
    }



    // REMOVE FROM FATHER CHILDREN
    if (person.father) {

      await Person.findByIdAndUpdate(
        person.father,
        {
          $pull: {
            children: personId,
          },
        }
      );
    }



    // REMOVE FROM MOTHER CHILDREN
    if (person.mother) {

      await Person.findByIdAndUpdate(
        person.mother,
        {
          $pull: {
            children: personId,
          },
        }
      );
    }



    // REMOVE PARENT REFERENCES
    await Person.updateMany(
      {
        father: personId,
      },
      {
        $set: {
          father: null,
        },
      }
    );



    await Person.updateMany(
      {
        mother: personId,
      },
      {
        $set: {
          mother: null,
        },
      }
    );



    // DELETE PERSON
    await Person.findByIdAndDelete(
      personId
    );



    res.status(200).json({
      success: true,
      message:
        "Person deleted successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};