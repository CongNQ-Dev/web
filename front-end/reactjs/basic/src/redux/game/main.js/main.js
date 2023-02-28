import React, { Component } from "react";
import List from "../list.js/list";
import XucXac from "../list.js/xucXac";

export default class Main extends Component {
  render() {
    return (
      <div>
        <List />
        <XucXac />
      </div>
    );
  }
}
