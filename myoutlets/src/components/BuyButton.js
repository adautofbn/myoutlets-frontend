import React, { Component } from "react";

class BuyButton extends Component {
  
  handleClick() {
    console.log("click comprar");
  }

  render() {
    return <button className="buy-btn" onClick={this.handleClick}>Comprar</button>;
  }
}

export default BuyButton;
