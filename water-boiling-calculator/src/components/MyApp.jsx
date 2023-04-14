import React, { Component } from "react";
import InputComponent from "./InputComponent";
import Result from "./Result";
import { converter } from "../lib/converter";
import "./MyApp.css";
import Button from "./Button";

class MyApp extends Component {
  state = {
    celsius: "",
    fahrenheit: "",
    isDark: false,
  };

  handler = (e) => {
    if (e.target.value === "") {
      this.setState({
        celsius: "",
        fahrenheit: "",
      });
      return;
    }
    const otherField = e.target.name === "celsius" ? "fahrenheit" : "celsius";
    this.setState({
      [e.target.name]: e.target.value,
      [otherField]: converter(e.target.value, e.target.name),
    });
  };

  // toggle button
  componentDidUpdate(prevProps, PrevState) {
    if (this.state.isDark) {
      document.querySelector(".main-section ").style.background = "#000";
      document.querySelector(".main-section ").style.backgroundImage =
        "linear-gradient(315deg, #000000 0%, #414141 74%);";
      document.querySelector(".main-section ").style.color = "#fff";
      document.querySelectorAll(".fieldset")[0].style.boxShadow =
        "0 4.5px 14px 5px #2c2e31";
      document.querySelectorAll(".fieldset")[1].style.boxShadow =
        "0 4.5px 14px 5px #2c2e31";
    } else {
      document.querySelector(".main-section ").style.background = "#f8d4da";
      document.querySelector(".main-section ").style.color = "";
      document.querySelector(".main-section ").style.background =
        "linear-gradient(0deg, #f8d4da 0%, #7aa0c4 100%)";
      document.querySelectorAll(".fieldset")[0].style.boxShadow =
        "0 4.5px 14px 5px #c0ccdf";
      document.querySelectorAll(".fieldset")[1].style.boxShadow =
        "0 4.5px 14px 5px #c0ccdf";
    }
  }

  render() {
    const { celsius, fahrenheit } = this.state;

    return (
      <div className="main-section">
        <div className="child-section">
          <div>
            <Button
              handler={() => {
                this.setState({ isDark: !this.state.isDark });
              }}
            />
          </div>
          <InputComponent
            val={celsius}
            title="celsius"
            handler={this.handler}
          />
          <InputComponent
            val={fahrenheit}
            title="fahrenheit"
            handler={this.handler}
          />
          <Result celsius={celsius} />
        </div>
      </div>
    );
  }
}

export default MyApp;
