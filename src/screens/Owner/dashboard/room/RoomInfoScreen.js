import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CrossPlatformHeader from '../../../../components/common/CrossPlatformHeader';
import { navigate } from '../../../../navigation/rootNavigation';

import AddTenantScreen from '../tenant/AddTenantScreen';
import TenantInfoScreen from '../tenant/TenantInfoScreen';
import RoomDetailsScreen from './RoomDetailsScreen';

import { roomInfoScreenStyles } from './RoomInfoStyle';

const RoomInfoScreen = ({ route }) => {
	const [isTenant, setIsTenant] = useState(false);
	const { singleRoomData, propertyInfo } = route.params;

	return (
		<View>
			<CrossPlatformHeader
				title="Room Info"
				backCallback={() => {
					navigate('PropertyInfo');
				}}
			/>
			{singleRoomData.tenants.length > 0 ? (
				<>
					<RoomDetailsScreen
						singleRoomData={singleRoomData}
						propertyInfo={propertyInfo}
					/>
					<TenantInfoScreen
						singleRoomData={singleRoomData}
						propertyInfo={propertyInfo}
					/>
				</>
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
