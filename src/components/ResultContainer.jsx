const ResultContainer = ({ value, index, notCorrect }) => {
  let component = (
    <p>
      The value <span className="font-bold">{value}</span> found successfully at
      index <span className="font-bold text-green-600">{index}</span>!
    </p>
  );
  if (notCorrect) {
    component = <p>Incorrect Value </p>;
  }
  return <div className="shadow text-center">{component}</div>;
};

export default ResultContainer;
