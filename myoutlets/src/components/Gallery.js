import React from "react";
import { Card } from "semantic-ui-react";
import ProductSummary from "./ProductSummary";

const Gallery = props => (
  <Card.Group centered>
    {props.products.map(product => {
      return (
        <ProductSummary product={product} />
      )
    })}
  </Card.Group>
)

export default Gallery;