import React, { Component, Fragment } from "react";
import Login from "./components/Login";
import Minicart from "./components/Minicart";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import Logo from "./components/Logo";
import axios from 'axios';

let originalProducts = [];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [...originalProducts]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    axios.get('http://localhost:3000/produto')
    .then(res => {
      originalProducts = res.data;
      const products = originalProducts;
      this.setState({products})
    })
  }

  handleChange = event => {
    const input = event.target.value.toLowerCase();
    this.setState(currentState => {
      return { products: originalProducts.filter(product => product.name.includes(input)) }
    });
  };

  render() {
    return (
      <Fragment>
        <div className="flex flex-wrap-s flex-nowrap-ns justify-around items-center ph5-ns ph3-s pv8-ns pv3-s bb b--muted-4 mb4">
          <Logo />
          <SearchBar handleChange={this.handleChange} />
          <div className="c-muted-2 order-1-s order-2-ns ml-auto ml0-m mv3-s mv0-ns">
            <div className="mh5 dib pointer">
              <Login />
            </div>
            <div className="mh5 dib pointer">
              <Minicart />
            </div>
          </div>
        </div>
        <Gallery products={this.state.products} />
      </Fragment>
    );
  }
}

export default App;
