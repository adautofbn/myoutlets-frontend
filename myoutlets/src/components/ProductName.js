import React, { Component } from "react";

export default class ProductName extends Component {
  render() {
    // TODO: implement this component
    return (
      <div className="wrapper">
        <h3>{this.props.names}</h3>
      </div>
    );
  }
}
