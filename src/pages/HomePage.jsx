import React, { Component } from 'react';
import { Container, Image, Divider } from 'semantic-ui-react';
// import TopNavigation from './TopNavigation';
import worldmap from '../images/worldmap.png';
import ProductGrid from '../components/ProductGrid';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          products: [],
        }
      }

    componentDidMount() {
        fetch('https://localhost:5001/api/product/getfive')
        .then(res => res.json())
        .then(json => {
          this.setState({
            products: json
          })
        });
    }

    render() {
        return (
            <React.Fragment>
                
                <Container>

                    {/* <TopNavigation /> */}

                </Container>

                <Divider hidden />
                <Image src={worldmap} centered />
                <Divider hidden />

                <Divider horizontal>Recommended</Divider>

                <Container>
                    <ProductGrid columns={5} products={this.state.products} />
                </Container>

                <Divider hidden />

                <Divider horizontal>Recently viewed</Divider>

                <Container>
                    <ProductGrid columns={5} products={this.state.products} />
                </Container>

                <Divider hidden />

            </React.Fragment>
        );
    }
}

export default HomePage;
