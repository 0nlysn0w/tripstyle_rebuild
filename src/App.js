import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Sidebar, SidebarPusher } from 'semantic-ui-react';

import Header from './components/Header'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Sidebar.Pushable>
          <SidebarPusher>
            <Header />

              <Switch>
                <Route exact path={'/'} component={HomePage} />
                <Route path={'/products/:id'} component={ProductDetailPage} />
              </Switch>

            <Footer />
          </SidebarPusher>
        </Sidebar.Pushable>
      </BrowserRouter>
    );
  }
}

export default App;
