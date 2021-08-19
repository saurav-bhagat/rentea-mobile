import axios from 'axios';
import { API_URL } from '@env';
import { navigate } from '../../../navigation/rootNavigation';
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
				console.log('while sending building data1', state.auth);
				dispatch(addBuildingSuccess(buildingObj));
				dispatch(setFirstLoginFalse());
				console.log('while sending building data2', state.auth);
				try {
					await AsyncStorage.removeItem('userInfo');
					await AsyncStorage.setItem(
						'userInfo',
						JSON.stringify(state.auth.userInfo)
					);
					let userInfo = await AsyncStorage.getItem('userInfo');
					userInfo = JSON.parse(userInfo);
					console.log('in local db', userInfo);
				} catch (err) {
					console.log('in catch error', err);
				}
				console.log('while sending building data3', state.auth);
				//navigate('ownerDashboard');
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
