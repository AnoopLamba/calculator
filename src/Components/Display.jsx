function Display(props) {
  const { input, result } = props;

  return (
    <div className="display mb-3 text-white text-end">
      <div className="input bg-black">{input}</div>
      <div className="result bg-black">{result}</div>
    </div>
  );
}

export default Display;
