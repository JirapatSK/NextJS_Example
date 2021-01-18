import React, { Component } from "react";
import Dashboard from "../../components/Dashboard";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <Dashboard {...this.props}>{this.props.env["mode"]}</Dashboard>;
  }
}
