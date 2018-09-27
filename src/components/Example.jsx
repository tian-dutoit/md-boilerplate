import React from 'react'
import { connect } from 'react-redux'

import { exampleAction } from '../actions/example'

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('pressing')
    this.props.dispatch(exampleAction())
  }

  render() {
    console.log(this.props.example.toString())
    return(
    <div>
      <div className='example-container'></div>
      <button onClick={this.handleClick}>Toggle Example</button>
      <div>Example: {this.props.example.toString()}</div>
    </div>
    )}
}

const mapStateToProps = (state) => {
  return {
    example: state.example,
  }
}

export default connect(mapStateToProps)(Example)