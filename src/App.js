import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Sidebar, SidebarPusher } from 'semantic-ui-react';

import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Sidebar.Pushable>
          <SidebarPusher>
            <Header />

            <Footer />
          </SidebarPusher>
        </Sidebar.Pushable>
      </BrowserRouter>
    );
  }
}

export default App;
