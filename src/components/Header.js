import React, { Component } from 'react';
import { Menu, MenuItem, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// import SearchExampleStandard from './SearchBar';
// import ShoppingCart from './ShoppingCart';
    
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
                    {/* <SearchExampleStandard></SearchExampleStandard> */}
                </MenuItem>
                <MenuItem className="Login" position='right'>

                    {/* button */}

                </MenuItem>
                <MenuItem>
                    {/* <ShoppingCart /> */}
                </MenuItem>
            </Menu>
        );
    }
}

export default Header;