import { useEffect, useState } from "react";
import shuffleArray from "../lib/shuffleArray";
import Bar from "./Bar";
import ResultContainer from "./ResultContainer";

const bars_intital = [
  { num: 1, currentlyLooking: false, correct: false },
  { num: 2, currentlyLooking: false, correct: false },
  { num: 3, currentlyLooking: false, correct: false },
  { num: 4, currentlyLooking: false, correct: false },
  { num: 5, currentlyLooking: false, correct: false },
  { num: 6, currentlyLooking: false, correct: false },
  { num: 7, currentlyLooking: false, correct: false },
  { num: 8, currentlyLooking: false, correct: false },
  { num: 9, currentlyLooking: false, correct: false },
  { num: 10, currentlyLooking: false, correct: false },
];

function BarContainer() {
  const [bars, setBars] = useState(JSON.parse(JSON.stringify(bars_intital)));
  const [playAnimation, setPlayAnimation] = useState(false);
  function handleReset() {
    setPlayAnimation(false);
    setBars(JSON.parse(JSON.stringify(bars_intital)));
  }

  async function handlePlay() {
    setPlayAnimation(true);
  }

  function handlePrint() {
    console.log({ playAnimation });
  }

  useEffect(() => {
    setBars(JSON.parse(JSON.stringify(bars_intital)));
    let i = -1;
    let founded = false;
    if (!playAnimation) return;
    if (i >= bars.length) return;

    const intervalID = setInterval(() => {
      if (founded) return;
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
          if (barToBeLookedAt.num === 5) {
            barToBeLookedAt.currentlyLooking = false;
            barToBeLookedAt.correct = true;
            founded = true;
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
          newBars[newBars.length - 1] = lastBarToBeSwitchedOff;
          return newBars;
        });
        setPlayAnimation(false);
      }
      i++;
    }, 500);
    return () => {
      clearInterval(intervalID);
    };
  }, [playAnimation]);

  return (
    <div className="flex flex-col gap-y-8">
      <div
        className="bg-yellow-400 w-fit px-4 font-bold cursor-pointer"
        onClick={handleReset}
      >
        Reset
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
      <div
        className="bg-blue-600 ml-auto text-white w-fit px-4 font-bold cursor-pointer"
        onClick={handlePrint}
      >
        Print "playAnimation" value
      </div>
      <div
        className="bg-blue-600 ml-auto text-white w-fit px-4 font-bold cursor-pointer"
        onClick={handlePlay}
      >
        Play
      </div>

      {/* <ResultContainer
        value={valueToBeSearched}
        index={index}
        notCorrect={!visualised}
      /> */}
    </div>
  );
}

export default BarContainer;
