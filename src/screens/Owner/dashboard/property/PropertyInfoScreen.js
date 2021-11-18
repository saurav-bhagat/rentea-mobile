import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';

import { propertiesScreenStyles } from './PropertiesScreenStyles';
import CrossPlatformHeader from '../../../../components/common/CrossPlatformHeader';
import { navigate } from '../../../../navigation/rootNavigation';
import SnackBar from '../../../../components/common/SnackBar';
import useSnack from '../../../../components/common/useSnack';

const roomAdded = 'room added successfully';
const defaultState = 'default state';

const PropertyInfoScreen = ({ route, navigation }) => {
	const { properties } = useSelector((state) => state.ownerDashbhoard);
	const { msg: roomAddedMsg } = useSelector(
		(state) => state.addRoomSeparately
	);
	const {
		visible,
		text,
		setVisible,
		setText,
		onToggleSnackBar,
		onDismissSnackBar,
	} = useSnack();
	let { propertyInfo, buildingId } = route.params;
	let roomListData = propertyInfo.rooms;

	useEffect(() => {
		// Integrating Snack  after adding room
		if (roomAddedMsg === roomAdded) {
			setVisible(true);
			setText(roomAdded);
		} else if (
			roomAddedMsg !== roomAdded &&
			roomAddedMsg !== defaultState
		) {
			setVisible(true);
			setText('Error while adding room');
		}
	}, [roomAddedMsg]);

	// when navigating after adding room (addRoomAction)
	if (buildingId) {
		propertyInfo = properties.ownerDashboardResult.buildings.filter(
			(building) => building._id === buildingId
		);
		propertyInfo = propertyInfo[0];
		roomListData = propertyInfo.rooms;
	}
	return (
		<View style={propertiesScreenStyles.propertyInfoContainer}>
			<CrossPlatformHeader
				title="PropertyInfo"
				backCallback={() => {
					navigate('Properties');
				}}
			/>
			<ScrollView style={{ flex: 1 }}>
				<View style={propertiesScreenStyles.propertyTitleContainer}>
					<Text style={propertiesScreenStyles.propertyTitle}>
						<Text
							style={propertiesScreenStyles.propertyHeadingText}
						>
							Building Name :{' '}
						</Text>
						{propertyInfo.name}
					</Text>
				</View>

				<View style={propertiesScreenStyles.maintainerContainer}>
					<Text style={propertiesScreenStyles.maintainerDetailsText}>
						Maintainer Details:{' '}
					</Text>
					<View
						style={propertiesScreenStyles.maintainerInfoContainer}
					>
						<Text style={propertiesScreenStyles.maintainerName}>
							Name: Shivam Gupta
						</Text>
						<Text style={propertiesScreenStyles.maintainerName}>
							Phone: +91 9876543210
						</Text>
					</View>
				</View>
				<View
					style={propertiesScreenStyles.roomsAndAddRoomBtnContainer}
				>
					<Text style={propertiesScreenStyles.roomsText}>
						Rooms:{' '}
					</Text>
					<View style={propertiesScreenStyles.addRoomBtnContainer}>
						<Button
							buttonStyle={{
								backgroundColor: '#FFF',
							}}
							titleStyle={{ color: '#109FDA' }}
							onPress={() =>
								navigate('UpdateRoomDetails', { propertyInfo })
							}
							title="Add Room"
							raised
						/>
					</View>
				</View>

				<View style={propertiesScreenStyles.roomsList}>
					{roomListData.map((item, i) => (
						<ListItem
							key={i}
							Component={TouchableOpacity}
							bottomDivider
							containerStyle={
								propertiesScreenStyles.listContainer
							}
							onPress={() => {
								navigation.navigate('RoomInfo', {
									singleRoomData: item,
									propertyInfo,
								});
							}}
						>
							<ListItem.Content>
								<ListItem.Title>
									Room No: {item.roomNo}
								</ListItem.Title>

								{item.tenants.length > 0 &&
									item.tenants.map((tenant) => {
										return (
											<View
												key={tenant._id}
												style={
													propertiesScreenStyles.tenantDetailContainer
												}
											>
												<View
													style={
														propertiesScreenStyles.tenantDetailContainerCol1
													}
												>
													<Text>{tenant.name}</Text>
												</View>
												<View
													style={
														propertiesScreenStyles.tenantDetailContainerCol2
													}
												>
													<Text>
														Due Date:{' '}
														{format(
															new Date(
																tenant.rentDueDate
															),
															'dd MMM yyyy'
														)}
													</Text>
												</View>
											</View>
										);
									})}
								{item.tenants.length === 0 && (
									<View style={{ marginTop: 10 }}>
										<Text>No Tenant added yet</Text>
									</View>
								)}
							</ListItem.Content>
						</ListItem>
					))}
				</View>
				<SnackBar
					visible={visible}
					text={text}
					onDismissSnackBar={onDismissSnackBar}
					onToggleSnackBar={onToggleSnackBar}
				/>
			</ScrollView>
		</View>
	);
};

export default PropertyInfoScreen;
