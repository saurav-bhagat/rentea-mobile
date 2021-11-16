import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import CrossPlatformHeader from '../../../../components/common/CrossPlatformHeader';
import { navigate } from '../../../../navigation/rootNavigation';

import TenantInfoScreen from '../tenant/TenantInfoScreen';
import RoomDetailsScreen from './RoomDetailsScreen';
import SnackBar from '../../../../components/common/SnackBar';
import useSnack from '../../../../components/common/useSnack';
import { setPayWithCashResponseForSnack } from '../../../../redux/actions/payment/payWithCashAction';

const RoomInfoScreen = ({ route }) => {
	const { properties } = useSelector((state) => state.ownerDashbhoard);
	const { msg: payWithCashResponseMsg } = useSelector(
		(state) => state.payWithCash
	);
	const {
		visible,
		text,
		setVisible,
		setText,
		onToggleSnackBar,
		onDismissSnackBar,
	} = useSnack();
	const dispatch = useDispatch();
	const { tenantMsg } = useSelector((state) => state.addTenantResponse);
	const { msg: tenantUpdateMsg } = useSelector((state) => state.updateTenant);
	const { msg: updateRoomInfoMsg } = useSelector((state) => state.updateRoom);

	let { singleRoomData, propertyInfo } = route.params;
	const { buildingId, roomId } = route.params;

	const tenantAdded = 'tenant added successfully';
	const transactionSuccessMsg = 'Transaction successfull';
	const tenantUpdate = 'tenant details updated successfully';
	const roomUpdate = 'room updated successfully';
	const defaultState = 'default state';

	useEffect(() => {
		if (payWithCashResponseMsg === transactionSuccessMsg) {
			setVisible(true);
			setText('Payment successfully updated');
			dispatch(setPayWithCashResponseForSnack());
		} else if (
			payWithCashResponseMsg &&
			payWithCashResponseMsg !== transactionSuccessMsg &&
			payWithCashResponseMsg !== ''
		) {
			console.log(
				'Error while paying with cash is ',
				payWithCashResponseMsg
			);
			setVisible(true);
			setText('Error while payment updation');
			dispatch(setPayWithCashResponseForSnack());
		} else if (tenantMsg === tenantAdded) {
			setVisible(true);
			setText('Tenant added successfully.');
		} else if (tenantMsg !== defaultState && tenantMsg !== tenantAdded) {
			console.log('tenant msg is ', tenantAdded, tenantMsg);
			setVisible(true);
			setText('Error while adding tenant.');
		} else if (tenantUpdateMsg === tenantUpdate) {
			setVisible(true);
			setText('Tenant Detail updated successfully.');
		} else if (
			tenantUpdateMsg !== defaultState &&
			tenantUpdateMsg !== tenantUpdate
		) {
			setVisible(true);
			setText('Error while updating tenant.');
		} else if (updateRoomInfoMsg === roomUpdate) {
			setVisible(true);
			setText('Room details updated successfully');
		} else if (
			updateRoomInfoMsg !== roomUpdate &&
			updateRoomInfoMsg !== defaultState
		) {
			setVisible(true);
			setText('Error while updating room info');
		}
	}, [payWithCashResponseMsg, tenantMsg, tenantUpdateMsg, updateRoomInfoMsg]);

	if (buildingId && roomId) {
		for (
			let buildingDataIndex = 0;
			buildingDataIndex <
			properties.ownerDashboardResult.buildings.length;
			buildingDataIndex++
		) {
			let buildingData =
				properties.ownerDashboardResult.buildings[buildingDataIndex];
			if (buildingData._id === buildingId) {
				propertyInfo = buildingData;
				break;
			}
		}
		if (propertyInfo) {
			let roomsData = propertyInfo.rooms;
			for (
				let roomDataIndex = 0;
				roomDataIndex < roomsData.length;
				roomDataIndex++
			) {
				let roomData = roomsData[roomDataIndex];
				if (roomData._id === roomId) {
					singleRoomData = roomData;
					break;
				}
			}
		}
	}

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
