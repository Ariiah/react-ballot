import React, {Component} from 'react'
// import {Container, Row, Col} from 'react-grid-system'

export default class SeacrhBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  render() {
    return (
      <div>
        <div className='title'>Type your Address</div>
        <div className='search-bar'>
        <input
          onChange={e => console.log(e.target.value)}
          value={this.state.term} />
        </div>
      </div>
        )
  }

  // onInputChange(term) {
  //   this.setState({term})
  //   this.props.onSearchTermChange(term)
  // }
}
