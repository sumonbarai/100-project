const ExchangeOption = ({ children, currency, onHandler }) => {
  return (
    <div className="d-flex flex-column ">
      <span>{children}</span>
      <select
        className="form-select form-select-sm mt-2"
        style={{ width: "100px" }}
        value={currency}
        onChange={(e) => onHandler(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
    </div>
  );
};

export default ExchangeOption;
