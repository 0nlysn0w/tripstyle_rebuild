import React, { Component } from 'react';
import { Menu, MenuItem, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar'
import LoginForm from './LoginForm'
import ShoppingCart from './ShoppingCart'
import { connect } from 'react-redux';
import { userActions } from '../redux/actions'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        let user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            this.props.dispatch(userActions.remember(user));
        }
    }

    logout = () => {
        this.props.dispatch(userActions.logout())
        // window.location.reload(true)
    }

    render() {
        return (
            <Menu borderless size='massive' color='grey' inverted>
                <MenuItem>
                    <Button basic compact secondary as={NavLink} to='/'>
                        <h1>TripStyle</h1>
                    </Button>
                </MenuItem>
                <MenuItem position='right'>
                    <SearchBar></SearchBar>
                </MenuItem>
                {this.props.user ? 
                <MenuItem>
                    <Button onClick={this.logout}>Logout</Button>
                </MenuItem> 
                : <MenuItem className="Login" position='right'>

                        <LoginForm />

                    </MenuItem>}






                <MenuItem>
                    <ShoppingCart />
                </MenuItem>
            </Menu>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.authentication.user
    }
}

export default connect(mapStateToProps)(Header);