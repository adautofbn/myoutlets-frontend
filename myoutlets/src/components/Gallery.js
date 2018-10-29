import React, { Component } from "react";
import ProductSummary from "./ProductSummary";

class Gallery extends Component {
  render() {
    // TODO: implement this component
    return <ProductSummary products={this.props.products} />;
  }
}

export default Gallery;
