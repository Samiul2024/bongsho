import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import API from "../api/personApi";

const PersonModal = ({
    selectedPerson,
    closeModal,
    refreshTree,
}) => {

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

        if (selectedPerson) {

            setFormData({
                firstName: selectedPerson.firstName || "",
                lastName: selectedPerson.lastName || "",
                gender: selectedPerson.gender || "male",
                profession: selectedPerson.profession || "",
                village: selectedPerson.village || "",
                father: selectedPerson.father?._id || "",
                mother: selectedPerson.mother?._id || "",
            });
        }

        fetchPeople();

    }, [selectedPerson]);



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

            await API.put(
                `/persons/${selectedPerson._id}`,
                formData
            );



            Swal.fire({
                icon: "success",
                title: "Updated",
                text: "Person updated successfully",
                background: "#0f172a",
                color: "#fff",
            });



            refreshTree();

            closeModal();

        } catch (error) {

            console.log(error);



            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Update failed",
                background: "#0f172a",
                color: "#fff",
            });
        }
    };


    if (!selectedPerson) return null;

    const handleDelete = async () => {

        const result = await Swal.fire({
            title: "Delete Person?",
            text: "This action cannot be undone",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Delete",
            background: "#0f172a",
            color: "#fff",
        });



        if (!result.isConfirmed) return;



        try {

            await API.delete(
                `/persons/${selectedPerson._id}`
            );



            Swal.fire({
                icon: "success",
                title: "Deleted",
                text: "Person deleted successfully",
                background: "#0f172a",
                color: "#fff",
            });



            refreshTree();

            closeModal();

        } catch (error) {

            console.log(error);



            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Delete failed",
                background: "#0f172a",
                color: "#fff",
            });
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

            <div className="bg-slate-900 p-6 rounded-2xl w-full max-w-lg border border-slate-700">

                <div className="flex items-center justify-between mb-6">

                    <h2 className="text-2xl font-bold">
                        Edit Person
                    </h2>

                    <button
                        onClick={closeModal}
                        className="text-slate-400 hover:text-white"
                    >
                        ✕
                    </button>

                </div>



                <form
                    onSubmit={handleSubmit}
                    className="grid gap-4"
                >

                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="bg-slate-800 p-3 rounded-lg"
                    />

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="bg-slate-800 p-3 rounded-lg"
                    />

                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="bg-slate-800 p-3 rounded-lg"
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
                        className="bg-slate-800 p-3 rounded-lg"
                    />

                    <input
                        type="text"
                        name="village"
                        placeholder="Village"
                        value={formData.village}
                        onChange={handleChange}
                        className="bg-slate-800 p-3 rounded-lg"
                    />



                    {/* FATHER */}
                    <select
                        name="father"
                        value={formData.father}
                        onChange={handleChange}
                        className="bg-slate-800 p-3 rounded-lg"
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



                    {/* MOTHER */}
                    {/* <select
            name="mother"
            value={formData.mother}
            onChange={handleChange}
            className="bg-slate-800 p-3 rounded-lg"
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



                    <div className="grid grid-cols-2 gap-3">

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold"
                        >
                            Save Changes
                        </button>

                        <button
                            type="button"
                            onClick={handleDelete}
                            className="bg-red-600 hover:bg-red-700 p-3 rounded-lg font-semibold"
                        >
                            Delete Person
                        </button>

                    </div>
                </form>

            </div>

        </div>
    );
};

export default PersonModal;