import React, { Component } from "react";

export default class ProductName extends Component {
  render() {
    return (
      <div>
        <h3 className="item-name">{this.props.names}</h3>
      </div>
    );
  }
}
