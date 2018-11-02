import React, { Component } from 'react';
import Musicians from './Musicians';
import AddMusician from './AddMusician';

class App extends Component {
  state = {
    musicians: [
      { name: 'Keith Richards', instrument: 'Guitar', band: 'The Rolling Stones', id: 1 },
      { name: 'Keith Moon', instrument: 'Drums', band: 'The Who', id: 2 },
      { name: 'Todd Rundgren', instrument: 'Vocals', band: 'Utopia', id: 3 },
      { name: 'Mick Jagger', instrument: 'Vocals', band: 'The Rolling Stones', id: 4 }
    ]
  };

  addMusician = (musician) => {
    // console.log(musician);
    musician.id = Math.random();
    let musicians = [...this.state.musicians, musician];
    this.setState({
      musicians: musicians
    })
  }

  deleteMusician = (id) => {
    let musicians = this.state.musicians.filter(musician => {
      return musician.id !== id
    });
    this.setState({
      musicians: musicians
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Changing Data in the React State Object</h2>
        <Musicians deleteMusician={this.deleteMusician} musicians={this.state.musicians} />
        <AddMusician addMusician={this.addMusician} />
      </div>
    );
  }
}

export default App;