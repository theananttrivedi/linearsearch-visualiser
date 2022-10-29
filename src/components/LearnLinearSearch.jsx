import React from "react";
import { Link } from "react-router-dom";
import LinearSearchFailedImage from "../assets/linear-search-failed.webp";
import LinearSearchFoundImage from "../assets/linear-search-found.webp";
const LearnLinearSearch = () => {
  return (
    <div className="flex flex-col gap-y-8 items-center w-full">
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
      <main className="flex flex-col gap-y-8 w-4/5 items-center">
        <div className="font-bold w-4/5">
          <p>
            Type: <span className="text-blue-600">Algorithm</span>
          </p>
          <p>
            Time Complexity: <span className="text-blue-600">O(N)</span>
          </p>
        </div>
        <div className=" rounded-xl flex flex-col w-4/5">
          <h1 className="font-extrabold text-2xl">What is Linear Search?</h1>
          <p className="font-semibold">
            Linear Search is defined as a{" "}
            <span className="text-blue-600">sequential search algorithm</span>{" "}
            that starts at one end and goes through each element of a list until
            the desired element is found, otherwise the search continues till
            the end of the data set. It is the easiest searching algorithm
          </p>
        </div>

        <div className=" rounded-xl flex flex-col w-4/5">
          <h1 className="font-extrabold text-2xl">
            Here is a visual representation of the algorithm
          </h1>
          <p className="font-semibold">
            Suppose we want to search for the location of the value "1" in an
            array. The procedure to search for the location of 1 would be as
            follows:
          </p>
          <p className="font-semibold">
            We will keep scanning each value from the starting one by one until
            we find "1"
          </p>
          <p className="font-semibold">
            As soon as "1" has been reached, we stop the iteration and return
            the "index" or the location of 1 inside the array
          </p>
          <p className="font-semibold">
            In this case the index is <span className="text-blue-600">3 </span>
            and it took for{" "}
            <span className="text-blue-600">4 comparisons </span> for the
            algorithm to find the location of 1
          </p>
          <img src={LinearSearchFailedImage} className />
          <img src={LinearSearchFoundImage} className />
        </div>
      </main>
    </div>
  );
};

export default LearnLinearSearch;
