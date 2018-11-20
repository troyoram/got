import React, { Component } from 'react'

class Member extends Component {

  render () {
    return (
      <div>
        <p>
        <ul>
        <h3>Member: {this.props.name}</h3>
        <li>Desc: {this.props.description}</li>
        <li>Img: {this.props.imageSuffix}</li>
        <li>wiki: {this.props.wikiSuffix}</li>
        </ul>
        </p>
      </div>
    )
  }
}

export default Member
