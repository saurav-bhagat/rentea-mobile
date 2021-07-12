
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
	buildingDetails:[]
}

const addBuildingReducer = (state = initialState, action) => {
	switch(action.type){
		case 'SET_BUILDING_DETAILS':
			return { 
				...state,
				buildingDetails:[...state.buildingDetails,action.payload]
			 };
		default:
			return state;
	}
};

export default addBuildingReducer;