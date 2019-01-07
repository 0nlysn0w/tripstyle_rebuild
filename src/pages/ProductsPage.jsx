import React, { Component } from 'react'
import { Grid, Container } from 'semantic-ui-react'

import ProductGrid from '../components/ProductGrid'
import FilterSection from '../components/filters/FilterSection'

class ProductsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			name: '',
			region: '',
			color: '',
			category: '',
			orderBy: '',
		}
	}

	changeRegion(region) {
		this.setState({ region: region }, () => {
			console.log('this.state.region', this.state.region)
			this.componentDidMount();
		})

	}

	componentDidMount() {
		let url = 'https://localhost:5001/api/product/filter/?name=' + this.state.name + '&region=' + this.state.region
		console.log('url', url)
		fetch(url)
			.then(res => res.json())
			.then(json => {
				this.setState({
					products: json
				})
			});
	}

	render() {
		return (
			<Container>
				<Grid>
					<Grid.Column width={3}>
						{/* Filter selection */}
						<FilterSection changeRegion={(region) => this.changeRegion(region)} />
					</Grid.Column>

					<Grid.Column width={13}>
						{/* Filtered product grid */}
						<ProductGrid columns={4} products={this.state.products} />
					</Grid.Column>

				</Grid>
			</Container>

		)
	}

}

export default ProductsPage;
