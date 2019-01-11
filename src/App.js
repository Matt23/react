import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';

import { tareas } from './tareas.json'

import TareaForm from './components/TareaForm';

console.log(tareas);

class App extends Component {

  constructor() {
    super();
    this.state = {
      tareas
    };
    this.handleAddTarea = this.handleAddTarea.bind(this);
  }

  handleAddTarea(tarea) {
    this.setState({
      tareas: [...this.state.tareas, tarea]
    })
  }

  borrarTarea(indiceTarea) {
    this.setState({
      tareas: this.state.tareas.filter((e,i) => {
        return i != indiceTarea ;
      } )
    })
  }

  render() {

    const tareas = this.state.tareas.map((tarea,i) => {
      return (
        <div className="col-md-4">
        <div className="card">
          <div className="card-header text-dark">
            <h3>{tarea.title}</h3>
            <span className="badge badge-pill badge-danger ml-2">
            {tarea.prioridad}
            </span>
          </div>
          <div className='card-body text-dark' >
            <p>{tarea.description}</p>
            <p><mark>{tarea.responsable}</mark></p>
          </div>
          <div className="CardFooter">
            <button className="btn btn-danger" onClick={this.borrarTarea.bind(this, i)}>
            Borrar
            </button>
          </div>
        </div>
        </div> 
      )
    })

    return (
      <div className="App">
        <header className="App-header">
        <div>
        <Navigation title="Tareas"/>
        <span className="badge badge-pill badge-light ml-2">
        { this.state.tareas.length }
        </span>
        <Navigation title="" />

        <TareaForm onAddTarea={this.handleAddTarea} />

        <div className="container">
        <div className="row mt-4">
        {tareas}
        </div>
        </div>

        </div>
        </header>
      </div>
    );
  }
}

export default App;
