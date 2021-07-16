const initialState = {
	userInfo: [],
	msg: '',
	error: false,
};

const authReducer = (state = initialState, action) => {
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
				userInfo: [...state.userInfo, action.payload],
				msg: action.msg,
				error: false,
			};
		case 'VERIFY_OTP_FAIL':
			return {
				...state,
				msg: action.msg,
				error: true,
			};
		default:
			return state;
	}
};

export default authReducer;
