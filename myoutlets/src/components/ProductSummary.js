import React from 'react'
import { Card, Image } from 'semantic-ui-react';
import BuyButton from './BuyButton';
import ProductPrice from './ProductPrice';

const SearchBar = ({ product }) => (
    <Card>
        <Image centered size="medium" src={product.img} />
        <Card.Content>
            <Card.Header>{product.name}</Card.Header>
            <Card.Meta>
                <span className="date">{product.type}</span>
            </Card.Meta>
            <ProductPrice price={product.price} />
        </Card.Content>
        <Card.Content extra>
            <BuyButton />
        </Card.Content>
    </Card>
)

export default SearchBar;