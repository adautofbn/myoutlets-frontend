import React from "react";
import { Card } from "semantic-ui-react";

const checkPrice = price => {
  if (price === 0) {
    return (
      <>Indisponível</>
    );
  }
  return (
    <>R$ {price}</>
  );
}

const ProductPrice = ({ price }) => (
  <Card.Description>{checkPrice(price)}</Card.Description>
)

export default ProductPrice;