import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import { ActivityIndicator, View } from 'react-native';

import RootRoutes from './src/navigation';
import store from './src/redux/store';
import fonts from './fonts';

export default function App() {
	const [fontLoading, setFontLoading] = useState(true);

	useEffect(() => {
		(async () => {
			await Font.loadAsync(fonts);
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
