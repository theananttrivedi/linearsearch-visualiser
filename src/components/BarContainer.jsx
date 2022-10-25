import { useEffect, useState } from "react";
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

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate random number
    let j = Math.floor(Math.random() * (i + 1));

    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}
function BarContainer() {
  // shuffleArray(bars)
  const [bars, setBars] = useState(shuffleArray(bars_intital));
  const [visualised, setVisualised] = useState(false);
  const [index, setIndex] = useState(null);
  const valueToBeSearched = 10;
  async function visualizeLinearSearch() {
    // 1. Set the first to currentlyLooking = true
    // 2. then compare
    // 3. If true then break the loop and set correct = true
    //    Else go to the next one and repeat 2.
    // If the current index is equal to the length
    // Display: The value is not in the list
    let i = 0;
    let foundcorrect = false;
    while (i <= bars.length) {
      if (foundcorrect) {
        setVisualised(true);
        setIndex(i - 1);
        break;
      }
      // 1. Set the current bar to looking = true
      setBars((prevBars) => {
        const newBars = [...prevBars];
        if (i < bars.length) {
          const barToBeLookedAt = prevBars[i];
          barToBeLookedAt.currentlyLooking = true;
          newBars[i] = barToBeLookedAt;
        }
        return newBars;
      });

      // 2. Set the previous bar to looking = false
      setBars((prevBars) => {
        const newBars = [...prevBars];
        if (i != 0) {
          const barBefore = prevBars[i - 1];
          barBefore.currentlyLooking = false;
          newBars[i - 1] = barBefore;
        }
        return newBars;
      });

      // 3. Check the condition if true then make it correct visually
      setBars((prevBars) => {
        const newBars = [...prevBars];
        if (i < bars.length && prevBars[i].num === valueToBeSearched) {
          const barToBeMarkedCorrect = prevBars[i];
          barToBeMarkedCorrect.currentlyLooking = false;
          barToBeMarkedCorrect.correct = true;
          newBars[i] = barToBeMarkedCorrect;
          foundcorrect = true;
        }
        return newBars;
      });

      if (foundcorrect) {
        setVisualised(true);
        setIndex(i - 1);
      }

      //   setBars((prevBars) => {
      //     //   1. Set the previous bar to normal
      //     //   2. Set the current bar to looking = true
      //     //   3. Update the bars array
      //     const newBars = [...prevBars];

      //     //
      //     if (i != 0) {
      //       const barBefore = prevBars[i - 1];
      //       barBefore.currentlyLooking = false;
      //       newBars[i - 1] = barBefore;
      //     }

      //     if (i < bars.length) {
      //       const barToBeLookedAt = prevBars[i];
      //       barToBeLookedAt.currentlyLooking = true;
      //       newBars[i] = barToBeLookedAt;
      //     }

      //     if (i < bars.length && prevBars[i].num === valueToBeSearched) {
      //       const barToBeMarkedCorrect = prevBars[i];
      //       barToBeMarkedCorrect.currentlyLooking = false;
      //       barToBeMarkedCorrect.correct = true;
      //       newBars[i] = barToBeMarkedCorrect;
      //       foundcorrect = true;
      //     }

      //     return newBars;
      //   });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      i++;
    }
  }

  useEffect(() => {
    visualizeLinearSearch();
  }, []);

  return (
    <div className="flex flex-col gap-y-8">
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

      <ResultContainer
        value={valueToBeSearched}
        index={index}
        notCorrect={!visualised}
      />
    </div>
  );
}

export default BarContainer;
