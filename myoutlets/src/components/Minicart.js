import React, { Component } from 'react'
import { Button, Modal, Icon, Item } from 'semantic-ui-react'
import Axios from 'axios'
import _ from 'lodash'
import ProductDescription from './ProductDescription';

class ModalExampleDimmer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      bag: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    Axios.get('http://localhost:8080/bolsa')
      .then(res => {
        const bag = res.data;
        this.setState({ bag })
      })
  }

  handleClick = (event, item) => {
    event.preventDefault()
    const body = {
      "id": item
    }
    Axios.delete('http://localhost:8080/bolsa', { data: body })
    this.close()
  }

  show = dimmer => () => {
    this.setState({ dimmer, open: true })
    this.componentDidMount()
  }
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    let content;

    if (this.state.bag.length === 0) {
      content = <p>Sua bolsa está vazia</p>
    } else {
      content = _.times(this.state.bag.length, item => {
        return <ProductDescription product={this.state.bag[item]} onClick={(e) => this.handleClick(e, this.state.bag[item].id)}></ProductDescription>
      })
    }

    return (
      <div>
        <Button onClick={this.show('blurring')} inverted color="orange" icon="cart"></Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Sua bolsa</Modal.Header>
          <Modal.Content scrolling>
            <Modal.Description>
              <Item.Group centered>
                {content}
              </Item.Group>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="orange" onClick={this.close}>
              Finalizar <Icon name='chevron right' />
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalExampleDimmer