const Box = (props) => {
  const { className, message } = props;
  return (
    <div className={`text-and-box ${className}`}>
      <p>{message}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <div>
        <Box className="small-box" message="Small" />
      </div>
      <div>
        <Box className="medium-box" message="Medium" />
      </div>
      <div>
        <Box className="large-box" message="Large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
