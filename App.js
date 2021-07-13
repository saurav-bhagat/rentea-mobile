import React from 'react';
import { Provider } from 'react-redux';

import RootRoutes from './src/navigation';
import store from './src/redux/store';

export default function App(){

	return (
		<Provider store={store}>
			<RootRoutes />
		</Provider>
  	);
};
