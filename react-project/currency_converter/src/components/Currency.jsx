import { useEffect, useState } from "react";
import Button from "./Button";
import ExchangeOption from "./ExchangeOption";
import Icon from "./Icon";
import Input from "./Input";
import Result from "./Result";
import Loading from "./Loading";

const Currency = () => {
  const [amount, setAmount] = useState(0);
  const [from, setForm] = useState("EUR");
  const [to, setTo] = useState("USD");
  const [data, setData] = useState(null);
  const [isClick, setClick] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`;

    if (amount < 0) {
      window.alert("currency can't be negative value");
      setIsLoading(false);
      return;
    }

    if (from === to) {
      window.alert("Both Converted Currency is same ");
      setIsLoading(false);
      return;
    }
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setIsLoading(false);
      });
  }, [isClick]);

  return (
    <div className=" vw-100 vh-100 gradient d-flex justify-content-center align-items-center">
      <div
        style={{ width: "350px" }}
        className="shadow-sm px-4 py-5  bg-light rounded-4 "
      >
        <h4 className="text-center text-uppercase mb-3 ">currency converter</h4>
        <Input amount={amount} onHandler={setAmount} />
        <div className="d-flex justify-content-between  align-items-center">
          <ExchangeOption currency={from} onHandler={setForm}>
            From
          </ExchangeOption>
          <Icon />
          <ExchangeOption currency={to} onHandler={setTo}>
            To
          </ExchangeOption>
        </div>

        {isLoading ? <Loading /> : <Result data={data} />}

        <Button setClick={setClick} isClick={isClick} />
      </div>
    </div>
  );
};

export default Currency;
