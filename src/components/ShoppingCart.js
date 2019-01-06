import React, { Component } from 'react'
import { Sidebar, Menu, Icon, Divider, Button, Container, Header, Segment, Image, Grid } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


class ShoppingCart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			products: []
		}
	}

	handleHideClick = () => this.setState({ visible: false });
	handleShowClick = () => this.setState({ visible: true, products: this.state.products });
	handleSidebarHide = () => this.setState({ visible: false });

	render() {
		const { visible } = this.state
		return (
			<React.Fragment>
				<Sidebar
					as={Menu}
					animation='push'
					onHide={this.handleSidebarHide}
					vertical
					inverted
					color='grey'
					visible={visible}
					direction='right'
					width='wide'>

					<Segment inverted color='grey' textAlign='center'>
					<NavLink to='/order' as={Button}>

						<Button fluid color='green' size='huge'>
							<Icon name='in cart' size='large' />
							Order
              </Button>
					</NavLink>
					</Segment>

					<Divider />
					<Container textAlign='center'>
						{this.state.products.map(item => (
							<Segment inverted color='grey'>
								<Header as='h3' floated='left'>{item.product_name}</Header>
								<Header as='h2' floated='right'> €{item.product_price},-</Header>
								<Menu.Item>
									<Grid.Column>
										<Image as={Container} src={item.product_image} size='medium' />
									</Grid.Column>
								</Menu.Item>
							</Segment>
						))}
						<Divider />

					</Container>
					<Divider />
				</Sidebar>

				<Button circular size='huge' icon='shopping cart' color='red' onClick={this.handleShowClick}>
				</Button>


			</React.Fragment>
		)
	}
}

export default ShoppingCart;
