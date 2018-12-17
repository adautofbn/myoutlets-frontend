import React from 'react'
import { Button, Icon, Popup } from 'semantic-ui-react'
import Axios from 'axios'

const handleClick = (event,product) => {
  event.preventDefault();
  Axios.post("http://localhost:8080/bolsa/", product);
}

const trigger = (product) => (
  <div>
    <Button 
      fluid 
      color='orange' 
      animated='vertical'
      onClick={(e) => handleClick(e,product)}>
      <Button.Content hidden>Adicionar ao carrinho</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
  </div>
)

const BuyButton = ({product}) => (
  <Popup
    trigger={trigger(product)}
    on="click"
    position="top right"
    content="Produto adicionado"
  />
)

export default BuyButton;