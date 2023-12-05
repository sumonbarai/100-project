/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const total = data.reduce((acc, cur) => acc + cur.total, 0);
  const handleIncrease = (id) => {
    setData(
      data.map((item) => {
        // checking id
        if (item.id === id) {
          item.qty = item.qty + 1;
          item.total = item.qty * item.price;
        }

        return item;
      })
    );
  };
  const handleDecrease = (id) => {
    setData(
      data.map((item) => {
        // checking id
        if (item.id === id) {
          item.qty = item.qty - 1;
          item.total = item.qty * item.price;
        }

        return item;
      })
    );
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((products) => {
        setData(
          products.map((item) => {
            item.qty = 0;
            item.total = 0;
            return item;
          })
        );
      });
  }, []);

  return (
    <div>
      <div className="container">
        <h1>Product Listing</h1>
        <table>
          <tr className="table-header">
            <th>Id</th>
            <th>Product Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
          {data.map((item) => (
            <Row
              key={item?.id}
              {...item}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
          ))}
        </table>
      </div>
      <h2>Total = {total} BDT</h2>
    </div>
  );
}

function Row(props) {
  const { id, name, price, qty, total, stock, handleIncrease, handleDecrease } =
    props;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>{qty}</td>
      <td>{total}</td>
      <td>
        <button
          disabled={stock <= qty ? true : false}
          onClick={() => handleIncrease(id)}
        >
          +
        </button>
        <button
          disabled={qty <= 0 ? true : false}
          onClick={() => handleDecrease(id)}
        >
          -
        </button>
      </td>
    </tr>
  );
}

// function Row(props) {
//   console.log(props);
//   return <div>{props.age}</div>;
// }

// function App() {
//   return (
//     <div>
//       <Row {...{ name: "sumon", age: 30 }} />
//     </div>
//   );
// }

export default App;
