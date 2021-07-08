
const buildingDetails = {
	buildingName:'',
    roomCount:'',
    floorCount:'',
    stateAddress:'',
    pinCode:'',
    street:'',
    district:''
}

const addBuildingReducer = (state = buildingDetails, action) => {
	switch(action.type){
		case 'SET_BUILDING_DETAILS':
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default addBuildingReducer;