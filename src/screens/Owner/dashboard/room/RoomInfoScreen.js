import React, { useState } from 'react';
import { View, Text } from 'react-native';
import AddTenantScreen from '../tenant/AddTenantScreen';
import TenantInfoScreen from '../tenant/TenantInfoScreen';

import { roomInfoScreenStyles } from './RoomInfoStyle';

const RoomInfoScreen = ({ route }) => {
	const [isTenant, setIsTenant] = useState(true);
	const { id, title } = route.params;

	return (
		<View>
			{isTenant ? (
				<TenantInfoScreen id={id} title={title} />
			) : (
				<AddTenantScreen id={id} title={title} />
			)}
		</View>
	);
};

export default RoomInfoScreen;
