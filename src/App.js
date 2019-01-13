import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Sidebar, SidebarPusher } from 'semantic-ui-react';

import Header from './components/Header'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ProductsPage from './pages/ProductsPage'
import LoginForm from './components/LoginForm'
import OrderPage from './pages/OrderPage'

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
              <Route exact name="productDetail" path={'/products/:id'} component={ProductDetailPage} />
              <Route exact name="allProducts" path={'/products'} component={ProductsPage} />
              <Route name="order" path={'/order'} component={OrderPage} />
              <Route name="login" path={'/login'} component={LoginForm} />
              <Route name='user' path={'/user'} component={UserPage} />
            </Switch>

            <Footer />
          </SidebarPusher>
        </Sidebar.Pushable>
      </Router>
    );
  }
}

export default App;
