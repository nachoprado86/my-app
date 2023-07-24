import React, { Component } from 'react';

class Contador extends Component {
  state = {
    contador: 0
  };

  aumentarContador = () => {
    this.setState((prevState) => ({
      contador: prevState.contador + 1
    }));
  };

  reiniciarContador = () => {
    this.setState({
      contador: 0
    });
  };

  render() {
    return (
      <div>
        <p>CONTADOR: {this.state.contador}</p>
        <button onClick={this.aumentarContador}>Aumentar</button>
        <button onClick={this.reiniciarContador}>Reiniciar</button>
      </div>
    );
  }
}

export default Contador;
