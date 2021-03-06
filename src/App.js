import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import BuildControls from './components/Burger/BuildControls/BuildControls';
class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
          <Checkout />
          {/* <BuildControls /> */}
        </Layout>
      </div>
    );
  }
}

export default App;
