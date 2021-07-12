import { API_URL } from "@env";


// we can use env API_URL now coming from .env
 
export const setBuildingDetails = (buildingObj) => {
	console.log('Inside action with building: ', buildingObj);
	return {
		type: 'SET_BUILDING_DETAILS',
		payload: buildingObj
	}
}