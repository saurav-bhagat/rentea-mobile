const initialState = {
	userInfo: null,
	msg: '',
	error: false,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SEND_OTP_SUCCESS':
			return {
				...state,
				msg: action.msg,
				error: false,
			};
		case 'SEND_OTP_FAIL':
			return {
				...state,
				msg: action.msg,
				error: true,
			};
		case 'VERIFY_OTP_SUCCESS':
			return {
				...state,
				userInfo: action.payload,
				msg: action.msg,
				error: false,
			};
		case 'VERIFY_OTP_FAIL':
			return {
				...state,
				msg: action.msg,
				error: true,
			};
		case 'SET_USER_INFO':
			return {
				...state,
				userInfo: action.payload,
			};
		case 'RESTORE_FIRST_LOGIN':
			return {
				...state,
				firstLogin: action.firstLogin,
			};
		case 'USER_LOGOUT':
			return {
				...state,
				userInfo: null,
				error: false,
				msg: '',
			};
		default:
			return state;
	}
};
