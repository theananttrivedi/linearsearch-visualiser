import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import bars_initial from "../data/bars_initial";
import shuffleArray from "../lib/shuffleArray";
import Bar from "./Bar";
import ResultContainer from "./ResultContainer";

function BarContainer() {
  const [copyBars, setcopyBars] = useState(
    JSON.parse(JSON.stringify(bars_initial))
  );
  const [inputVisible, setInputVisible] = useState(false);
  const [bars, setBars] = useState(JSON.parse(JSON.stringify(bars_initial)));
  const [playAnimation, setPlayAnimation] = useState(false);
  const [index, setIndex] = useState(null);
  const [valueToBeSearched, setValueToBeSearched] = useState(7);
  const inputRef = useRef();

  function handleReset() {
    setPlayAnimation(false);
    setBars(copyBars);
  }

  function handleMouseEnter() {
    setInputVisible(true);
  }

  function handleMouseLeave() {
    setInputVisible(false);
    console.log({ valueToBeSearched });
    verifyAndSetValue(valueToBeSearched);
  }

  async function handlePlay() {
    if (!playAnimation) {
      setPlayAnimation(true);
    }
  }

  function handleInputValue(e) {
    setValueToBeSearched(e.target.value);
  }

  function handleShuffle() {
    const array = shuffleArray(JSON.parse(JSON.stringify(bars_initial)));

    setcopyBars(array);
    setPlayAnimation(false);
    setBars(array);
  }

  function verifyAndSetValue(value) {
    if (value === "" || isNaN(value)) {
      setValueToBeSearched(0);
      return;
    }
    if (!isNaN(value)) {
      setValueToBeSearched(parseInt(value));
      return;
    }
  }

  useEffect(() => {
    setBars(copyBars);
    setIndex(null);
    let i = -1;
    let founded = false;
    let foundedindex = null;
    if (!playAnimation) return;
    if (i >= bars.length) {
      return;
    }

    const intervalID = setInterval(() => {
      if (founded) {
        setIndex(foundedindex);
        return;
      }
      if (i - bars.length !== -1) {
        setBars((prevBars) => {
          let previousBarTobeStoppedLookingAt;
          const newBars = JSON.parse(JSON.stringify(prevBars));

          if (i !== 0) {
            previousBarTobeStoppedLookingAt = newBars[i - 1];
            previousBarTobeStoppedLookingAt.currentlyLooking = false;
            newBars[i - 1] = previousBarTobeStoppedLookingAt;
          }
          const barToBeLookedAt = newBars[i];
          barToBeLookedAt.currentlyLooking = true;
          if (barToBeLookedAt.num === valueToBeSearched) {
            barToBeLookedAt.currentlyLooking = false;
            barToBeLookedAt.correct = true;
            founded = true;
            foundedindex = i;
          }

          newBars[i] = barToBeLookedAt;

          return newBars;
        });
      }

      // Switching off the last one
      if (i - bars.length === -1) {
        setBars((prevBars) => {
          const newBars = JSON.parse(JSON.stringify(prevBars));
          const lastBarToBeSwitchedOff = newBars[newBars.length - 1];
          lastBarToBeSwitchedOff.currentlyLooking = false;

          if (lastBarToBeSwitchedOff.num !== valueToBeSearched) {
            lastBarToBeSwitchedOff.currentlyLooking = false;
            lastBarToBeSwitchedOff.correct = false;
            founded = true;
            foundedindex = -1;
            console.log("LAST BAR DIDN't MATCH");
          }

          newBars[newBars.length - 1] = lastBarToBeSwitchedOff;
          return newBars;
        });
        if (founded) {
          setIndex(foundedindex);
        }
      }
      i++;
    }, 500);
    return () => {
      clearInterval(intervalID);
    };
  }, [playAnimation]);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current.focus();
    }
  }, [inputVisible]);

  return (
    <div className="flex flex-col gap-y-8 w-full">
      <div className="relative mx-auto w-full flex justify-center items-center">
        {" "}
        <h1 className="px-4 text-black font-bold text-4xl text-center">
          Linear Search{" "}
        </h1>
        <Link
          to={"/learn"}
          className="absolute right-1 cursor-pointer font-extrabold text-blue-500 underline hover:text-blue-600"
        >
          Learn
        </Link>
      </div>

      <div
        on
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative  text-gray-500 font-bold text-xl flex items-center gap-x-2"
      >
        <h1> The value to be searched is : </h1>
        {inputVisible ? (
          <input
            type={"text"}
            className="h-8 w-10 relative text-black shadow-md px-2 outline-none caret-blue-600"
            onChange={handleInputValue}
            value={valueToBeSearched}
            ref={inputRef}
          />
        ) : (
          <span className="text-black h-8 py-1">{valueToBeSearched}</span>
        )}
      </div>

      <div className="flex gap-x-2">
        {bars.map((bar, index) => {
          const { num, currentlyLooking, correct } = bar;
          return (
            <Bar
              num={num}
              key={index}
              currentlyLooking={currentlyLooking}
              correct={correct}
            />
          );
        })}
      </div>
      <div className="h-20">
        {playAnimation && (
          <ResultContainer
            value={valueToBeSearched}
            index={index}
            notCorrect={index === null || index === -1}
          />
        )}
      </div>
      <div className="flex ">
        {" "}
        <button
          className="border-2 border-yellow-400 w-fit px-4 font-bold cursor-pointer hover:border-yellow-600"
          onClick={handleShuffle}
        >
          Shuffle
        </button>
      </div>
      <div className="flex ">
        <button
          className="bg-yellow-400 w-fit px-4 font-bold cursor-pointer hover:bg-yellow-600"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          className="bg-blue-600 ml-auto text-white w-fit px-4 font-bold cursor-pointer hover:bg-blue-700"
          onClick={handlePlay}
        >
          Play
        </button>
      </div>
    </div>
  );
}

export default BarContainer;
