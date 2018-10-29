import React, { Component } from "react";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import BuyButton from "./BuyButton";

export default class ProductSummary extends Component {
  render() {
    // TODO: implement this component
    return (
      <div className="app-wrapper">
        {this.props.products.map(product => {
          return (
            <article className="item-wrapper">
              <>
                <img src={product.img}/>
                <ProductName names={product.name} />
                <ProductPrice
                  prices={product.price}
                />
                <BuyButton />
              </>
            </article>
          );
        })}
      </div>
    );
  }
}
