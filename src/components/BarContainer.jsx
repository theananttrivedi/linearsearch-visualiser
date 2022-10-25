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
  // shuffleArray(bars)
  const [bars, setBars] = useState(JSON.parse(JSON.stringify(bars_intital)));

  function handleReset() {
    setBars(JSON.parse(JSON.stringify(bars_intital)));
  }
  function printBars() {
    console.log(bars_intital);
  }
  async function handlePlay() {
    await visualizeLinearSearch();
  }
  async function visualizeLinearSearch() {
    let i = 0;
    let foundcorrect = false;
    while (i < bars.length) {
      setBars((prevBars) => {
        const newBars = [...prevBars];
        const barToBeLookedAt = prevBars[i];
        barToBeLookedAt.currentlyLooking = true;
        newBars[i] = barToBeLookedAt;
        return newBars;
      });

      // 2. Check the condition if true then make it correct visually
      //   if (bars[i].num === valueToBeSearched) {
      //     setBars((prevBars) => {
      //       const newBars = [...prevBars];
      //       const barToBeMarkedCorrect = prevBars[i];
      //       barToBeMarkedCorrect.currentlyLooking = false;
      //       barToBeMarkedCorrect.correct = true;
      //       newBars[i] = barToBeMarkedCorrect;
      //       foundcorrect = true;
      //       return newBars;
      //     });
      //   }

      //   if (foundcorrect) {
      //     setVisualised(true);
      //     setIndex(i);
      //     break;
      //   }
      await new Promise((resolve) => setTimeout(resolve, 500));
      // Set the previous bar to looking = false
      //   setBars((prevBars) => {
      //     const newBars = [...prevBars];
      //     const barToBeLookedAt = prevBars[i];
      //     console.log(barToBeLookedAt);
      //     barToBeLookedAt.currentlyLooking = false;
      //     newBars[i] = barToBeLookedAt;
      //     return newBars;
      //   });

      i++;
    }
  }

  //   useEffect(() => {
  //     visualizeLinearSearch();
  //   }, []);

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
        onClick={printBars}
      >
        Print
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
