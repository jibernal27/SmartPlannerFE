
const user = (state={
	login_view: true,
	user_edit_view: false,
	actual: {}
}, action={type:'non'}) =>{
	switch (action.type) {
		case 'TOGGLE_EDIT_USER':
		case 'USER_POST_OK':
		case 'USER_POST_ERR':
		case 'USER_GET_OK':
		case 'USER_GET_ERR':
		default:
			return state;
	}
};

export default user