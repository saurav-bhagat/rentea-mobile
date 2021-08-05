import React, { useState } from 'react';
import { View, Text } from 'react-native';

import AddTenantScreen from '../tenant/AddTenantScreen';
import TenantInfoScreen from '../tenant/TenantInfoScreen';

import { roomInfoScreenStyles } from './RoomInfoStyle';

const RoomInfoScreen = ({ route }) => {
	const [isTenant, setIsTenant] = useState(true);
	const { singleRoomData } = route.params;

	return (
		<View>
			{isTenant ? (
				<TenantInfoScreen singleRoomData={singleRoomData} />
			) : (
				<AddTenantScreen />
			)}
		</View>
	);
};

export default RoomInfoScreen;
