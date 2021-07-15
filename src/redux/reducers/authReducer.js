const initialState = {
	userInfo: [],
	msg: '',
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SEND_OTP_SUCCESS':
			return {
				...state,
				msg: action.msg,
			};
		case 'SEND_OTP_FAIL':
			return {
				...state,
				msg: action.msg,
			};
		case 'VERIFY_OTP_SUCCESS':
			return {
				...state,
				userInfo: [...state, action.payload],
				msg: action.msg,
			};
		case 'VERIFY_OTP_FAIL':
			return {
				...state,
				msg: action.msg,
			};
		default:
			return state;
	}
};

export default authReducer;
