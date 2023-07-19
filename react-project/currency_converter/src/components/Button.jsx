const Button = ({ isClick, setClick }) => {
  return (
    <button
      type="button"
      style={{ background: "#2BAE66FF", color: "#fff" }}
      className="btn  btn-sm w-100 mt-3 text-uppercase"
      onClick={() => setClick(!isClick)}
    >
      get exchange rate
    </button>
  );
};

export default Button;
