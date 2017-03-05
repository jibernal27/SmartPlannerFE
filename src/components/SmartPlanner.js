import React, {Component} from 'react';
import axios from 'axios';
import HmkList from './HmkList';
import UserAdmin from './UserAdmin';
import * as api from '../api';

//TODO Poner back en heroku para poder obtner url
const ROOT_URL = "";

class SmartPlanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //TODO Establecer variables a tener en cuenta para manejar en el estado
      //posiblemente lista de tareas y una tarea actual seleccionada y el usuario actual
      homeworks : []
    }
  }

  render() {
    return(
      //TODO creación de plantilla para mostrar lista de tareas-
      <div>
        <UserAdmin />
        <HmkList />
      </div>
    )
  }
}

export default SmartPlanner;
