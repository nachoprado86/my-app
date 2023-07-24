import React, { Component } from 'react';

class ListaDeTareas extends Component {
  state = {
    tareas: [],
    nuevaTarea: ''
  };

  handleChange = (event) => {
    this.setState({ nuevaTarea: event.target.value });
  };

  agregarTarea = () => {
    if (this.state.nuevaTarea.trim() !== '') {
      this.setState((prevState) => ({
        tareas: [...prevState.tareas, this.state.nuevaTarea],
        nuevaTarea: ''
      }));
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.nuevaTarea}
          onChange={this.handleChange}
        />
        <button onClick={this.agregarTarea}>Agregar Tarea</button>
        <ul>
          {this.state.tareas.map((tarea, index) => (
            <li key={index}>{tarea}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListaDeTareas;
