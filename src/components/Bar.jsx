const Bar = ({ num, currentlyLooking, correct }) => {
  return (
    <div
      className={`w-10 h-36 relative flex flex-col justify-center items-center ${
        currentlyLooking
          ? "bg-white border-2 border-blue-600"
          : correct
          ? "bg-green-600"
          : "bg-blue-600"
      }`}
    >
      <div
        className={`w-8 h-8 font-bold flex flex-col justify-center items-center [border-radius:50%] ${
          currentlyLooking ? "" : "bg-white"
        }`}
      >
        {num}
      </div>
    </div>
  );
};

export default Bar;
