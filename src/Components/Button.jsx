function Button(props) {
  const { onClick, children } = props;

  return (
    <button className="btn btn-warning button p-3" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
