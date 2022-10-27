import React from "react";
import { Link } from "react-router-dom";
const LearnLinearSearch = () => {
  return (
    <div className="flex flex-col gap-y-8 w-full">
      <div className="relative mx-auto w-full flex justify-center items-center">
        <h1 className="px-4 text-black font-bold text-4xl text-center">
          Linear Search
        </h1>
        <Link
          to={"/"}
          className="absolute right-1 cursor-pointer font-extrabold text-blue-500 underline hover:text-blue-600"
        >
          Play
        </Link>
      </div>
      <main className="flex flex-col gap-y-8">
        <div className="font-bold">
          <p>
            Type: <span className="text-blue-600">Algorithm</span>
          </p>
          <p>
            Time Complexity: <span className="text-blue-600">O(N)</span>
          </p>
        </div>
        <div className=" rounded-xl flex flex-col">
          <h1 className="font-extrabold text-2xl">What is Linear Search?</h1>
          <p className="font-semibold">
            Linear Search is defined as a{" "}
            <span className="text-blue-600">sequential search algorithm</span>{" "}
            that starts at one end and goes through each element of a list until
            the desired element is found, otherwise the search continues till
            the end of the data set. It is the easiest searching algorithm
          </p>
        </div>
      </main>
    </div>
  );
};

export default LearnLinearSearch;
