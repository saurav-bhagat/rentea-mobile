import axios from 'axios';
import { API_URL } from '@env';

export const refreshAccessToken = (refreshToken) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`${API_URL}/auth/refresh-token`, { refreshToken })
			.then((response) => {
				console.log('Response from refreshToken', response.data);
				resolve(response.data);
			})
			.catch((error) => {
				console.log('Error from refreshToken', error);
				reject(error);
			});
	});
};
