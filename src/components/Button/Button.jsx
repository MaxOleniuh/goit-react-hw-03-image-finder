const Button = ({ onClick = null }) => {
  return (
    <button type="button" onClick={onClick}>
      More
    </button>
  );
};

export default Button;
