/*
   Type of building object 
		{
			buildingName:'',
			roomCount:'',
			floorCount:'',
			stateAddress:'',
			pinCode:'',
			street:'',
			district:'',
			maintainerName:'',
			maintainerPhone:''
       }
*/

const initialState = {
	buildingDetails: [],
	msg: '',
};

export const addBuildingReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_BUILDING_SUCCESS':
			return {
				...state,
				msg: action.payload.msg,
				buildingDetails: [
					...state.buildingDetails,
					action.payload.buildingDetails,
				],
			};
		case 'ADD_BUILDING_ERROR':
			return {
				...state,
				msg: action.payload,
			};
		default:
			return state;
	}
};
