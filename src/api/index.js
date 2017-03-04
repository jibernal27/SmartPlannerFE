import axios from 'axios';
import * as actions from '../actions';

const ROOT_URL = "";

export const getUser = (username) => {
    // TODO query params
    axios.get(ROOT_URL+ "/users?username="+username)
    .then(response => {
    	this.setState({
        //TODO verificación
        homeworks: response.data
    })
    });
    //retornar actions.getUserOk() o actions.getUserErr() segun el caso
};

export const updateUser = (user) => {
	axios.put(ROOT_URL+"/users/:id/hmks/:id_h",
	{
      //TODO creación del cuerpo de la actualización
  }).then(response => {
        //TODO mensaje de exito de la operación o de error
    });
  //retornar actions.putUserOk() o actions.putHmkErr() segun el caso
};

export const getHmks = (userId, filter) => {
    // TODO query params
    axios.get(ROOT_URL+ "/users/:id/hmks")
    .then(response => {
    	this.setState({
        //TODO verificación
        homeworks: response.data
    })
    });
    //retornar actions.getHmkOk() o actions.getHmkErr() segun el caso
};

export const addHmkToUser = (userId) => {
    //TODO verificar estructura obtención de queryparams
    axios.post(ROOT_URL+ "/users/:id/hmks", {
      // TODO creación de cuerpo de post con caracteristicas de la tarea
  })
    .then(response => {
      //TODO revisión de respuesta. Por ahora obtener las tareas del usuario
      this.getHmks();
  });
    //retornar actions.postHmkOk() o actions.postHmkErr() segun el caso
};

export const updateHmk = (userId, hmk) => {
	axios.put(ROOT_URL+"/users/:id/hmks/:id_h",
	{
      //TODO creación del cuerpo de la actualización
  }).then(response => {
        //TODO mensaje de exito de la operación o de error
    });
  //retornar putHmkOk() o putHmkErr() segun el caso
};

export const deleteHmk = (id) => {
	axios.delete(ROOT_URL+"/users/:id/hmks/:id_h").then(response => {
        //TODO mensaje de exito de la operación o de error
    });
  //retornar deleteHmkOk() o deleteHmkErr() segun el caso
};
