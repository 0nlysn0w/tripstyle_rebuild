import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'

class RegionFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      region: ''
    }
  }

  handleChange(value) {
    this.setState({ region: value }, () => this.props.changeRegion(this.state.region));
  }

  componentWillReceiveProps() {
    this.setState({ region: this.props.current })
  }


  render() {
    return (
      <Form>
        <Form.Field>
          <b>Select the region</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Africa'
            name='region'
            value='Africa'
            checked={this.state.region === 'Africa'}
            onChange={() => this.handleChange('Africa')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Asia'
            name='region'
            value='Asia'
            checked={this.state.region === 'Asia'}
            onChange={() => this.handleChange('Asia')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Europe'
            name='region'
            value='Europe'
            checked={this.state.region === 'Europe'}
            onChange={() => this.handleChange('Europe')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='North America'
            name='region'
            value='North America'
            checked={this.state.region === 'North America'}
            onChange={() => this.handleChange('North America')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='South America'
            name='region'
            value='South America'
            checked={this.state.region === 'South America'}
            onChange={() => this.handleChange('South America')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Oceania'
            name='region'
            value='Ocania'
            checked={this.state.region === 'Ocania'}
            onChange={() => this.handleChange('Ocania')}
          />
        </Form.Field>
      </Form>
    )
  }

}

export default RegionFilter;
