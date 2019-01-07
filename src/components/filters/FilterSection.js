import React, { Component } from 'react'
import { Form, Divider } from 'semantic-ui-react'

import RegionFilter from './RegionFilter';
import CategoryFilter from './CategoryFilter'
import ColorFilter from './ColorFilter';
// import FilterDropdown from './FilterDropdown'
// import Filterbutton from './Filterbutton'

class FilterSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: '', 
            products: '', 
            isFiltered: '', 
            category: '', 
            color: ''
        }
    }

    changeColor(color) {
        this.setState({ color }, () => this.props.receiveFilter(this.state))
    }

    changeCategory(category) {
        this.setState({ category }, () => this.props.receiveFilter(this.state))
    }

    // ChangeFiler(isFiltered) {
    //     this.setState({ isFiltered })
    // }

    changeRegion(region) {
        this.setState({ region }, () => this.props.receiveFilter(this.state))
    }

    // ChangeProducts(products) {
    //     this.setState({ products })
    // }

    render() {
        return (

            <Form>
                {/* <FilterDropdown />
                <Divider hidden /> */}

                <ColorFilter changeColor={(color) => this.changeColor(color)} />
                <Divider hidden />

                {/* FOCUS ON THIS ONE ONLY */}
                <RegionFilter changeRegion={(region) => this.changeRegion(region)} />
                <Divider section hidden />

                <CategoryFilter changeCategory={(category) => this.changeCategory(category)} />
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