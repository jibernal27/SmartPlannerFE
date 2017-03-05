import { combineReducers } from 'redux';
import hmk from './hmk'
import editAddHmk from './editAddHmk'
import user from './user'

const rootReducer = combineReducers({
	hmk,
	editAddHmk,
	user
	//state: (state = {}) => state
});

export default rootReducer;

/*
addHmkToUser() {
    //TODO verificar estructura obtención de queryparams
    axios.post(ROOT_URL+ "/users/:id/hmks", {
      // TODO creación de cuerpo de post con caracteristicas de la tarea
  })
    .then(response => {
      //TODO revisión de respuesta. Por ahora obtener las tareas del usuario
      this.getHmks();
  });
}


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


*/
/*
STATE
{
	hmk: {
		loading: true|false,
		list: [],
		filter: {
			category: ...,
			order: 
		}
	},
	addEditHmk: {
			toggle: true|false,
			loading_post: true|false,
			hmk: {}
	},
	user: {
		login_view: true|false,
		user_edit_view: true|false,
		actual: {}
	}
	
}

*/