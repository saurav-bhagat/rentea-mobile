export const setBuildingDetails = (buildingObj) => {
	console.log('Inside action with building: ', buildingObj);
	return {
		type: 'SET_BUILDING_DETAILS',
		payload: buildingObj,
	};
};
