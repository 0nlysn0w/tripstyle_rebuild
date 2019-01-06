import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Sidebar, SidebarPusher } from 'semantic-ui-react';

import Header from './components/Header'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage'
import { history } from './helpers/'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Sidebar.Pushable>
          <SidebarPusher>
            <Header />

            <Switch>
              <Route exact path={'/'} component={HomePage} />
              <Route name="product" path={'/products/:id'} component={ProductDetailPage} />
              <Route name="order" path={'/order'} component={ProductDetailPage} />
            </Switch>

            <Footer />
          </SidebarPusher>
        </Sidebar.Pushable>
      </Router>
    );
  }
}

export default App;
