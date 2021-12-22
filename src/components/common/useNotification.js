import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

import React, { useState, useEffect, useRef } from 'react';

const useNotification = () => {
	Notifications.setNotificationHandler({
		handleNotification: async () => ({
			shouldShowAlert: true,
			shouldPlaySound: false,
			shouldSetBadge: true,
		}),
	});

	const [expoPushToken, setExpoPushToken] = useState('');
	const [notification, setNotification] = useState(false);
	const notificationListener = useRef();
	const responseListener = useRef();

	useEffect(() => {
		let cancel = false;
		registerForPushNotificationsAsync().then((token) => {
			if (cancel) return;
			setExpoPushToken(token);
		});

		notificationListener.current =
			Notifications.addNotificationReceivedListener((notification) => {
				if (cancel) return;
				setNotification(notification);
			});

		responseListener.current =
			Notifications.addNotificationResponseReceivedListener(
				(response) => {
					console.log(`Exponent push token ${response}`);
				}
			);

		return () => {
			cancel = true;
			Notifications.removeNotificationSubscription(
				notificationListener.current
			);
			Notifications.removeNotificationSubscription(
				responseListener.current
			);
		};
	}, []);

	async function registerForPushNotificationsAsync() {
		let token;
		if (Constants.isDevice) {
			const { status: existingStatus } =
				await Notifications.getPermissionsAsync();
			let finalStatus = existingStatus;
			if (existingStatus !== 'granted') {
				const { status } =
					await Notifications.requestPermissionsAsync();
				finalStatus = status;
			}
			if (finalStatus !== 'granted') {
				alert('Failed to get push token for push notification!');
				return;
			}
			token = (await Notifications.getExpoPushTokenAsync()).data;
			console.log(token);
		} else {
			alert('Must use physical device for Push Notifications');
		}

		if (Platform.OS === 'android') {
			Notifications.setNotificationChannelAsync('default', {
				name: 'default',
				importance: Notifications.AndroidImportance.MAX,
				vibrationPattern: [0, 250, 250, 250],
				lightColor: '#FF231F7C',
			});
		}

		return token;
	}
	return {
		expoPushToken,
	};
};

export default useNotification;
