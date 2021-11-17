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

const tenantAdded = 'tenant added successfully';
const transactionSuccessMsg = 'Transaction successfull';
const tenantUpdate = 'tenant details updated successfully';
const roomUpdate = 'room updated successfully';
const defaultState = 'default state';

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

	let { singleRoomData, propertyInfo, buildingId, roomId } = route.params;

	useEffect(() => {
		//  Integrating Snack after payingWithCash
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
		}

		//  Integrating Snack  after adding tenant
		if (tenantMsg === tenantAdded) {
			setVisible(true);
			setText('Tenant added successfully.');
		} else if (tenantMsg !== defaultState && tenantMsg !== tenantAdded) {
			console.log('tenant msg is ', tenantAdded, tenantMsg);
			setVisible(true);
			setText('Error while adding tenant.');
		}

		//   Integrating Snack after updating tenantDetails
		if (tenantUpdateMsg === tenantUpdate) {
			setVisible(true);
			setText('Tenant Detail updated successfully.');
		} else if (
			tenantUpdateMsg !== defaultState &&
			tenantUpdateMsg !== tenantUpdate
		) {
			setVisible(true);
			setText('Error while updating tenant.');
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
	}, [payWithCashResponseMsg, tenantMsg, tenantUpdateMsg, updateRoomInfoMsg]);

	// when navigating after adding tenant (addTenantAction),
	// updating tenant (updateTenantAction),
	// updating roomInfo (updateRoomInfoAction) and
	// payWithCash (payWithCashAction).
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
