import React, {Component} from 'react';
import axios from 'axios';
//TODO url Back-End
const ROOT_URL = "";

class Homework extends Component {

  deleteHmk() {
    axios.delete(ROOT_URL+"/usuario/:id/hmks/:id_h").then(response => {
        //TODO mensaje de exito de la operación o de error
      })
  }

  updateHmk(){
    axios.put(ROOT_URL+"/usuario/:id/hmks/:id_h",
    {
      //TODO creación del cuerpo de la actualización
    }).then(response => {
        //TODO mensaje de exito de la operación o de error
      })
  }

  render(){
    return (
      //TODO estructura de un elemento tarea
        <div><img src="https://upload.wikimedia.org/wikipedia/en/1/1d/Page_Under_Construction.png" alt="under_construction"/> </div>
    )
  }
}

export default Homework;
