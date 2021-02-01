import React, { Component } from "react";
import Froala from "../../../components/Froala";
import Dashboard from "../../../components/Dashboard";

export default class FroalaExample extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Dashboard {...this.props}>
        <Froala
          onChange={(data) => {
            console.log(data);
          }}
          value={"<p>FROALA WYSIWYG EDITOR</p>"}
          id="froaloExample"
        ></Froala>
      </Dashboard>
    );
  }
}
