import React, { Component } from "react";

export default class ProductPrice extends Component {
  render() {
    if (this.props.prices === 0) {
      return (
        <div>
          <l>Indisponível</l>
        </div>
      );
    }
    return (
      <div className="wrapper">
        Por R$<l>{this.props.prices}</l>
      </div>
    );
  }
}
