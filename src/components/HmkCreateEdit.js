import React, {Component } from 'react';
import axios from 'axios';
import * as api from '../api';
//TODO url Back-End

class HmkCreateEdit extends Component {
  constructor(props) {
    super(props);
    var hmkObj = this.props.hmk || {};
    console.log(hmkObj);
    this.state = {
        _id: hmkObj._id,
        name: hmkObj.name || '',
        description: hmkObj.description || '',
        estimated_time: hmkObj.estimated_time || 0,
        limit_date: hmkObj.limit_date || new Date().getTime(),
        done_percentage: hmkObj.done_percentage || 0,
        importance: hmkObj.importance || 0
    }
    console.log(this.state);
  }

  deleteHmk = api.deleteHmk;

  setImportance = (e) => {
    if(e.target.checked) this.setState({[e.target.name]: Number(e.target.value)});
    console.log(this.state);
  };

  verifyPercentage = (e) => {
    if(Number(e.target.value) > Number(e.target.max)) e.target.value=e.target.max;
    else if(Number(e.target.value) < Number(e.target.min)) e.target.value=e.target.min;
    this.setState({[e.target.name]: Number(e.target.value)});
  };

  getAction = () => {
    if(this.props.hmk) return 'Edita';
    return 'Agrega';
  };

  addEditHmk = () => {
    this.props.addCreateHmk(Object.assign({}, this.state));
  };

  close = ()=> {
    this.props.close();
  };

  render() {
    return (
      //TODO estructura de un elemento tarea
      <div className={"hmk-edit-container "+this.props.show}>
        <div className="row">
        <div className="col-xs-12">
        <h3>{this.getAction()} una tarea</h3>
        </div>
        </div>
        <form>

          <div className="form-group row">
            <div className="col-xs-4">
              <label htmlFor="email">Nombre:</label>
            </div>
            <div className="col-xs-8">
              <input id="name" name="name" type="text" placeholder="ej. Ejercicios matemáticas" value={this.state.name}/>
            </div>
          </div>
          <div className="form-group row">
          <div className="col-xs-4">
            <label htmlFor="description">Descripción:</label>
            </div>
            <div className="col-xs-8">
            <textarea id="description" rows={5} name="description" type="text" placeholder="ej. Del libro x, capítulo 2, ejercicios 1 al 10 impares" value={this.state.description} />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-xs-4">
            <label htmlFor="estimated_time">Tiempo estimado:</label>
            </div>
            <div className="col-xs-8">
            <input id="estimated_time" name="estimated_time" type="time" vaule={this.state.estimated_time} />
            </div>
          </div>
          <div className="form-group row">
          <div className="col-xs-4">
            <label htmlFor="done_percentage">Progreso (%):</label>
            </div>
            <div className="col-xs-8">
            <input id="done_percentage" name="done_percentage" type="number" min="0" max="100" vaule={this.state.done_percentage*100}
            onChange={this.verifyPercentage}/>
            </div>
          </div>
          <div className="form-group row">
          <div className="col-xs-4">
            <label htmlFor="importance">Importancia:</label>
          </div>
          <div className="col-xs-8">
          <input id="importance" type="radio" name="importance" value="0" checked={this.state.importance===0}
                      onChange={this.setImportance} /> Baja
                      <input type="radio" name="importance" value="1" checked={this.state.importance===1}
                      onChange={this.setImportance}  /> Media
                      <input type="radio" name="importance" value="2" checked={this.state.importance===2}
                      onChange={this.setImportance}  /> Alta

          </div>
          </div>
          <div className="form-group row">
            <div className="col-xs-6">
            </div>
            <div className="col-xs-6">
            <button className="btn btn-default hmk-form-btn" onClick={this.close}>Cancelar</button>
            <button className="btn btn-primary hmk-form-btn" onClick={this.addEditHmk}>Aceptar</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default HmkCreateEdit;