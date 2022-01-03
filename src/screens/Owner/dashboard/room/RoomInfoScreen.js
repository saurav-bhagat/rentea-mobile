import React, { useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import CrossPlatformHeader from '../../../../components/common/CrossPlatformHeader';
import { navigate } from '../../../../navigation/rootNavigation';
import RoomDetailsScreen from './RoomDetailsScreen';
import SnackBar from '../../../../components/common/SnackBar';
import useSnack from '../../../../components/common/useSnack';
import { roomInfoScreenStyles } from './RoomInfoStyle';

const tenantAdded = 'tenant added successfully';
const roomUpdate = 'room updated successfully';
const defaultState = 'default state';

const RoomInfoScreen = ({ route }) => {
	const { properties } = useSelector((state) => state.ownerDashbhoard);
	const { tenantMsg } = useSelector((state) => state.addTenantResponse);
	const { msg: updateRoomInfoMsg } = useSelector((state) => state.updateRoom);
	const {
		visible,
		text,
		setVisible,
		setText,
		onToggleSnackBar,
		onDismissSnackBar,
	} = useSnack();

	let { singleRoomData, propertyInfo, buildingId, roomId } = route.params;

	useEffect(() => {
		//  Integrating Snack  after adding tenant
		if (tenantMsg === tenantAdded) {
			setVisible(true);
			setText('Tenant added successfully.');
		} else if (tenantMsg !== defaultState && tenantMsg !== tenantAdded) {
			console.log('tenant msg is ', tenantAdded, tenantMsg);
			setVisible(true);
			setText('Error while adding tenant.');
		}

		//   Integrating Snack after updating roomInfo
		if (updateRoomInfoMsg === roomUpdate) {
			setVisible(true);
			setText('Room details updated successfully');
		} else if (
			updateRoomInfoMsg !== roomUpdate &&
			updateRoomInfoMsg !== defaultState
		) {
			setVisible(true);
			setText('Error while updating room info');
		}
	}, [tenantMsg, updateRoomInfoMsg]);

	// when navigating after adding tenant (addTenantAction),
	// updating roomInfo (updateRoomInfoAction)
	if (buildingId && roomId) {
		propertyInfo = properties.ownerDashboardResult.buildings.filter(
			(building) => building._id === buildingId
		);
		propertyInfo = propertyInfo[0];
		if (propertyInfo) {
			singleRoomData = propertyInfo.rooms.filter(
				(roomData) => roomData._id === roomId
			);
			singleRoomData = singleRoomData[0];
		}
	}
	// If we don't receive buildingId from params
	// then we take it from property info
	// for navigate back to propertyInfo screen
	buildingId = propertyInfo._id;

	const handleAddTenant = () => {
		navigate('UpdateTenantInfo', {
			singleRoomData,
			propertyInfo,
			showAddTenantScreenFlag: true,
		});
	};
	return (
		<ScrollView>
			<CrossPlatformHeader
				title=""
				backCallback={() => {
					navigate('PropertyInfo', { buildingId, roomId });
				}}
				profile={false}
			/>

			<>
				<RoomDetailsScreen
					singleRoomData={singleRoomData}
					propertyInfo={propertyInfo}
				/>
				{singleRoomData.isMultipleTenant && (
					<View style={roomInfoScreenStyles.addTenantContainer}>
						<Button
							title="Add Tenant"
							buttonStyle={roomInfoScreenStyles.addTenantBtn}
							titleStyle={roomInfoScreenStyles.addTenantTitle}
							onPress={handleAddTenant}
							raised
						/>
					</View>
				)}
				{!singleRoomData.isMultipleTenant &&
					singleRoomData.tenants.length < 1 && (
						<View style={roomInfoScreenStyles.addTenantContainer}>
							<Button
								title="Add Tenant"
								buttonStyle={roomInfoScreenStyles.addTenantBtn}
								titleStyle={roomInfoScreenStyles.addTenantTitle}
								onPress={handleAddTenant}
								raised
							/>
						</View>
					)}
				{singleRoomData.tenants.length > 0 &&
					singleRoomData.tenants.map((tenant, i) => {
						return (
							<ListItem
								key={i}
								Component={TouchableOpacity}
								bottomDivider
								containerStyle={roomInfoScreenStyles.cardStyle}
								onPress={() => {
									navigate('TenantInfo', {
										singleRoomData,
										propertyInfo,
										tenant,
									});
								}}
							>
								<ListItem.Content>
									<View style={roomInfoScreenStyles.row}>
										<Text style={roomInfoScreenStyles.col1}>
											Tenant name{' '}
										</Text>
										<Text style={roomInfoScreenStyles.col}>
											{tenant.name}
										</Text>
									</View>
									<View style={roomInfoScreenStyles.row}>
										<Text style={roomInfoScreenStyles.col1}>
											Due Date{' '}
										</Text>
										<Text style={roomInfoScreenStyles.col}>
											{`${
												singleRoomData.isMultipleTenant
													? tenant.rent
													: singleRoomData.rent
											} rs  on ${format(
												new Date(tenant.rentDueDate),
												'dd/MM/yyyy'
											)}`}
										</Text>
									</View>
								</ListItem.Content>
							</ListItem>
						);
					})}
				<SnackBar
					visible={visible}
					text={text}
					onDismissSnackBar={onDismissSnackBar}
					onToggleSnackBar={onToggleSnackBar}
				/>
			</>
		</ScrollView>
	);
};

export default RoomInfoScreen;
