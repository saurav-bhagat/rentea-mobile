/*
Step1: saveBuildingData action-creator will be called which will post the building Data
Step2: data will be saved or error comes
step3: if data is saved, call action "addBuildingSuccess" to set msg: "buildings added successfully"
step4: reducer get this under "ADD_BUILDING_SUCCESS"
step5: if error comes, call action "addBuildingError" to set msg: "Error while saving building"
step6: reducer get this under "ADD_BUILDING_ERROR"
step7: Screen will navigate to "AddBuilding" Screen from "AddBuildingForm"
step8: remove comments
*/

export const setBuildingDetails = (buildingObj) => {
	console.log('Inside action with building: ', buildingObj);
	return {
		type: 'SET_BUILDING_DETAILS',
		payload: buildingObj,
	};
};

export const saveBuildingData = (buildingObj) => {
	return (dispatch) => {
		console.log('Inside action-creator', buildingObj);
	};
};
