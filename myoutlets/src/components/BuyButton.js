import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const handleClick = () => {
  console.log("click comprar");
}

const BuyButton = () => (
  <div>
    <Button 
      fluid 
      color='orange' 
      animated='vertical'
      onClick={handleClick}>
      <Button.Content hidden>Adicionar ao carrinho</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
  </div>
)

export default BuyButton;