import { ImCross, ImCheckmark } from "react-icons/im";
const ResultContainer = ({ value, index, notCorrect }) => {
  let component = (
    <div>
      {/* <p>
        The value <span className="font-bold">{value}</span> found successfully
        at index <span className="font-bold text-green-600">{index}</span>!
      </p> */}
      <div className="flex items-center justify-center gap-x-4">
        <p className="text-green-600 font-bold">Correct Value</p>
        <ImCheckmark color="#16A34A" />
      </div>
    </div>
  );
  if (notCorrect) {
    component = (
      <div className="flex items-center justify-center gap-x-4">
        <p className="text-red-600 font-bold">Incorrect Value</p>
        <ImCross color="#DC2626" />
      </div>
    );
  }
  return <div className="shadow text-center">{component}</div>;
};

export default ResultContainer;
