import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { doSignOut } from "../firebase/auth";
import { Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <nav className="flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-14 border-b bg-black">
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
          <span className=" m-auto text-yellow-600">Dev Camp</span>
        </Typography>
      </Link>

      <div className="ml-auto flex items-center gap-x-2 mr-5">
        {userLoggedIn ? (
          <>
            <Link className="flex pr-6" to="/profile">
              <FontAwesomeIcon icon={faUser} className="text-white" />
            </Link>
            <button
              onClick={() => {
                doSignOut().then(() => {
                  navigate("/login");
                });
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
