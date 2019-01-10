import React, { Component } from 'react'
import { Button, Form, Popup } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { userActions } from '../redux/actions';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			submitted: false,
			isOpen: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

    handleSubmit(e) {
		console.log(this.state);
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
		   let v = dispatch(userActions.login(email, password));
		   console.log(v)
        }
	}
	
	handleOpen() {
		this.setState({isOpen: true})
	}

	render() {
		const { loggingIn, isOpen } = this.props;
		return (
			<Popup wide trigger={<Button icon='user' color='blue' circular onClick={this.handleOpen.bind(this)} />} open={isOpen} on='click'>
				{<Form onSubmit={this.handleSubmit}>
					<Form.Field>
						<label>Email</label>
						<input name="email" type="text" placeholder='Email'  onChange={this.handleChange} />
					</Form.Field>
					<Form.Field>
						<label>Password</label>
						<input name="password" type="password" placeholder='Password'  onChange={this.handleChange} />
					</Form.Field>

					<Button positive fluid type="submit">Login</Button>
					{loggingIn &&
						<img alt="loading.." src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
					}

					<NavLink to='/register'>Don't have an account yet? register here.</NavLink>
				</Form>}
			</Popup>)
	}
}

function mapStateToProps(state) {
	const { loggedIn, isOpen } = state.authentication;
	return {
		loggedIn,
		isOpen
	}
}

export default connect(mapStateToProps)(LoginForm);
