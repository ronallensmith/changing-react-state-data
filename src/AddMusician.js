import React, { Component } from 'react';

class AddMusician extends Component {
  state = {
    name: null,
    instrument: null,
    band: null
};

  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
};
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addMusician(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleOnChange} />
          <label htmlFor="instrument">Instrument:</label>
          <input type="text" id="instrument" onChange={this.handleOnChange} />
          <label htmlFor="band">Band:</label>
          <input type="text" id="band" onChange={this.handleOnChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddMusician;