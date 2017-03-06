/*
Homework reducer. Dado un estado y una accion cambia el estado (!recordar: funcion debe ser pura)
*/
const hmk = (state={
	loading: true,
	error: false,
	list:[],
	filter:{
		category:'not_finished',
		order:'prioritized'
	}}, action={type:'non'}) =>{
	console.log(state);
	console.log(action);
	switch (action.type) {
		case 'GET_HMK_OK':
			return Object.assign({}, state, {list: action.data, error: false, loading: false});
		case 'GET_HMK_ERR':
			return Object.assign({}, state, {error: true});
		case 'CATEGORY': //No he creado el action creator para esta accion
		case 'ORDER': //No he creado el action creator para esta accion
		default:
			return state;
	}
};

export default hmk