import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-6">Oops! Something Went Wrong</h1>
        <p className="text-lg text-gray-700 mb-6">We couldn't find the page you were looking for.</p>
        <button
          className="py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          onClick={() => navigate("/")}
        >
          Back To Home
        </button>
      </div>
    </div>
  )
}

export default Error;
