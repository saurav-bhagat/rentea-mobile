import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';


const { Navigator, Screen } = createStackNavigator();

const RootNavigation = (): ReactElement => {

	return (
		<Navigator>
			<Screen name="Home" component={HomeScreen} />
		</Navigator>
	);
};

export default RootNavigation;