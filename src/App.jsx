import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  handleChange = (evt) => {
    this.setState({ name: evt.target.value });
  };

  render() {
    const { name } = this.state;

    return (
      <div>
        <h1>My name is: {name}</h1>
        <input
          type="text"
          value={name}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
