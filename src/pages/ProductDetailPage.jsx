import React, { Component } from 'react';
import { Container, Image, Grid, GridRow, GridColumn, Divider, Header, Button } from 'semantic-ui-react';
import * as cookie from '../helpers/cookie.js'
import TopHeader from '../components/Header';

class ProductDetailPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: '',
			isLoading: true
		}
	}

	componentDidMount() {
		this.fetchProduct()
	}

	componentDidUpdate() {
		if (this.props.match.params.id !== this.state.selectedId) {
			this.fetchProduct()
		}
	}

	fetchProduct() {
		this.setState({ selectedId: this.props.match.params.id })
		console.log('this.props.match.params.id', this.props.match.params.id)
		let url = 'https://localhost:5001/api/product/' + this.props.match.params.id
		console.log('url', url)
		fetch(url)
		.then(res => res.json())
		.then(json => {
			this.setState({
				isLoading: false,
				product: json,
				productId: json.productId
			})
			console.log('this.state', this.state)
		})
	}
	
	handleChange() {
		//cookie.set('ShoppingCart', 'huts')
		let c = cookie.get('ShoppingCart') || "[]";
		console.log('c', c)
		let cart = JSON.parse(c)
		cart.push(this.state.product)
		cookie.set('ShoppingCart', JSON.stringify(cart))
		console.log('cart', cart)
	}
	
	render() {
		if (this.state.isLoading) {
			return <div>Loading...</div>;
		}
		return (
			<React.Fragment>
				<TopHeader/>
				<Container>
					<Grid>
						<GridRow>
							<GridColumn computer='3'>
								<Container>
								</Container>
							</GridColumn>
							<GridColumn computer='8'>
								<Divider hidden />
								<Container textAlign='center'>
									<Image id="largeImage" src={this.state.product.image} size='big' />
								</Container>
							</GridColumn>
							<GridColumn width='5' verticalAlign="middle">
								<Divider hidden />
								<Header size='huge' textAlign='right' color='red'> €{this.state.product.price},- </Header>
								<Divider hidden />
								<Container textAlign='center'>
									<Header size='huge'>{this.state.product.name}</Header>
									<Divider hidden />
									Size:
                            <Container fluid>
										<Header size='huge'> {this.state.product.size} </Header>
									</Container>
									<Divider hidden />
									<Button onClick={this.handleChange.bind(this)} color='green' size='massive' icon='shopping cart' fluid>
									</Button>
								</Container>
							</GridColumn>
						</GridRow>
					</Grid>
				</Container>
				<Divider hidden />

				<Divider horizontal>Product information</Divider>
				<Container textAlign='center'>
					<Container>Name: {this.state.product.name}</Container>
					<Container>Fabric: {this.state.product.make}</Container>
					<Container>Color: {this.state.product.color}</Container>
					<Container>Region: {this.state.product.region}</Container>
					<Container>Season: {this.state.product.season}</Container>
					<Container>Category: {this.state.product.category.name}</Container>
				</Container>

			</React.Fragment>
		);
	}
}
export default ProductDetailPage;