import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';

import RootRoutes from './src/navigation';
import store from './src/redux/store';

export default function App(){
	useEffect(() => {
		(async () => await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
		  }))();
	}, []);
	return (
		<Provider store={store}>
			<RootRoutes />
		</Provider>
  	);
};
