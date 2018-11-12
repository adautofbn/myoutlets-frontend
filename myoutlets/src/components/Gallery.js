import React, { Component } from "react";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import BuyButton from "./BuyButton";

export default class ProductSummary extends Component {
  render() {
    return (
      <div className="gallery">
        {this.props.products.map(product => {
          return (
            <article key={product.id} className="summary">
              <>
                <img src={product.img} alt={product.description}/>
                <ProductName names={product.name} />
                <ProductPrice prices={product.price}/>
                <BuyButton></BuyButton>
              </>
            </article>
          );
        })}
      </div>
    );
  }
}