/*
Metodo que crea la accion HMK_DATA_OK segun el objeto del response
*/
export const getHmkOk = (data) => {
	return {
		type: 'GET_HMK_OK',
		data
	};
};

/*
Metodo que crea la accion HMK_DATA_ERR segun el objeto del response
*/
export const getHmkErr = (err) => {
	return {
		type: 'GET_HMK_ERR',
		err
	};
};

/*
Metodo que crea la accion HMK_DATA_OK segun el objeto del response
*/
export const postHmkOk = (data) => {
	return {
		type: 'POST_HMK_OK',
		data
	};
};

/*
Metodo que crea la accion HMK_DATA_ERR segun el objeto del response
*/
export const postHmkErr = (err) => {
	return {
		type: 'POST_HMK_ERR',
		err
	};
};
/*
Metodo que crea la accion HMK_DATA_OK segun el objeto del response
*/
export const putHmkOk = (data) => {
	return {
		type: 'PUT_HMK_OK',
		data
	};
};

/*
Metodo que crea la accion HMK_DATA_ERR segun el objeto del response
*/
export const putHmkErr = (err) => {
	return {
		type: 'PUT_HMK_ERR',
		err
	};
};
/*
Metodo que crea la accion HMK_DATA_OK segun el objeto del response
*/
export const deleteHmkOk = (data) => {
	return {
		type: 'DELETE_HMK_OK',
		data
	};
};

/*
Metodo que crea la accion HMK_DATA_ERR segun el objeto del response
*/
export const deleteHmkErr = (err) => {
	return {
		type: 'DELETE_HMK_ERR',
		err
	};
};


/*
Metodo que crea la accion USER_DATA_OK segun el objeto del response
*/
export const getUserOk = (data) => {
	return {
		type: 'GET_USER_OK',
		data
	};
};

/*
Metodo que crea la accion USER_DATA_ERR segun el objeto del response
*/
export const getUserErr = (err) => {
	return {
		type: 'USER_DATA_ERR',
		err
	};
};

/*
Metodo que crea la accion PUT_USER segun el objeto user
*/
export const putUserOk = (user) => {
	return {
		type: 'PUT_USER_OK',
		user
	};
};

/*
Metodo que crea la accion PUT_USER segun el objeto user
*/
export const putUserErr = (user) => {
	return {
		type: 'PUT_USER_ERR',
		user
	};
};

/*
Metodo que crea la accion TOGGLE_EDIT_USER segun el objeto user
*/
export const toggleEditUser = (user) => {
	return {
		type: 'TOGGLE_EDIT_USER',
		user
	};
};

/*
Metodo que crea la accion TOGGLE_EDIT_HMK segun el objeto hmk
*/
export const toggleEditAddHmk = (hmk) => {
	return {
		type: 'TOGGLE_EDIT_ADD_HMK',
		hmk		
	};
};

export const toggleLoginView = () => {
	return {
		type: 'TOGGLE_LOGIN_VIEW'
	}
};
