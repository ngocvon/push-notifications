import React, { Component } from 'react';
import { askPermissionUser } from './push-notification';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
    };
  }

  handleToken = async () => {
    const token = await askPermissionUser();
    this.setState({ token });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p><strong>{this.state.token}</strong></p>
          <button onClick={this.handleToken}>Click here to receive notifications!</button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
