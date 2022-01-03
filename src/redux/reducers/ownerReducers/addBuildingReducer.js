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

import {
	ADD_BUILDING_ERROR,
	ADD_BUILDING_REQUEST,
	ADD_BUILDING_SUCCESS,
	CLEAR_BUILDING_DETAILS,
	UPDATE_BUILDING_REQUEST,
	UPDATE_BUILDING_SUCCESS,
	UPDATE_BUILDING_ERROR,
} from '../../actions/ownerActions/addBuildingTypes';

const initialState = {
	buildingDetails: [],
	msg: '',
	loading: false,
};

export const addBuildingReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_BUILDING_REQUEST: {
			return {
				...state,
				loading: true,
			};
		}
		case ADD_BUILDING_SUCCESS:
			return {
				...state,
				msg: action.payload.msg,
				buildingDetails: [
					...state.buildingDetails,
					action.payload.buildingDetails,
				],
				loading: false,
			};
		case ADD_BUILDING_ERROR:
			return {
				...state,
				msg: action.msg,
				loading: false,
			};
		case CLEAR_BUILDING_DETAILS:
			return {
				...state,
				buildingDetails: [],
				msg: '',
				loading: false,
			};
		case UPDATE_BUILDING_REQUEST: {
			return {
				...state,
				loading: true,
			};
		}
		case UPDATE_BUILDING_SUCCESS: {
			return {
				...state,
				loading: false,
				msg: action.payload.msg,
			};
		}
		case UPDATE_BUILDING_ERROR: {
			return {
				...state,
				loading: false,
				msg: action.payload.msg,
			};
		}
		default:
			return {
				...state,
				msg: 'default state',
			};
	}
};
