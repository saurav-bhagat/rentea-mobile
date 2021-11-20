import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { API_URL } from '@env';

const getAccessTokenUsingRefreshToken = async (refreshToken) => {
	return axios
		.post(`${API_URL}/auth/refresh-token`, { refreshToken })
		.then((response) => response)
		.catch((error) => {
			console.log(
				'error while getting accessToken using refreshToken',
				error
			);
			return null;
		});
};

const isTokenExpired = (token) => {
	const decoded = jwt_decode(token);
	return decoded.exp < Date.now() / 1000;
};

const getVerifiedTokens = async (accessToken, refreshToken) => {
	if (!isTokenExpired(accessToken)) {
		console.log('returning accessToken');
		return accessToken;
	} else {
		if (!isTokenExpired(refreshToken)) {
			console.log('in refresh token');
			const response = await getAccessTokenUsingRefreshToken(
				refreshToken
			);
			if (response) {
				await AsyncStorage.setItem(
					'userInfo',
					JSON.stringify(response.data.userDocument)
				);
				console.log('returning new accessToken');
				return response.data.userDocument.accessToken;
			}
		} else {
			console.log('refresh expired, please login');
			return null;
		}
	}
};

export const getToken = async () => {
	try {
		let userInfo = await AsyncStorage.getItem('userInfo');
		if (!userInfo) {
			return null;
		}
		userInfo = JSON.parse(userInfo);
		const { accessToken, refreshToken } = userInfo;
		let token = await getVerifiedTokens(accessToken, refreshToken);
		return token;
	} catch (error) {
		console.log('Error while getting token', error);
	}
	return null;
};
