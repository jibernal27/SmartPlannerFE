/*
Homework reducer. Dado un estado y una accion cambia el estado (!recordar: funcion debe ser pura)
*/
const hmk = (state={
	loading: true,
	list:[],
	filter:{
		category:'not_finished',
		order:'prioritized'
	}}, action) =>{
	switch (action.type) {
		case 'HMK_GET_OK':
		case 'HMK_GET_ERR':
		case 'CATEGORY': //No he creado el action creator para esta accion
		case 'ORDER': //No he creado el action creator para esta accion
		default:
			return state;
	}
};

export default hmk