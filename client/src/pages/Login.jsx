import {
  useState,
} from "react";

import AUTH_API from "../api/authApi";

import {
  useAuth,
} from "../context/AuthContext";

import Swal from "sweetalert2";

const Login = () => {

  const {
    login,
  } = useAuth();



  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });




  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };




  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    try {

      const res =
        await AUTH_API.post(
          "/login",
          formData
        );



      login(
        res.data.user,
        res.data.token
      );



      Swal.fire({
        icon: "success",
        title:
          "Login successful",
        timer: 1500,
        showConfirmButton: false,
      });



      window.location.href =
        "/";

    } catch (error) {

      Swal.fire({
        icon: "error",
        title:
          "Login failed",
        text:
          error.response?.data
            ?.message ||
          "Something went wrong",
      });
    }
  };




  return (

    <div
      className="
      min-h-screen
      bg-slate-950
      flex
      items-center
      justify-center
      p-6
      "
    >

      <form
        onSubmit={handleSubmit}
        className="
        bg-slate-900
        p-8
        rounded-2xl
        w-full
        max-w-md
        border
        border-slate-700
        space-y-5
        "
      >

        <h1
          className="
          text-3xl
          font-bold
          text-center
          text-white
          "
        >
          Bongsho Login
        </h1>



        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="
          w-full
          p-3
          rounded-lg
          bg-slate-800
          text-white
          border
          border-slate-700
          "
        />



        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="
          w-full
          p-3
          rounded-lg
          bg-slate-800
          text-white
          border
          border-slate-700
          "
        />



        <button
          type="submit"
          className="
          w-full
          bg-blue-600
          hover:bg-blue-700
          transition
          p-3
          rounded-lg
          text-white
          font-semibold
          "
        >
          Login
        </button>

      </form>

    </div>
  );
};

export default Login;