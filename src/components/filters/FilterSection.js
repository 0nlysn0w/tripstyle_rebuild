import React, { Component } from 'react'
import { Form, Divider } from 'semantic-ui-react'

import RegionFilter from './RegionFilter';
// import ColorButton from './ColorButton';
// import FilterDropdown from './FilterDropdown'
// import Filterbutton from './Filterbutton'

class FilterSection extends Component {

    state = { region: undefined, products: undefined, isFiltered: undefined, category: undefined, color: undefined }
    // ChangeColor(color) {
    //     this.setState({ color })
    // }

    // ChangeCategory(category) {
    //     this.setState({ category })
    // }

    // ChangeFiler(isFiltered) {
    //     this.setState({ isFiltered })
    // }

    changeRegion(region) {
        this.setState({ region }, () => this.props.changeRegion(region))
    }

    // ChangeProducts(products) {
    //     this.setState({ products })
    // }

    render() {
        return (

            <Form>
                {/* <FilterDropdown />
                <Divider hidden />

                <ColorButton ChangeColor={(color) => this.ChangeColor(color)} />
                <Divider hidden /> */}

                {/* FOCUS ON THIS ONE ONLY */}
                <RegionFilter changeRegion={(region) => this.changeRegion(region)} />
                <Divider section hidden />
{/* 
                <Filterbutton region={this.state.region} category={this.state.category} color={this.state.color}
                    changeProducts={(products) => this.ChangeProducts(products)}
                    changeFilter={(isFiltered) => this.ChangeFilter(isFiltered)} /> */}
            </Form>

        )
    }
}

export default FilterSection;