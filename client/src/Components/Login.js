import React from "react";
import { FaGoogle } from "react-icons/fa"; // Import Google icon



const Login = () => {
  
  const loginwithgoogle = () => {
    window.open("http://localhost:4000/auth/google/callback", "_self");
  };


  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login
          </h1>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Not Registered?{" "}
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Create an account
            </a>
          </p>
          <div className="mt-6">
            <button
              className="w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300 flex items-center justify-center space-x-2"
              onClick={loginwithgoogle}
            >
              <FaGoogle className="text-white text-xl" />
              <span>Sign In With Google</span>
            </button>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
