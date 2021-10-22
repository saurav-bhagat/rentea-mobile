import React from 'react';
import { ScrollView } from 'react-native';

import CrossPlatformHeader from '../../../../components/common/CrossPlatformHeader';
import { navigate } from '../../../../navigation/rootNavigation';

import TenantInfoScreen from '../tenant/TenantInfoScreen';
import RoomDetailsScreen from './RoomDetailsScreen';

const RoomInfoScreen = ({ route }) => {
	const { singleRoomData, propertyInfo } = route.params;

	return (
		<ScrollView>
			<CrossPlatformHeader
				title="Room Info"
				backCallback={() => {
					navigate('PropertyInfo');
				}}
			/>

			<>
				<RoomDetailsScreen
					singleRoomData={singleRoomData}
					propertyInfo={propertyInfo}
				/>
				{singleRoomData.tenants.length > 0 && (
					<TenantInfoScreen
						singleRoomData={singleRoomData}
						propertyInfo={propertyInfo}
					/>
				)}
			</>
		</ScrollView>
	);
};

export default RoomInfoScreen;
