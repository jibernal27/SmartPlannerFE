const editAdd = (state={
	toggle: false,
	loading_post: false,
	hmk: {}
}, action) =>{
	switch (action.type) {
		case 'TOGGLE_EDIT_ADD_HMK':
		case 'POST_HMK_OK':
		case 'POST_HMK_ERR':
		case 'PUT_HMK_OK':
		case 'PUT_HMK_ERR':
		case 'test': console.log(action.type);
		default:
			return state;
	}
};

export default editAdd