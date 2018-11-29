import React, { Component } from 'react'
import { Button, Modal, Icon} from 'semantic-ui-react'
import ProductForm from './ProductForm'

class AddProduct extends Component {

  constructor(props){
    super(props);
    this.state = {
      open: false
    }
    this.close = this.close.bind(this);
  }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Button 
        animated 
        inverted 
        color='orange'
        onClick={this.show('blurring')}>
          <Button.Content visible>Adicionar Produto</Button.Content>
          <Button.Content hidden>
            <Icon name='add' />
          </Button.Content>
        </Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Novo produto</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <ProductForm close={this.close}></ProductForm>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default AddProduct