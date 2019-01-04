import React, { Component } from 'react';
import Header from './components/header';
import './styles/1-base/0-base-dir.sass';
import './styles/2-layouts/0-layouts-dir.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
