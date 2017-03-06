const editAdd = (state={
	toggle: false,
	error: false,
	loading_post: false
}, action={type:'non'}) =>{
	switch (action.type) {
		case 'TOGGLE_EDIT_ADD_HMK':
			return Object.assign({}, state, {toggle: !state.toggle});
		case 'POST_HMK_OK':
			return Object.assign({}, state, {loading_post: false, error:false});
		case 'POST_HMK_ERR':
			return Object.assign({}, state, {loading_post: false, error:true});
		case 'PUT_HMK_OK':
			return Object.assign({}, state, {loading_post: false, error:false});
		case 'PUT_HMK_ERR':
			return Object.assign({}, state, {loading_post: false, error:true});
		case 'TOGGLE_NEW_HMK_LOADING':
			return Object.assign({}, state, {loading_post: true, error:false});
		case 'test': console.log(action.type);
		default:
			return state;
	}
};

export default editAdd