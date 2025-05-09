import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-700">
          Beta Rotation Advisor
        </Link>
        <div>
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium px-4">
            Home
          </Link>
          <Link to="/results" className="text-gray-700 hover:text-blue-600 font-medium">
            Results
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;