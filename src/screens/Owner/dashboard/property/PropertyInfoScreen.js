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

import SVGRoom from '../../../../../assets/icons/roomIcon.svg';

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
	let roomDataWithFloorNumber = [];

	const setRoomDataWithFloorNo = () => {
		for (const roomData of roomListData) {
			const floorNo = parseInt([roomData.floor]);
			roomDataWithFloorNumber[floorNo] = [];
			for (const roomDataInfo of roomListData) {
				if (floorNo === parseInt([roomDataInfo.floor])) {
					roomDataWithFloorNumber[floorNo].push(roomDataInfo);
				}
			}
		}
	};

	// Filtering room data with floor number
	setRoomDataWithFloorNo();

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
		setRoomDataWithFloorNo();
	}
	return (
		<View style={propertiesScreenStyles.propertyInfoContainer}>
			<CrossPlatformHeader
				title=""
				backCallback={() => {
					navigate('Properties');
				}}
				profile={false}
			/>
			<ScrollView>
				<View style={{ marginTop: 10 }}>
					{roomDataWithFloorNumber.map((roomDataWithFLoor, i) => {
						return (
							<View key={i}>
								<View
									style={
										propertiesScreenStyles.roomsAndAddRoomBtnContainer
									}
								>
									<Text
										style={propertiesScreenStyles.roomsText}
									>
										Floor {i}
									</Text>
									<View
										style={
											propertiesScreenStyles.addRoomBtnContainer
										}
									>
										<Button
											buttonStyle={
												propertiesScreenStyles.addRoomBtn
											}
											titleStyle={
												propertiesScreenStyles.addRoomTitle
											}
											onPress={() =>
												navigate('UpdateRoomDetails', {
													propertyInfo,
												})
											}
											title="Add Room"
										/>
									</View>
								</View>

								<View style={propertiesScreenStyles.roomsList}>
									{roomDataWithFLoor.map((item, i) => (
										<ListItem
											key={i}
											Component={TouchableOpacity}
											bottomDivider
											containerStyle={
												propertiesScreenStyles.listContainer
											}
											onPress={() => {
												navigation.navigate(
													'RoomInfo',
													{
														singleRoomData: item,
														propertyInfo,
													}
												);
											}}
										>
											<ListItem.Content
												style={
													propertiesScreenStyles.roomInfoContainer
												}
											>
												<View
													style={
														propertiesScreenStyles.roomInfoContainerRow1
													}
												>
													<SVGRoom />
												</View>
												<View
													style={{
														flex:
															item.tenants
																.length === 0
																? 3
																: 4,
													}}
												>
													<Text
														style={
															propertiesScreenStyles.roomNotTxt
														}
													>
														Room No {item.roomNo}
													</Text>
													{item.tenants.length > 0 &&
														item.tenants.map(
															(tenant) => {
																return (
																	<View
																		key={
																			tenant._id
																		}
																	>
																		<View
																			style={
																				propertiesScreenStyles.tenantDetailContainerCol1
																			}
																		>
																			<Text
																				style={{
																					color: '#979797',
																				}}
																			>
																				{
																					tenant.name
																				}{' '}
																				|
																				Due{' '}
																				{format(
																					new Date(
																						tenant.rentDueDate
																					),
																					'dd/MM/YYY'
																				)}
																			</Text>
																		</View>
																	</View>
																);
															}
														)}
												</View>
												{item.tenants.length === 0 && (
													<View
														style={
															propertiesScreenStyles.roomInfoContainerRow3
														}
													>
														<Text
															style={
																propertiesScreenStyles.vaccantTxt
															}
														>
															Vaccant
														</Text>
													</View>
												)}
											</ListItem.Content>
										</ListItem>
									))}
								</View>
							</View>
						);
					})}
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
