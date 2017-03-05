import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import * as api from '../api';
//TODO url Back-End

class Hmk extends Component {

  render() {

    console.log('Hmk');
    console.log(this);
    var limit = this.props.hmk.limit_date,
    date = (new Date(limit)).toString();

    return (
      <div className="hmk-container">
        <div className="row">
          <div className="col-xs-6">
            <h3>{this.props.hmk.name}</h3>
            <p>{this.props.hmk.description}</p>
          </div>
          <div className="col-xs-6">

          <h3>{date}</h3>
            <p>{this.props.hmk.done_percentage}</p>
          </div>
        </div>
        <div className="row">

        </div>
      </div>
    );
  }
}
/*
Hmk.propTypes = {
  _id: PropTypes.string,
  name: "Tarea prueba post2",
  description: "Esta es otra tarea de prueba",
  estimated_time: 36000,
  limit_date: 1520337600000,
  done_percentage: 0,
  importance: PropTypes.number,
  userId: PropTypes.object,
  deleteHmk: PropTypes.func,
  editHmk: PropTypes.func
};
*/
export default Hmk;
