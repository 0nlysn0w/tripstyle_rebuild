import React, { Component } from 'react';
import { Container, Image, Divider } from 'semantic-ui-react';
// import TopNavigation from './TopNavigation';
import worldmap from '../images/worldmap.png';
import ProductGrid from '../components/ProductGrid';

class HomePage extends Component {

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
                    <ProductGrid />
                </Container>

                <Divider hidden />

                <Divider horizontal>Recently viewed</Divider>

                <Container>
                    <ProductGrid />
                </Container>

                <Divider hidden />

            </React.Fragment>
        );
    }
}

export default HomePage;
