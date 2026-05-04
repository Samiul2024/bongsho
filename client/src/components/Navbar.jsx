import React, {
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  useAuth,
} from "../context/AuthContext";

const Navbar = () => {

  const {
    user,
    logout,
  } = useAuth();



  const [menuOpen, setMenuOpen] =
    useState(false);




  return (

    <nav
      className="
      sticky
      top-0
      z-50
      backdrop-blur-md
      bg-slate-950/70
      border-b
      border-slate-800
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
        "
      >

        {/* LOGO */}
        <Link
          to="/"
          className="
          text-2xl
          font-bold
          text-white
          "
        >
          Bongsho
        </Link>



        {/* DESKTOP MENU */}
        <div
          className="
          hidden
          md:flex
          items-center
          gap-6
          "
        >

          <Link
            to="/"
            className="
            text-slate-300
            hover:text-white
            transition
            "
          >
            Home
          </Link>



          {user && (

            <Link
              to="/dashboard"
              className="
              text-slate-300
              hover:text-white
              transition
              "
            >
              Dashboard
            </Link>
          )}



          {!user ? (

            <Link
              to="/login"
              className="
              bg-blue-600
              hover:bg-blue-700
              px-5
              py-2
              rounded-lg
              text-white
              transition
              "
            >
              Login
            </Link>

          ) : (

            <button
              onClick={logout}
              className="
              bg-red-600
              hover:bg-red-700
              px-5
              py-2
              rounded-lg
              text-white
              transition
              "
            >
              Logout
            </button>
          )}

        </div>



        {/* MOBILE BUTTON */}
        <button
          onClick={() =>
            setMenuOpen(
              !menuOpen
            )
          }
          className="
          md:hidden
          text-white
          text-2xl
          "
        >
          ☰
        </button>

      </div>



      {/* MOBILE MENU */}
      {menuOpen && (

        <div
          className="
          md:hidden
          px-6
          pb-6
          flex
          flex-col
          gap-4
          bg-slate-950
          "
        >

          <Link
            to="/"
            onClick={() =>
              setMenuOpen(false)
            }
            className="text-slate-300"
          >
            Home
          </Link>



          {user && (

            <Link
              to="/dashboard"
              onClick={() =>
                setMenuOpen(false)
              }
              className="text-slate-300"
            >
              Dashboard
            </Link>
          )}



          {!user ? (

            <Link
              to="/login"
              onClick={() =>
                setMenuOpen(false)
              }
              className="
              bg-blue-600
              p-3
              rounded-lg
              text-center
              text-white
              "
            >
              Login
            </Link>

          ) : (

            <button
              onClick={() => {

                logout();

                setMenuOpen(false);
              }}
              className="
              bg-red-600
              p-3
              rounded-lg
              text-white
              "
            >
              Logout
            </button>
          )}

        </div>
      )}

    </nav>
  );
};

export default Navbar;