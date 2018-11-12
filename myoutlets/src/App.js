import React, { Component, Fragment } from "react";

import Login from "./Login";
import Minicart from "./Minicart";
import products from "./data.json";
import Gallery from "./components/Gallery";

let filteredProducts = products;

class App extends Component {

  handleChange = event => {
    console.log(event.target.value);
  };

  render() {
    return (
      <Fragment>
        <div className="flex flex-wrap-s flex-nowrap-ns justify-around items-center ph5-ns ph3-s pv8-ns pv3-s bb b--muted-4 mb4">
          <input
            className="ba b--muted-4 bw1 br5 pv4 ph6 f5 c-on-base bg-base order-2-s order-1-ns w-100-s w5-ns"
            placeholder="Buscar"
            onChange={this.handleChange}
          />

          <div className="c-muted-2 order-1-s order-2-ns ml-auto ml0-m mv3-s mv0-ns">
            <div className="mh5 dib pointer">
              <Login />
            </div>
            <div className="mh5 dib pointer">
              <Minicart />
            </div>
          </div>
        </div>
        <Gallery products={filteredProducts} />
      </Fragment>
    );
  }
}

export default App;
