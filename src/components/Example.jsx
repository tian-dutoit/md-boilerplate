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
    this.props.dispatch(exampleAction())
  }

  render() {
    <div>
      <div className='example-container'>Example is here</div>
      <button>Toggle Example</button>
      <div>{this.props.example}</div>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    example: state.example,
  }
}

export default connect(mapStateToProps)(Example)