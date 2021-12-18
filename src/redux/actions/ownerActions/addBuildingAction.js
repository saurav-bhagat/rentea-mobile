import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@env';
import { setFirstLoginFalse } from '../authActions/authAction';
import {
	ADD_BUILDING_ERROR,
	ADD_BUILDING_REQUEST,
	ADD_BUILDING_SUCCESS,
	CLEAR_BUILDING_DETAILS,
} from './addBuildingTypes';
import { navigate } from '../../../navigation/rootNavigation';
import { setRoomDetails } from './addRoomAction';
import { getOwnerDashboard } from './dashboardAction';
import { getToken } from '../../../helpers/checkTokenExpiry';

export const addBuildingRequest = () => {
	return {
		type: ADD_BUILDING_REQUEST,
	};
};

export const addBuildingSuccess = (buildingObj) => {
	return {
		type: ADD_BUILDING_SUCCESS,
		payload: {
			buildingDetails: buildingObj,
			msg: 'buildings added successfully',
		},
	};
};

export const addBuildingError = () => {
	return {
		type: ADD_BUILDING_ERROR,
		msg: 'Error while saving building',
	};
};

export const clearBuildingDetails = () => {
	return {
		type: CLEAR_BUILDING_DETAILS,
	};
};

export const saveBuildingData = (buildingObj) => {
	return async (dispatch, getState) => {
		dispatch(addBuildingRequest());
		const state = getState();
		const { buildingName, district, pinCode, stateAddress, street } =
			buildingObj;
		const rooms = state.addRoomDetails.roomDetails
			? state.addRoomDetails.roomDetails.map((room) => {
					if (room.isMultipleTenant) {
						return {
							type: `${room.bhk}bhk`,
							floor: room.floor,
							roomNo: room.roomNo,
							roomSize: room.sizeInFt,
							isMultipleTenant: room.isMultipleTenant,
						};
					} else {
						return {
							rent: room.rent,
							type: `${room.bhk}bhk`,
							floor: room.floor,
							roomNo: room.roomNo,
							roomSize: room.sizeInFt,
							isMultipleTenant: room.isMultipleTenant,
						};
					}
			  })
			: [];
		const body = {
			ownerId: state.auth.userInfo.userDetails.ownerId,
			buildingsObj: [
				{
					name: buildingName,
					address: `Street no - ${street} ${district} ${stateAddress} ${pinCode}`,
					rooms,
				},
			],
		};
		const token = await getToken();
		axios
			.post(`${API_URL}/owner/add-property`, body, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})
			.then(async (response) => {
				dispatch(addBuildingSuccess(buildingObj));

				try {
					let userInfo = await AsyncStorage.getItem('userInfo');
					userInfo = JSON.parse(userInfo);
					const firstLogin = userInfo.firstLogin;
					console.log('building added successfully');
					// The action setRoomDetails empty the room reducer for next room field
					dispatch(setRoomDetails());
					!firstLogin && (await dispatch(getOwnerDashboard()));
					// The action clearBuidlingDetails clear addbuildingdetail reducer for 2 user in one device
					!firstLogin && dispatch(clearBuildingDetails());
					firstLogin
						? navigate('AddBuilding')
						: navigate('Properties');
				} catch (err) {
					alert('error while saving to async storage');
					console.log('error while saving to async storage', err);
				}
			})
			.catch((error) => {
				console.log(
					'error while sending building data is : ',
					error.message,
					state
				);
				dispatch(addBuildingError());
				alert(
					`Error while adding building is  :  ${error.response.data.err}`
				);
			});
	};
};
