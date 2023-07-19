const Result = ({ data }) => {
  const { amount, base, rates } = data || {};
  const [to] = Object.keys(rates);

  return (
    <div
      style={{ color: "#2BAE66FF" }}
      className="text-center mt-4 text-uppercase"
    >
      {amount} {base} = {rates[to]} {to}
    </div>
  );
};

export default Result;
