import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 font-semibold flex flex-col">
      <h1 className="text-2xl">OOPS!</h1>
      <p className="text-xl text-gray-400">The requested page was not found</p>
      <Link to="/" className="text-blue-600 hover:text-blue-700 underline">
        Try Home Page?
      </Link>
    </div>
  );
};

export default NoMatch;
