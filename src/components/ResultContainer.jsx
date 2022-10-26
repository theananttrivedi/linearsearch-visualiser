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
      <p className="text-xl font-bold">
        At Index: <span className="font-bold">{index}</span>{" "}
      </p>
    </div>
  );
  if (notCorrect) {
    component = (
      <div>
        <div className="flex items-center justify-center gap-x-4">
          <p className="text-red-600 font-bold text-xl">Value Not Found</p>
          <ImCross color="#DC2626" size={20} />
        </div>
        {index === -1 ? (
          <p className="text-xl font-bold">
            Unfortunately, The Value is not present in the given array
          </p>
        ) : (
          ""
        )}
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
