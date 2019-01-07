import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'

class CategoryFilter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			category: '',
			categories: [
				"coat",
				"shirt",
				"shirt",
				"coat",
				"skirt",
				"dress",
				"suit",
				"underwear",
				"swimsuit"
			]
		}
	}

	handleChange(value) {
		this.setState({ category: value }, () => this.props.changeCategory(this.state.category));
	}


	render() {
		return (
			<Form>
				<Form.Field>
					<b>Select the type</b>
				</Form.Field>

				{this.state.categories.map(category => (
					<Form.Field>
						<Radio
							label={category}
							name={category}
							value={category}
							checked={this.state.category === category}
							onChange={() => this.handleChange(category)}
						/>
					</Form.Field>

				))}

			</Form>
		)
	}
}

export default CategoryFilter;
