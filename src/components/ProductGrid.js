import React, { Component } from 'react'
import { Grid, Image, Card, CardContent, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class ProductGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoaded: false,
      isFiltered: false
    }
  }

  componentDidMount() {
    fetch('https://localhost:5001/api/product/getfive')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          products: json
        })
      });
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <React.Fragment>
        <Grid>
          <Grid.Row columns={5} centered relaxed>
            {this.state.products.map(product => (
              <Grid.Column>
                <Link to={'/' + product.productId}>
                  <Card href='#card-example-link-card' color='teal'>
                    <Image src={product.image} />
                    <CardContent>
                      <Card.Header>
                        <Icon name='euro sign' />{product.price}
                      </Card.Header>

                      <Card.Meta>{product.color}</Card.Meta>
                      <Card.Meta>{product.name}</Card.Meta>

                      <Card.Description>{product.region}</Card.Description>
                    </CardContent>
                  </Card>
                </Link>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )

  }
}

export default ProductGrid;