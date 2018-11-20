import React, { Component } from 'react';
import './App.css';
import gameOfThronesHouses from './houses.js';
import Family from './Family.js'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Game of Thrones</h1>
        {gameOfThronesHouses.map(family => (
          <Family
            key={family.name}
            name={family.name}
            wikiSuffix={family.wikiSuffix}
            people={family.people}/>
        ))}
      </div>
    );
  }
}

export default App;
