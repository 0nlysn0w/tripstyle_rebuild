import React, { Component } from 'react';
import { Container, Image, Grid, GridRow, GridColumn, Divider, Header, Button } from 'semantic-ui-react';

class ProductDetailPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: null,
			isLoading: true
		}
	}

	componentDidMount() {
		console.log('this.props.match.params.id', this.props.match.params.id)
		let url = 'https://localhost:5001/api/product/' + this.props.match.params.id
		console.log('url', url)
		fetch(url)
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoading: false,
					product: json
				})
				console.log('this.state.product', this.state.product)
			})
	}

	render() {
		if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
		return (
			<React.Fragment>
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
									<Button onClick={this.handleChange} color='green' size='massive' icon='shopping cart' fluid>
									</Button>
								</Container>
							</GridColumn>
						</GridRow>
					</Grid>
				</Container>
				<Divider hidden />

				<Divider horizontal>Product information</Divider>
				<Container textAlign='center'>
					<Container> Name: {this.state.product.name}</Container>
					<Container>Fabric: {this.state.product.make}</Container>
					<Container> Color: {this.state.product.color}</Container>
					<Container> Region: {this.state.product.region}</Container>
					<Container>Season: {this.state.product.season}</Container>
					<Container> Category: {this.state.product.category.name}</Container>
				</Container>

			</React.Fragment>
		);
	}
}
export default ProductDetailPage;