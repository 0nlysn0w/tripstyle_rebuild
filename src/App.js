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
import RegistrationPage from './pages/RegistrationPage'

import { history } from './helpers/'

import AdminHeader from './components/admin/AdminHeader'
import AdminProductPage from './components/admin/AdminProductPage'
import AdminUser from './components/admin/AdminUser'
import AdminUserPage from './components/admin/AdminUserPage'
import CreateProduct from './components/admin/CreateProduct';
import DeleteProduct from './components/admin/DeleteProduct';
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
              <Route name="order" path={'/order'} component={ProductDetailPage} />
              <Route name="login" path={'/login'} component={LoginForm} />
              <Route name='user' path={'/user'} component={UserPage} />
              <Route name='register' path={'/register'} component={RegistrationPage} />
              <Route path={'/admin/admin'} component={AdminHeader}/>
              <Route path={'/admin/user'} component={AdminUserPage}/>
              <Route exact path={'/admin/product/:productid'} component={AdminProductPage}/>
              <Route exact path={'/admin/userid/:userid'} component={AdminUser}/>
              <Route path={'/admin/create'}component={CreateProduct}/>
              <Route path={'/admin/delete'}component={DeleteProduct}/>
            </Switch>

            <Footer />
          </SidebarPusher>
        </Sidebar.Pushable>
      </Router>
    );
  }
}

export default App;
