import React, { Component } from 'react';
import { Container, Grid, Form, Divider } from 'semantic-ui-react'

class UserPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: [],
			userId: '',
			isLoaded: false
		}
	}

	componentDidMount() {
        let user = JSON.parse(localStorage.getItem("user"));
		console.log('user', user)

		this.setState({
			userId: user.userId
		}, () => this.fetchUser(this.state.userId))
	}

	fetchUser(userId) {

		if (userId === null) {
			return
		}
		let url = 'https://localhost:5001/api/user/' + userId
		console.log('url', url)
		fetch(url)
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					user: json
				})
			});
	}

	render() {
		var { isLoaded, user } = this.state;
		if (!isLoaded) {
			return <div>Loading...</div>;
		}
		if (user && (user.length = 1)) {
			console.log('this.state.user', this.state.user)
			return (
				<div>
					<Grid centered columns={2}>
						<Grid.Column>
							<Container>
								<h1>My customer information:</h1>
								<Form>
									<Container>
										<Form.Input label='First name:' placeholder={user.firstname} readOnly />
										<Form.Input label='Last name:' placeholder={user.lastname} readOnly />
										<Form.Input label='Email address:' placeholder={user.email} readOnly />
										<Form.Input label='Phone number:' placeholder={user.phonenumber} readOnly />
										<Form.Input label='Address:' placeholder={user.street} readOnly />
										<Form.Input label='City:' placeholder={user.city} readOnly />
										<Form.Input label='Country:' placeholder={user.country} readOnly />

										{/* <Form.Checkbox label='I agree to take part in the "human centipide project"' /> */}
									</Container>
									<Divider hidden fitted />
								</Form>
							</Container>
						</Grid.Column>

					</Grid>

					<Divider horizontal>  My orders </Divider>

				</div>
			);
		}
	}
}

export default UserPage;
