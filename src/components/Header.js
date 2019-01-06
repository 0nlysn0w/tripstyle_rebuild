import React, { Component } from 'react';
import { Menu, MenuItem, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar'
import LoginForm from './LoginForm'
import ShoppingCart from './ShoppingCart'
    
class Header extends Component {
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
                <MenuItem className="Login" position='right'>

                    <LoginForm />

                </MenuItem>
                <MenuItem>
                    <ShoppingCart />
                </MenuItem>
            </Menu>
        );
    }
}

export default Header;