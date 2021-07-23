const initialState = {
	userInfo: null,
	msg: '',
	error: false,
	userToken: null,
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
				userToken: action.payload.accessToken,
			};
		case 'VERIFY_OTP_FAIL':
			return {
				...state,
				msg: action.msg,
				error: true,
			};
		case 'RESTORE_TOKEN':
			return {
				...state,
				userToken: action.token,
			};
		default:
			return state;
	}
};
