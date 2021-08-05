import React, { useState } from 'react';
import { View, Text } from 'react-native';

import AddTenantScreen from '../tenant/AddTenantScreen';
import TenantInfoScreen from '../tenant/TenantInfoScreen';

import { roomInfoScreenStyles } from './RoomInfoStyle';

const RoomInfoScreen = ({ route }) => {
	const [isTenant, setIsTenant] = useState(false);
	const { singleRoomData, propertyInfo } = route.params;

	return (
		<View>
			{singleRoomData.tenants.length > 0 ? (
				<TenantInfoScreen
					singleRoomData={singleRoomData}
					propertyInfo={propertyInfo}
				/>
			) : (
				<AddTenantScreen
					singleRoomData={singleRoomData}
					propertyInfo={propertyInfo}
				/>
			)}
		</View>
	);
};

export default RoomInfoScreen;
