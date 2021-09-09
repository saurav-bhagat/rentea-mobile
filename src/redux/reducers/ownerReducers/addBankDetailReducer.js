import {
	ADD_BANK_DETAILS_FAIL,
	ADD_BANK_DETAILS_REQUEST,
	ADD_BANK_DETAILS_SUCCESS,
} from '../../actions/ownerActions/addBankDetailsType';

const initialState = {
	accountName: '',
	accountNumber: '',
	ifsc: '',
	bankName: '',
	beneficiaryName: '',
	loading: false,
};

const addBankDetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_BANK_DETAILS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ADD_BANK_DETAILS_SUCCESS:
			return {
				...state,
				...action.payload,
				loading: false,
			};
		case ADD_BANK_DETAILS_FAIL:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
};

export default addBankDetailsReducer;
