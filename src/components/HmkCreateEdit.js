import React, {Component } from 'react';
import axios from 'axios';
import * as api from '../api';
//TODO url Back-End

class Hmk extends Component {
  constructor(props) {
    super(props);
  }

  deleteHmk = api.deleteHmk;

  render() {
    return (
      //TODO estructura de un elemento tarea
      <div className="hmk-container">
        <div className="row">
          <div className="col-xs-6">
            <h3>{this.props.hmk.name}</h3>
            <p>{this.props.hmk.description}</p>
          </div>
          <div className="col-xs-6">
            <h3>{new Date(this.props.hmk.limit_date)}</h3>
            <p>{this.props.hmk.description}</p>
          </div>
        </div>
        <div className="row">

        </div>
      </div>
    );
  }
}