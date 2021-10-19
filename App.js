import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import { ActivityIndicator, View } from 'react-native';

import RootRoutes from './src/navigation';
import store from './src/redux/store';
import useNotification from './src/components/common/useNotification';

export default function App() {
	useNotification();
	const [fontLoading, setFontLoading] = useState(true);

	useEffect(() => {
		(async () => {
			await Font.loadAsync({
				Roboto: require('native-base/Fonts/Roboto.ttf'),
				Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			});
			setFontLoading(false);
		})();
	}, []);
	if (fontLoading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<ActivityIndicator color="#109FDA" size="large" />
			</View>
		);
	} else {
		return (
			<Provider store={store}>
				<RootRoutes />
			</Provider>
		);
	}
}
