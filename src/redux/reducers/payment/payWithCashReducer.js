import {
	PAY_WITH_CASH_FAIL,
	PAY_WITH_CASH_REQUEST,
	PAY_WITH_CASH_SUCCESS,
} from '../../actions/payment/payWithActionTypes';

const initialState = {
	msg: '',
	loading: false,
};

const payWithCashReducer = (state = initialState, action) => {
	switch (action.type) {
		case PAY_WITH_CASH_REQUEST:
			return {
				...state,
				loading: true,
			};
		case PAY_WITH_CASH_SUCCESS:
			return {
				...state,
				msg: action.payload,
				loading: false,
			};
		case PAY_WITH_CASH_FAIL:
			return {
				...state,
				msg: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

export default payWithCashReducer;