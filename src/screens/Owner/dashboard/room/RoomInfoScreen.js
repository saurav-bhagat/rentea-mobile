import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { format, intervalToDuration } from 'date-fns';
import { Provider, Portal, Modal } from 'react-native-paper';

import CrossPlatformHeader from '../../../../components/common/CrossPlatformHeader';
import { navigate } from '../../../../navigation/rootNavigation';
import RoomDetailsScreen from './RoomDetailsScreen';
import SnackBar from '../../../../components/common/SnackBar';
import useSnack from '../../../../components/common/useSnack';
import { roomInfoScreenStyles } from './RoomInfoStyle';
import AddRoomForm from '../../addBuilding/AddRoomForm';
import AddTenantScreen from '../tenant/AddTenantScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DeleteConfirmation from '../../../../components/common/DeleteConfirmation';
import { removeTenant } from '../../../../redux/actions/ownerActions/removeTenantAction';

const tenantAdded = 'tenant added successfully';
const roomUpdate = 'room updated successfully';
const tenantRemoved = 'Tenant removed successfully!';
const defaultState = 'default state';

const RoomInfoScreen = ({ route }) => {
	const dispatch = useDispatch();

	const { properties } = useSelector((state) => state.ownerDashbhoard);
	const { tenantMsg } = useSelector((state) => state.addTenantResponse);
	const { message: tenantRemoveResponse, error: removeTenantError } =
		useSelector((state) => state.removeTenantResponse);
	const { msg: updateRoomInfoMsg } = useSelector((state) => state.updateRoom);
	const [updateRoomModal, setUpdateRoomModal] = useState(false);
	const [addTenantModalFlag, setAddTenantModalFlag] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [tenantIdToDelete, setTenantIdToDelete] = useState(null);
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

		if (tenantRemoveResponse === tenantRemoved) {
			setVisible(true);
			setText(tenantRemoveResponse);
		} else if (removeTenantError) {
			setVisible(true);
			setText('Error while removing tenant.');
		}
	}, [tenantMsg, updateRoomInfoMsg, tenantRemoveResponse, removeTenantError]);

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
	let tempTenantWithRentAndMonth;

	// only show tenant rent which do not paid rent
	const filterTenantRentArray = (tenant) => {
		tempTenantWithRentAndMonth = tenant.rent.filter((t) => !t.isPaid);
	};
	return (
		<Provider>
			<ScrollView>
				<CrossPlatformHeader
					title="Room Details"
					backCallback={() => {
						navigate('PropertyInfo', { buildingId, roomId });
					}}
					profile={false}
				/>

				<>
					<RoomDetailsScreen
						singleRoomData={singleRoomData}
						propertyInfo={propertyInfo}
						setUpdateRoomModalFlag={() => setUpdateRoomModal(true)}
					/>
					{/* Modal for room details update */}
					<Portal>
						<Modal
							visible={updateRoomModal}
							onDismiss={() => setUpdateRoomModal(false)}
							contentContainerStyle={
								roomInfoScreenStyles.roomUpdateModalContainer
							}
						>
							<AddRoomForm
								addRoomSeparatelyFlag={true}
								dismissAddRoomForm={() =>
									setUpdateRoomModal(false)
								}
								floorCount={singleRoomData.floor}
								roomDetail={singleRoomData}
								buildingId={propertyInfo._id}
							/>
						</Modal>
					</Portal>

					{singleRoomData.isMultipleTenant && (
						<View style={roomInfoScreenStyles.addTenantContainer}>
							<Button
								title="Add Tenant"
								buttonStyle={roomInfoScreenStyles.addTenantBtn}
								titleStyle={roomInfoScreenStyles.addTenantTitle}
								onPress={() => setAddTenantModalFlag(true)}
								raised
							/>
						</View>
					)}
					{!singleRoomData.isMultipleTenant &&
						singleRoomData.tenants.length < 1 && (
							<View
								style={roomInfoScreenStyles.addTenantContainer}
							>
								<Button
									title="Add Tenant"
									buttonStyle={
										roomInfoScreenStyles.addTenantBtn
									}
									titleStyle={
										roomInfoScreenStyles.addTenantTitle
									}
									onPress={() => setAddTenantModalFlag(true)}
									raised
								/>
							</View>
						)}

					{/* Modal for add Tenant */}
					<Portal>
						<Modal
							visible={addTenantModalFlag}
							onDismiss={() => setAddTenantModalFlag(false)}
							contentContainerStyle={
								roomInfoScreenStyles.addTenantModalContainer
							}
						>
							<AddTenantScreen
								singleRoomData={singleRoomData}
								propertyInfo={propertyInfo}
								showAddTenantScreenFlag={true}
								dismissAddAndUpdateTenantModal={() =>
									setAddTenantModalFlag(false)
								}
							/>
						</Modal>
					</Portal>
					{/* Delete confirmation modal */}
					<Portal>
						<Modal
							visible={showDeleteModal}
							onDismiss={() => setShowDeleteModal(false)}
							contentContainerStyle={
								roomInfoScreenStyles.addTenantModalContainer
							}
						>
							<DeleteConfirmation
								onDismiss={() => setShowDeleteModal(false)}
								onConfirm={() =>
									dispatch(removeTenant(tenantIdToDelete))
								}
							/>
						</Modal>
					</Portal>

					{singleRoomData.tenants.length > 0 ? (
						singleRoomData.tenants.map((tenant, i) => {
							return (
								<ListItem
									key={i}
									Component={TouchableOpacity}
									bottomDivider
									containerStyle={
										roomInfoScreenStyles.cardStyle
									}
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
											<Text
												style={
													roomInfoScreenStyles.col1
												}
											>
												Tenant name{' '}
											</Text>
											<Text
												style={roomInfoScreenStyles.col}
											>
												{tenant.name}
											</Text>
										</View>

										{/* Hide due date tag in case of tenant.rent[lastItem].isPaid===true */}
										{!tenant.rent.every(
											(r) => r.isPaid === true
										) && (
											<View
												style={roomInfoScreenStyles.row}
											>
												<Text
													style={
														roomInfoScreenStyles.col1
													}
												>
													Due date :{' '}
												</Text>
												<View style={{ flex: 2 }}>
													{
														(filterTenantRentArray(
															tenant
														),
														tempTenantWithRentAndMonth.map(
															(r, i) => {
																return (
																	<Text
																		key={i}
																		style={{
																			textAlign:
																				'right',
																			marginTop: 10,
																		}}
																	>
																		{`${
																			r.amount
																		} rs  on ${format(
																			new Date(
																				r.rentDueDate
																			),
																			'dd MMM yyyy'
																		)}`}
																	</Text>
																);
															}
														))
													}
												</View>
											</View>
										)}
										<View>
											<MaterialIcons
												onPress={() => {
													setShowDeleteModal(true);
													setTenantIdToDelete(
														tenant._id
													);
												}}
												style={
													roomInfoScreenStyles.deleteIcon
												}
												name="delete-outline"
											/>
										</View>
									</ListItem.Content>
								</ListItem>
							);
						})
					) : (
						<View>
							<Text style={roomInfoScreenStyles.noTenantTxt}>
								No Tenants :)
							</Text>
						</View>
					)}

					<SnackBar
						visible={visible}
						text={text}
						onDismissSnackBar={onDismissSnackBar}
						onToggleSnackBar={onToggleSnackBar}
					/>
				</>
			</ScrollView>
		</Provider>
	);
};

export default RoomInfoScreen;
