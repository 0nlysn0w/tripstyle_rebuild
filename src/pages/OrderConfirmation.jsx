import React, { Component } from 'react';
import { Segment, Step, Icon, Button, List, Grid, Divider, Container, Form } from 'semantic-ui-react';
// import TopHeader from './components/Header';
// import Footer from './components/Footer';
import { connect } from 'react-redux'
// import { OrderSteps } from './OrderSteps';
class OrderConfirmation extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();

        console.log(this.props.products)
        fetch('https://localhost:5001/api/purchase', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                IsConfirmed: true,
                UserId: 3,
                orderDate: Date.now(),
                PurchaseLines: [{
                    ProductId: 1
                    // ProductId: this.props.products[0].product_ProductId,
                    // Quantity: 1
                }]

            })
        })
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { street, houseNumber, postalCode, firstName, lastName, email, city, country, bank } } = this.props;

        return (
            <div>
                {/* <TopHeader /> */}
                <Grid centered columns={2}>
                    <Grid.Column>
                        <Container>
                            {/* <OrderSteps /> */}
                            <div>
                                <Container textAlign='center'>
                                    <Step.Group widths={3}>
                                        <Step disabled>
                                            <Icon name='truck' />
                                            <Step.Content>
                                                <Step.Title>Shipping</Step.Title>
                                                <Step.Description>Choose your shipping options</Step.Description>
                                            </Step.Content>
                                        </Step>

                                        <Step disabled>
                                            <Icon name='payment' />
                                            <Step.Content>
                                                <Step.Title>Billing</Step.Title>
                                                <Step.Description>Enter billing information</Step.Description>
                                            </Step.Content>
                                        </Step>

                                        <Step active>
                                            <Icon name='info' />
                                            <Step.Content>
                                                <Step.Title>Confirm Order</Step.Title>
                                            </Step.Content>
                                        </Step>
                                    </Step.Group>

                                </Container>
                                <Container />
                            </div>
                            <h1 className="ui centered">Confirm your Details</h1>
                            <p>Click Confirm if the following details have been correctly entered</p>
                            <Segment>
                                <List divided relaxed>
                                    <List.Item>
                                        <List.Icon name='users' />
                                        <List.Content>
                                            <List.Header as='a'>First Name</List.Header>
                                            <List.Description>{firstName}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='users' />
                                        <List.Content>
                                            <List.Header as='a'>Last Name</List.Header>
                                            <List.Description>{lastName}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='mail' />
                                        <List.Content>
                                            <List.Header as='a'>E-mail</List.Header>
                                            <List.Description>{email}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='marker' />
                                        <List.Content>
                                            <List.Header as='a'>Location</List.Header>
                                            {/* <List.Description>{city}, {country}</List.Description> */}
                                            <List.List>
                                                <List.Item>
                                                    <List.Icon name='street view' />
                                                    <List.Content>
                                                        <List.Header as='a'>Street</List.Header>
                                                        <List.Description>{street}</List.Description>
                                                    </List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Icon name='home' />
                                                    <List.Content>
                                                        <List.Header as='a'>House number</List.Header>
                                                        <List.Description>{houseNumber}</List.Description>
                                                    </List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Icon name='mail square' />
                                                    <List.Content>
                                                        <List.Header as='a'>Postal code</List.Header>
                                                        <List.Description>{postalCode}</List.Description>
                                                    </List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Icon name='building' />
                                                    <List.Content>
                                                        <List.Header as='a'>City</List.Header>
                                                        <List.Description>{city}</List.Description>
                                                    </List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Icon name='map' />
                                                    <List.Content>
                                                        <List.Header as='a'>Country</List.Header>
                                                        <List.Description>{country}</List.Description>
                                                    </List.Content>
                                                </List.Item>
                                            </List.List>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='money' />
                                        <List.Content>
                                            <List.Header as='a'>Bank</List.Header>
                                            <List.Description>{bank}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Segment>
                            <Button onClick={this.back}>Back</Button>
                            <Button id="BeeBenson" onClick={this.saveAndContinue}>Confirm</Button>
                        </Container>

                    </Grid.Column>
                </Grid>
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                {/* <Footer /> */}
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         products: state.ItemCart.products
//     }
// }
export default 
// connect(mapStateToProps)
OrderConfirmation;