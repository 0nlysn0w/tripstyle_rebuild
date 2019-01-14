import React, { Component } from 'react'
import { Button, Form, Container, Popup, List, Table } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class FavoritePopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };

        this.deleteFavorite = this.deleteFavorite.bind(this)
        this.fetchFavorites = this.fetchFavorites.bind(this)

    }

    componentDidMount() {
        this.fetchFavorites()
    }
    
    componentDidUpdate() {
        // Infinite loop
        this.fetchFavorites()
    }

    deleteFavorite(productId) {
        fetch('https://localhost:5001/api/favorite/' + productId, {
            method: 'DELETE'     
        }, () => {
            console.log('deletecallback')
            this.fetchFavorites()
        })
    }

    fetchFavorites() {
        console.log('fetch')
        fetch('https://localhost:5001/api/favorite/')
        .then(res => res.json())
        .then(json => {
            this.setState({
                products: json
            }, () => console.log(this.state.products))
        });
    }

    render() {
        return (
            <Popup
                trigger={<Button icon>Favorites</Button>}
                on='click'
                hideOnScroll
            >
                <Table basic='very' celled collapsing>
                    <Table.Body>
                        {this.state.products.map(product => (
                            <Table.Row>
                                <Table.Cell><NavLink to={`../products/${product.product.productId}`}>{product.product.name}</NavLink></Table.Cell>
                                <Table.Cell><NavLink to={`../products/${product.product.productId}`}>{product.product.make}</NavLink></Table.Cell>
                                <Table.Cell>€{product.product.price}</Table.Cell>
                                <Table.Cell><Button basic onClick={() => this.deleteFavorite(product.product.productId)}>X</Button></Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Popup>
        )
    }
}

export default FavoritePopup;
