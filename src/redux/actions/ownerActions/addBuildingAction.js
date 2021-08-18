import axios from 'axios';
import { API_URL } from '@env';
import { navigate } from '../../../navigation/rootNavigation';

export const addBuildingSuccess = (buildingObj) => {
	return {
		type: 'ADD_BUILDING_SUCCESS',
		payload: {
			buildingDetails: buildingObj,
			msg: 'buildings added successfully',
		},
	};
};

export const addBuildingError = () => {
	return {
		type: 'ADD_BUILDING_ERROR',
		payload: 'Error while saving building',
	};
};

export const saveBuildingData = (buildingObj) => {
	return (dispatch, getState) => {
		const state = getState();
		const { buildingName, district, pinCode, stateAddress, street } =
			buildingObj;
		const rooms = state.addRoomDetails.roomDetails
			? state.addRoomDetails.roomDetails.map((room) => {
					return {
						rent: room.rent,
						type: `${room.bhk}bhk`,
						floor: room.floor,
						roomNo: room.roomNo,
					};
			  })
			: [];
		const body = {
			ownerId: state.userDetail._id,
			buildingsObj: [
				{
					name: buildingName,
					address: `Street no - ${street} ${district} ${stateAddress} ${pinCode}`,
					rooms,
					maintainerDetail: {
						name: buildingObj.maintainerName,
						phoneNumber: buildingObj.maintainerPhone,
					},
				},
			],
		};
		axios
			.post(`${API_URL}/owner/add-property`, body, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${state.auth.userInfo.accessToken}`,
				},
			})
			.then((response) => {
				console.log('while sending building data', state);
				dispatch(addBuildingSuccess(buildingObj));
				navigate('ownerDashboard');
			})
			.catch((error) => {
				console.log(
					'error while sending building data',
					error.message,
					state
				);
				dispatch(addBuildingError());
				alert('Error while adding building');
			});
	};
};
