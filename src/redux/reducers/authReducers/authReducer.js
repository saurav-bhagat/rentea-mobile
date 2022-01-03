import {
	SEND_OTP_FAIL,
	SEND_OTP_REQUEST,
	SEND_OTP_SUCCESS,
	SET_USER_INFO,
	VERIFY_OTP_FAIL,
	VERIFY_OTP_REQUEST,
	VERIFY_OTP_SUCCESS,
	REFRESH_TOKEN_REQUEST,
	REFRESH_TOKEN_SUCCESS,
	REFRESH_TOKEN_FAIL,
} from '../../actions/authActions/authTypes';

const initialState = {
	userInfo: null,
	msg: '',
	error: false,
	loading: false,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_OTP_REQUEST:
			return {
				...state,
				loading: true,
			};
		case SEND_OTP_SUCCESS:
			return {
				...state,
				msg: action.msg,
				error: false,
				loading: false,
			};
		case SEND_OTP_FAIL:
			return {
				...state,
				msg: action.msg,
				error: true,
				loading: false,
			};
		case VERIFY_OTP_REQUEST:
			return {
				...state,
				loading: true,
			};
		case VERIFY_OTP_SUCCESS:
			return {
				...state,
				userInfo: action.payload,
				msg: action.msg,
				error: false,
				loading: false,
			};
		case VERIFY_OTP_FAIL:
			return {
				...state,
				msg: action.msg,
				error: true,
				loading: false,
			};
		case REFRESH_TOKEN_REQUEST:
			return {
				...state,
				loading: true,
			};
		case REFRESH_TOKEN_SUCCESS:
			return {
				...state,
				userInfo: action.payload,
				msg: action.msg,
				error: false,
				loading: false,
			};
		case REFRESH_TOKEN_FAIL:
			return {
				...state,
				msg: action.msg,
				error: true,
				loading: false,
			};
		case SET_USER_INFO:
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
		case 'SET_FIRST_LOGIN_FALSE':
			state.userInfo.firstLogin = false;
			return {
				...state,
			};
		default:
			return state;
	}
};
