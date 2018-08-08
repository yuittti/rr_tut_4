import React, { Component } from 'react';
import Todos from './Todos';
import Goals from './Goals';

class App extends Component {
  render() {
    return (
      <div>
        <Todos />
        <Goals />
      </div>
    );
  }
}

export default App;
