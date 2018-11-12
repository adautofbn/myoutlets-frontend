import React, { Component } from "react";

export default class ProductPrice extends Component {
  render() {
    if (this.props.prices === 0) {
      return (
        <div className="price">Indisponível</div>
      );
    }
    return (
      <div className="price">
        Por R$<>{this.props.prices}</>
      </div>
    );
  }
}
