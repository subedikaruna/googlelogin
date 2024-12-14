import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Headers = () => {
  const [userdata, setUserdata] = useState({});

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:4000/login/sucess", {
        withCredentials: true,
      });
      setUserdata(response.data.user);
    } catch (error) {
      console.log("error", error);
    }
  };

  const logout = () => {
    window.open("http://localhost:4000/logout", "_self");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="text-3xl font-bold text-yellow-500">
          <NavLink to="/" className="hover:text-yellow-300 transition duration-300">
            MyWebsite
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-500 text-lg font-medium transition duration-300 ${
                isActive ? "text-yellow-500" : "text-white"
              }`
            }
          >
            Home
          </NavLink>

          {Object.keys(userdata).length > 0 ? (
            <>
              <span className="font-semibold text-lg text-yellow-300 mr-4">
                {userdata.displayName}
              </span>

              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `hover:text-yellow-500 text-lg font-medium transition duration-300 ${
                    isActive ? "text-yellow-500" : "text-white"
                  }`
                }
              >
                Dashboard
              </NavLink>

              <button
                onClick={logout}
                className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-lg font-medium transition duration-300"
              >
                Logout
              </button>

              {userdata.image && (
                <img
                  src={userdata.image}
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full border-4 border-yellow-500 ml-4"
                />
              )}
            </>
          ) : (
            <NavLink
              to="/login"
              className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md text-lg font-medium transition duration-300"
            >
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Headers;
