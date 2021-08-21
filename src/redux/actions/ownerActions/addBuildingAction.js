import axios from 'axios';
import { API_URL } from '@env';
import { setFirstLoginFalse } from '../authActions/authAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
		msg: 'Error while saving building',
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
			.then(async (response) => {
				dispatch(addBuildingSuccess(buildingObj));
				dispatch(setFirstLoginFalse());

				try {
					await AsyncStorage.removeItem('userInfo');
					await AsyncStorage.setItem(
						'userInfo',
						JSON.stringify(state.auth.userInfo)
					);
					let userInfo = await AsyncStorage.getItem('userInfo');
					userInfo = JSON.parse(userInfo);
					console.log('building added successfully');
				} catch (err) {
					alert('error while saving to async storage');
				}
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
