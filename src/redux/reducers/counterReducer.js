// reducer is a function which accepts initialState and action
// and on basis of action.type it returns state updating it with action.payload

const counterState = {
	count: 0,
};

const counterReducer = (state = counterState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { ...state, count: state.count + 1 };
		case 'DECREMENT':
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
};

export default counterReducer;
