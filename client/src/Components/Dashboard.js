import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:4000/login/sucess", {
        withCredentials: true,
      });
      console.log("response", response);
    } catch (error) {
      navigate("*");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to the Dashboard
        </h1>
        <p className="text-gray-600 mb-6">
          This is your main control panel where you can manage your settings and
          preferences.
        </p>
        <button
          onClick={() => navigate("/profile")}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 mb-4"
        >
          Go to Profile
        </button>
        <div>
          {" "}
       
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
