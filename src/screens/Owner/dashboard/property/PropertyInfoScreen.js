import React, { useEffect, useState } from 'react';
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

const PropertyInfoScreen = ({ route }) => {
	const { properties } = useSelector((state) => state.ownerDashbhoard);

	const [roomDataWithFloorNumber, setRoomDataWithFloorNumber] = useState([]);
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

	let { propertyInfo, buildingId, roomId } = route.params;
	let roomListData = propertyInfo.rooms;
	let tempRoomDataWithFloorNumber = [];

	// After navigate from addRoomSeperately action
	// and callBack from roomInfo screen
	if (buildingId) {
		propertyInfo = properties.ownerDashboardResult.buildings.filter(
			(building) => building._id === buildingId
		);
		propertyInfo = propertyInfo[0];
		roomListData = propertyInfo.rooms;
	}
	const setTempRoomDataWithFloorNo = () => {
		for (const roomData of roomListData) {
			const floorNo = parseInt([roomData.floor]);
			if (tempRoomDataWithFloorNumber[floorNo]) {
				tempRoomDataWithFloorNumber[floorNo].push(roomData);
			} else {
				tempRoomDataWithFloorNumber[floorNo] = [roomData];
			}
		}
		return tempRoomDataWithFloorNumber;
	};

	useEffect(() => {
		setRoomDataWithFloorNumber(setTempRoomDataWithFloorNo());
	}, [roomListData.length, buildingId, roomId]);

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
					<View style={propertiesScreenStyles.addRoomBtnContainer}>
						<Button
							buttonStyle={propertiesScreenStyles.addRoomBtn}
							titleStyle={propertiesScreenStyles.addRoomTitle}
							onPress={() =>
								navigate('UpdateRoomDetails', {
									propertyInfo,
								})
							}
							title="Add Room"
						/>
					</View>

					{roomDataWithFloorNumber.length > 0 ? (
						roomDataWithFloorNumber.map((roomDataWithFLoor, i) => {
							return (
								<View key={i}>
									<View
										style={
											propertiesScreenStyles.roomsAndAddRoomBtnContainer
										}
									>
										<Text
											style={
												propertiesScreenStyles.roomsText
											}
										>
											Floor {i}
										</Text>
									</View>

									<View
										style={propertiesScreenStyles.roomsList}
									>
										{roomDataWithFLoor.map((item, i) => (
											<ListItem
												key={i}
												Component={TouchableOpacity}
												bottomDivider
												containerStyle={
													propertiesScreenStyles.listContainer
												}
												onPress={() => {
													navigate('RoomInfo', {
														singleRoomData: item,
														propertyInfo,
													});
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
																	.length ===
																0
																	? 3
																	: 4,
														}}
													>
														<Text
															style={
																propertiesScreenStyles.roomNotTxt
															}
														>
															Room No{' '}
															{item.roomNo}
														</Text>
														{item.tenants.length >
															0 &&
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
																					Due
																					Date{' '}
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
													{item.tenants.length ===
														0 && (
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
						})
					) : (
						<View
							style={propertiesScreenStyles.plsAddRoomContainer}
						>
							<Text style={propertiesScreenStyles.plsAddRoomTxt}>
								Please add room using add room button
							</Text>
						</View>
					)}
					<SnackBar
						visible={visible}
						text={text}
						onDismissSnackBar={onDismissSnackBar}
						onToggleSnackBar={onToggleSnackBar}
					/>
				</View>
			</ScrollView>
		</View>
	);
};

export default PropertyInfoScreen;
