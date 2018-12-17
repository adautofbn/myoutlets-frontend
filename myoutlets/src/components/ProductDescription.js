import React from 'react'
import { Button, Icon, Item } from 'semantic-ui-react';
import ProductPrice from './ProductPrice';

const ProductDescription = ({ product, onClick }) => (
    <Item>
        <Item.Image size="tiny" src={product.img}/>

        <Item.Content verticalAlign="bottom">
            <Item.Header>{product.name}</Item.Header>
            <Item.Meta>
                <ProductPrice price={product.price}></ProductPrice>
            </Item.Meta>
            <Item.Description>{product.description}</Item.Description>
            <Item.Extra>
                <Button
                    floated="right"
                    inverted
                    color='red'
                    animated='vertical'
                    onClick={onClick}>
                    <Button.Content hidden>
                        <Icon name="x"></Icon>
                    </Button.Content>
                    <Button.Content visible>
                        Remover da bolsa
                </Button.Content>
                </Button>
            </Item.Extra>
        </Item.Content>
    </Item>
)

export default ProductDescription;