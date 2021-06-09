import React from 'react';
import RootRoutes from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App(){
	return (
		<Provider store={store}>
			<RootRoutes />
		</Provider>
  	);
};
