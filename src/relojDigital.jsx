import React, { Component } from 'react';

class RelojDigital extends Component {
  state = {
    hora: new Date().toLocaleTimeString()
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.actualizarHora(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  actualizarHora() {
    this.setState({
      hora: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (
      <div>
        <p>Hora actual: {this.state.hora}</p>
      </div>
    );
  }
}

export default RelojDigital;
