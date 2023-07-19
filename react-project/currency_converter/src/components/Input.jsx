const Input = ({ amount, onHandler }) => {
  return (
    <div className="mb-3">
      <label className="form-label">Enter Amount</label>
      <input
        type="number"
        className="form-control px-2 py-1"
        value={amount}
        onChange={(e) => onHandler(e.target.value)}
      />
    </div>
  );
};

export default Input;
