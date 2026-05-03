import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import API from "../api/personApi";

const AddPersonForm = ({ refreshTree }) => {

  const [people, setPeople] = useState([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "male",
    profession: "Farmer",
    village: "Nowapara",
    father: "",
    mother: "",
  });


  useEffect(() => {
    fetchPeople();
  }, []);


  const fetchPeople = async () => {
    try {

      const res = await API.get("/persons");

      setPeople(res.data.data);

    } catch (error) {
      console.log(error);
    }
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/persons", formData);



      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Family member added successfully",
        background: "#0f172a",
        color: "#fff",
      });



      setFormData({
        firstName: "",
        lastName: "",
        gender: "male",
        profession: "Farmer",
        village: "Nowapara",
        father: "",
        mother: "",
      });



      // IMPORTANT
      await fetchPeople();

      refreshTree();

    } catch (error) {

      console.log(error);



      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add person",
        background: "#0f172a",
        color: "#fff",
      });
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900 p-6 rounded-2xl border border-slate-700"
    >

      <h2 className="text-2xl font-bold mb-5">
        Add Family Member
      </h2>

      <div className="grid gap-4">

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="bg-slate-800 p-3 rounded-lg outline-none"
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="bg-slate-800 p-3 rounded-lg outline-none"
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="bg-slate-800 p-3 rounded-lg outline-none"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <input
          type="text"
          name="profession"
          placeholder="Profession"
          value={formData.profession}
          onChange={handleChange}
          className="bg-slate-800 p-3 rounded-lg outline-none"
        />

        <input
          type="text"
          name="village"
          placeholder="Village"
          value={formData.village}
          onChange={handleChange}
          className="bg-slate-800 p-3 rounded-lg outline-none"
        />



        {/* FATHER SELECT */}
        <select
          name="father"
          value={formData.father}
          onChange={handleChange}
          className="bg-slate-800 p-3 rounded-lg outline-none"
        >

          <option value="">
            Select Father
          </option>

          {people
            .filter((p) => p.gender === "male")
            .map((person) => (
              <option
                key={person._id}
                value={person._id}
              >
                {person.firstName} {person.lastName}
              </option>
            ))}
        </select>



        {/* MOTHER SELECT */}
        {/* <select
          name="mother"
          value={formData.mother}
          onChange={handleChange}
          className="bg-slate-800 p-3 rounded-lg outline-none"
        >

          <option value="">
            Select Mother
          </option>

          {people
            .filter((p) => p.gender === "female")
            .map((person) => (
              <option
                key={person._id}
                value={person._id}
              >
                {person.firstName} {person.lastName}
              </option>
            ))}
        </select> */}

      </div>

      <button
        type="submit"
        className="mt-5 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold w-full"
      >
        Add Person
      </button>

    </form>
  );
};

export default AddPersonForm;