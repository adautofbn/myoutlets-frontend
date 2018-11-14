import React, { Component, Fragment } from "react";

import Login from "./components/Login";
import Minicart from "./components/Minicart";
import mockProducts from "./data.json";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [...mockProducts]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    const input = event.target.value;
    this.setState(currentState => {
      return { products: mockProducts.filter(product => product.name.includes(input)) }
    });
  };

  render() {
    return (
      <Fragment>
        <div className="flex flex-wrap-s flex-nowrap-ns justify-around items-center ph5-ns ph3-s pv8-ns pv3-s bb b--muted-4 mb4">
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
