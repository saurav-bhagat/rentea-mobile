import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import * as Sentry from 'sentry-expo';

import RootRoutes from './src/navigation';
import store from './src/redux/store';
import fonts from './fonts';

// Access any @sentry/react-native exports via:
//  Sentry.Native.*;
//  // Access any @sentry/browser exports via:
//  Sentry.Browser.*;

Sentry.init({
	dsn: 'https://26c9c031a3d6433b9592fca2df8eefd0@o1240470.ingest.sentry.io/6392624',
	enableInExpoDevelopment: true,
	debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

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
