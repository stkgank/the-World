import React, { Component } from "react";
import "../../assets/master.css";
class DigitalComponents extends Component {
  render() {
    const user = {
      firstName: "1",
      lastName: "2"
    };

    function formatName(user) {
      return "数显压力表:" + user.firstName + " 地址位:" + user.lastName;
    }

    return (
      <div>
        <img src="src/assets/images/logo.png" width="50" />
        <br />
        <br />
        <input id={"myInput"} value={formatName(user)} />
        <br />
      </div>
    );
  }
}

export default DigitalComponents;
