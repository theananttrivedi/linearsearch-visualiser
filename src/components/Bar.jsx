const Bar = ({ num, currentlyLooking, correct }) => {
  return (
    <div
      className={`[width:8vw] h-36 px-1 lg:w-20 lg:h-40 relative flex flex-col justify-center items-center ${
        currentlyLooking
          ? "bg-white border-2 border-blue-600"
          : correct
          ? "bg-green-600"
          : "bg-blue-600"
      }`}
    >
      <div
        className={`w-full aspect-square font-bold flex flex-col justify-center items-center [border-radius:50%] ${
          currentlyLooking ? "" : "bg-white"
        }`}
      >
        {num}
      </div>
    </div>
  );
};

export default Bar;
