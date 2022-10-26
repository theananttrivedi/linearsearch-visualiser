import { useEffect, useState } from "react";
import bars_initial from "../data/bars_initial";
import shuffleArray from "../lib/shuffleArray";
import Bar from "./Bar";
import ResultContainer from "./ResultContainer";

function BarContainer() {
  const [copyBars, setcopyBars] = useState(
    JSON.parse(JSON.stringify(bars_initial))
  );
  const [bars, setBars] = useState(JSON.parse(JSON.stringify(bars_initial)));
  const [playAnimation, setPlayAnimation] = useState(false);
  const [index, setIndex] = useState(null);
  const [valueToBeSearched, setValueToBeSearched] = useState(15);
  function handleReset() {
    setPlayAnimation(false);
    setBars(copyBars);
  }

  async function handlePlay() {
    setPlayAnimation(true);
  }

  function handleShuffle() {
    const array = shuffleArray(JSON.parse(JSON.stringify(bars_initial)));

    setcopyBars(array);
    setPlayAnimation(false);
    setBars(array);
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

          //   Switching off the previous bar
          // logic doesn't work in case of the last one
          // the last one is switched off seperately
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

  return (
    <div className="flex flex-col gap-y-8">
      <h1 className="px-4 text-black font-bold text-4xl text-center">
        Linear Search{" "}
      </h1>

      <h1 className="px-4 text-gray-500 font-bold text-xl">
        The value to be searched is :{" "}
        <span className="text-black">{valueToBeSearched}</span>
      </h1>
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
      <div className="flex mx-4">
        {" "}
        <div
          className="border-2 border-yellow-400 w-fit px-4 font-bold cursor-pointer"
          onClick={handleShuffle}
        >
          Shuffle
        </div>
      </div>
      <div className="flex mx-4">
        <div
          className="bg-yellow-400 w-fit px-4 font-bold cursor-pointer"
          onClick={handleReset}
        >
          Reset
        </div>
        <div
          className="bg-blue-600 ml-auto text-white w-fit px-4 font-bold cursor-pointer"
          onClick={handlePlay}
        >
          Play
        </div>
      </div>
    </div>
  );
}

export default BarContainer;
