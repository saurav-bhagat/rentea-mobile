import { find } from 'lodash';

const initialState = {
	roomDetails: [],
};

const addRoomsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_ROOM_DATA':
			if (find(state.roomDetails, action.payload)) {
				return state;
			}
			// update the state only if unique room number comes
			return {
				...state,
				roomDetails: [...state.roomDetails, action.payload],
			};
		default:
			return state;
	}
};

export default addRoomsReducer;
