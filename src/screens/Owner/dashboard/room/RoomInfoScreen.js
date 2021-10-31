import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-elements';
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
				{singleRoomData.isMultipleTenant && (
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'flex-end',
							marginTop: 10,
							marginBottom: 10,
							marginRight: 20,
						}}
					>
						<Button
							title="Add Tenant"
							buttonStyle={{
								backgroundColor: '#fff',
								borderRadius: 20,
							}}
							titleStyle={{
								color: '#109FDA',
								fontSize: 15,
							}}
							onPress={() => {
								navigate('UpdateTenantInfo', {
									singleRoomData,
									propertyInfo,
									showAddTenantScreenFlag: true,
								});
							}}
							raised
						/>
					</View>
				)}
				{!singleRoomData.isMultipleTenant &&
					singleRoomData.tenants.length < 1 && (
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'flex-end',
								marginTop: 10,
								marginBottom: 10,
								marginRight: 20,
							}}
						>
							<Button
								title="Add Tenant"
								buttonStyle={{
									backgroundColor: '#fff',
									borderRadius: 20,
								}}
								titleStyle={{
									color: '#109FDA',
									fontSize: 15,
								}}
								onPress={() => {
									navigate('UpdateTenantInfo', {
										singleRoomData,
										propertyInfo,
										showAddTenantScreenFlag: true,
									});
								}}
								raised
							/>
						</View>
					)}
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
