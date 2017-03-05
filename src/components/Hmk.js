import React, {Component} from 'react';
import axios from 'axios';
//TODO url Back-End
const ROOT_URL = "";

let Hmk = (userId, hmk, loading) => {
  /*
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
  }*/ //--> Movidos a containers/HmkList

  
    return (
      //TODO estructura de un elemento tarea
        <div>{console.log(userId)}
          
        </div>
    )
}

export default Hmk;
