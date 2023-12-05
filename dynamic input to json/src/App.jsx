import { useState } from "react";
import "./App.css";

const severData = {
  name: {
    type: "text",
    label: "What is your name?",
    placeholder: "type your name...",
  },
  email: {
    type: "email",
    label: "What is your email address?",
    placeholder: "type your email...",
  },
  address: {
    type: "text",
    label: "What is your  address?",
    placeholder: "type your address...",
  },
  mobile: {
    type: "text",
    label: "What is your  dafaf?",
    placeholder: "type your address...",
  },
};

const transformToArray = (obj) => {
  return Object.keys(obj).map((propertyName) => ({
    name: propertyName,
    ...obj[propertyName],
  }));
};

const transformToObject = (obj) => {
  return Object.keys(obj).reduce((acc, curr) => {
    acc[curr] = {
      ...obj[curr],
      value: "",
    };

    return acc;
  }, {});
};

const customObject = transformToObject(severData);

function App() {
  const [data, setData] = useState(customObject);

  // only render Ul
  const renderedArray = transformToArray(data);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: {
        ...data[e.target.name],
        value: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValue = renderedArray.reduce((acc, cur) => {
      acc[cur.name] = cur.value;
      return acc;
    }, {});

    console.log(formValue);
  };

  return (
    <div className="container">
      <div className="left">
        <div>
          <form onSubmit={handleSubmit}>
            {renderedArray.map((item, index) => {
              return (
                <div key={index}>
                  <label htmlFor="">{item.label}</label>
                  <input
                    type={item.type}
                    placeholder={item.placeholder}
                    name={item.name}
                    value={item.value}
                    onChange={handleChange}
                  />
                </div>
              );
            })}

            <div>
              <button type="submit">submit</button>
            </div>
          </form>
          {/* <button onClick={() => createNewField("mobile")}>add new field</button> */}
        </div>
      </div>
      <div className="right">
        <h2>add new field</h2>
      </div>
    </div>
  );
}

export default App;
