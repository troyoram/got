import React, { Component } from 'react'
import Member from './Member.js'

class Family extends Component {

  render () {
    return (
      <div>
       <h2>Family: {this.props.name}</h2>
        <p>wikiSuffix: {this.props.wikiSuffix}</p>
        <p>{this.props.people.map(member => (
            <Member
              key={member.name}
              name={member.name}
              description={member.description}
              imageSuffix={member.imageSuffix}
              wikiSuffix={member.wikiSuffix}
            />
          ))}
        </p>
      </div>
    )
  }
}

export default Family
