import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from "axios"

class ProductForm extends Component {
    state = {
        name: "",
        quant: "",
        type: "",
        price: "",
        img: "",
        description: ""
    }

    nameChange = event => {
        this.setState({ name: event.target.value });
    }
    quantChange = event => {
        this.setState({ quant: event.target.value });
    }
    typeChange = event => {
        this.setState({ type: event.target.value });
    }
    priceChange = event => {
        this.setState({ price: event.target.value });
    }
    imgChange = event => {
        this.setState({ img: event.target.value });
    }
    descChange = event => {
        this.setState({ description: event.target.value });
    }


    handleSubmit = event => {
        event.preventDefault();

        const product = {
            name: this.state.name,
            quant: this.state.quant,
            type: this.state.type,
            price: this.state.price,
            img: this.state.img,
            description: this.state.description
        };

        axios.post("http://localhost:8080/produto/", product);
        this.props.close();
        window.location.reload();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Field required>
                    <label>Nome</label>
                    <input required placeholder="Nome do Produto" name="name" onChange={this.nameChange} />
                </Form.Field>
                <Form.Field>
                    <label>Quantidade</label>
                    <input type="number" min="0" placeholder="Quantidade do Produto" name="quant" onChange={this.quantChange} />
                </Form.Field>
                <Form.Field required>
                    <label>Tipo</label>
                    <input required list="types" placeholder="Categoria do Produto" name="type" onChange={this.typeChange} />
                    <datalist id="types">
                        <option value="Camisa"></option>
                        <option value="Calca"></option>
                        <option value="Calcado"></option>
                        <option value="Acessorio"></option>
                        <option value="Short"></option>
                        <option value="Saia"></option>
                        <option value="Bermuda"></option>
                    </datalist>
                </Form.Field>
                <Form.Field required>
                    <label>Preço</label>
                    <input required type="number" min="0" placeholder="Valor (R$) do Produto" name="price" onChange={this.priceChange} />
                </Form.Field>
                <Form.Field>
                    <label>Imagem</label>
                    <input placeholder="URL da foto do produto" name="img" onChange={this.imgChange} />
                </Form.Field>
                <Form.Field required>
                    <label>Descrição</label>
                    <input required placeholder="Descrição do produto" name="description" onChange={this.descChange} />
                </Form.Field>
                <Button.Group fluid>
                    <Button positive type="submit" content='Adicionar'></Button>
                    <Button negative content='Cancelar' onClick={this.props.close}></Button>
                </Button.Group>
            </Form>
        );
    }

}
export default ProductForm;