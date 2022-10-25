import { ImCross, ImCheckmark } from "react-icons/im";
const ResultContainer = ({ value, index, notCorrect }) => {
  let component = (
    <div className="">
      <div className="flex items-center justify-center gap-x-4">
        <p className="text-green-600 font-bold text-xl">
          Value found Successfully
        </p>
        <ImCheckmark color="#16A34A" size={20} />
      </div>{" "}
      {/* <p>
        The value <span className="font-bold">{value}</span> found successfully
        at index <span className="font-bold text-green-600">{index}</span>!
      </p> */}
    </div>
  );
  if (notCorrect) {
    component = (
      <div className="flex items-center justify-center gap-x-4">
        <p className="text-red-600 font-bold text-xl">Value Not Found</p>
        <ImCross color="#DC2626" size={20} />
      </div>
    );
  }
  return (
    <div className="text-center flex flex-col items-center justify-center">
      {component}
    </div>
  );
};

export default ResultContainer;
