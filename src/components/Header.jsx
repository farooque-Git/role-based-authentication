import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { doSignOut } from "../firebase/auth";
// import { Button } from "@material-tailwind/react";
import {
  Navbar,
  Typography,
  IconButton,
  Avatar,
  Collapse,
} from "@material-tailwind/react";

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <nav className="flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b bg-gray-200">
      <Link to={"/"}>
        <Typography
          as="a"
          className="mr-4 ml-8 cursor-pointer py-1.5 text-xl font-bold flex gap-2 items-center"
        >
          {/* Logo Image  */}
          {/* <img
            className=" w-10 h-10 "
            src=""
          /> */}
          {/* Logo Text  */}
          <span>Dev Crux</span>
        </Typography>
      </Link>

      <div className="ml-auto flex items-center gap-x-2 mr-5">
        {userLoggedIn ? (
          <>
            <button
              onClick={() => {
                doSignOut().then(() => {
                  navigate("/login");
                });
              }}
              className="font-bold text-blue-600 hover:underline"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* <Link
            className="font-bold text-blue-600 hover:underline "
            to={"/login"}
          >
            Login
          </Link>
          <Link
            className="font-bold text-blue-600 hover:underline"
            to={"/register"}
          >
            Register
          </Link> */}
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
