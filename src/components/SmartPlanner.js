import React, {Component} from 'react';
import axios from 'axios';
import VisibleHmkList from '../containers/VisibleHmkList';
import UserBar from '../containers/UserBar';

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

  addHmkToUser() {
    //TODO verificar estructura obtención de queryparams
    axios.post(ROOT_URL+ "/users/:id/hmks", {
      // TODO creación de cuerpo de post con caracteristicas de la tarea
    })
    .then(response => {
      //TODO revisión de respuesta. Por ahora obtener las tareas del usuario
      this.getHmks();
    })
  }

  getHmks() {
    // TODO query params
    axios.get(ROOT_URL+ "/users/:id/hmks")
    .then(response => {
      this.setState({
        //TODO verificación
        homeworks: response.data
      })
    })
  }



  render() {
    return(
      //TODO creación de plantilla para mostrar lista de tareas-
      <div>
        <UserBar />
        <VisibleHmkList />
      <img src="https://upload.wikimedia.org/wikipedia/en/1/1d/Page_Under_Construction.png" alt="under_construction"/>
      </div>
    )
  }
}

export default SmartPlanner;
