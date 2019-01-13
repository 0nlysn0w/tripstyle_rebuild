import React, { Component } from 'react'
import { Container, Image, Grid, GridRow, GridColumn, Divider, Header, Button, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer';
import TopHeader from '../User/AdminTopHeader';

class DeleteProduct extends Component {
  state = {
    ProductId: ''

  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
      return fetch('https://localhost:5001/api/product/' + this.state.ProductId, {
        method: 'delete'
      })
}
  render() {
    return (
      <div>
      <TopHeader />
      <Container>
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create new Product</h5>
          <div className="input-field">
            <label htmlFor="ProductId">ProductId</label>
            <input type="text" id='ProductId' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Delete</button>
          </div>
        </form>
        <Button basic compact secondary as={NavLink} to='/'>
            <p>Home</p>
        </Button>
      </div>
      </Container>
      <Footer />
  </div>
    )
  }
}


export default DeleteProduct