import React, { useState, useEffect } from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import _ from 'lodash';
import { Provider, Portal, Modal } from 'react-native-paper';

import { tenantInfoStyles } from './TenantInfoStyles';
import { payWithCash } from '../../../../redux/actions/payment/payWithCashAction';
import { navigate } from '../../../../navigation/rootNavigation';
import CrossPlatformHeader from '../../../../components/common/CrossPlatformHeader';
import SnackBar from '../../../../components/common/SnackBar';
import useSnack from '../../../../components/common/useSnack';
import { setPayWithCashResponseForSnack } from '../../../../redux/actions/payment/payWithCashAction';
import AddTenantScreen from './AddTenantScreen';

const transactionSuccessMsg = 'Transaction successfull';
const tenantUpdate = 'tenant details updated successfully';
const defaultState = 'default state';

const TenantInfoScreen = ({ route }) => {
	const [tenantData, setTenantData] = useState();
	const [updateTenantModalFLag, setUpdateTenantModalFlag] = useState(false);
	const { loading, msg: payWithCashResponseMsg } = useSelector(
		(state) => state.payWithCash
	);
	const { msg: tenantUpdateMsg } = useSelector((state) => state.updateTenant);
	const { buildings } = useSelector(
		(state) => state.ownerDashbhoard.properties.ownerDashboardResult
	);
	const dispatch = useDispatch();
	const {
		visible,
		text,
		setVisible,
		setText,
		onToggleSnackBar,
		onDismissSnackBar,
	} = useSnack();

	let {
		singleRoomData,
		propertyInfo,
		tenant,
		roomId,
		buildingId,
		tenantUserId,
	} = route.params;

	let tempBuildingInfo, tempRoomInfo, tempTenantInfo;

	// This assignment is because in case of owner navigate back to
	// roomInfo without updating tenant Details or paywithcash.In this case buildingId and roomId
	// from params which is came from roomInfo screen is null
	// and we need it for navigate back to roomInfo screeen

	buildingId = propertyInfo._id;
	roomId = singleRoomData._id;

	// This filteration is play a role when user navigate from
	//  updateTenantDetails, paywithcash actions
	if (buildingId && roomId && tenantUserId) {
		tempBuildingInfo = _.filter(
			buildings,
			(building) => building._id === buildingId
		);
		propertyInfo = tempBuildingInfo[0];

		tempRoomInfo = _.filter(
			tempBuildingInfo[0].rooms,
			(room) => room._id === roomId
		);
		singleRoomData = tempRoomInfo[0];

		tempTenantInfo = _.filter(
			tempRoomInfo[0].tenants,
			(tenant) => tenant._id === tenantUserId
		);
	}

	useEffect(() => {
		if (tenant) {
			setTenantData(tenant);
		}
	}, [tenant]);
	useEffect(() => {
		if (tempTenantInfo) {
			setTenantData(tempTenantInfo[0]);
		}
	}, [tempTenantInfo && tempTenantInfo[0].paymentDetails]);

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
	}, [payWithCashResponseMsg, tenantUpdateMsg]);

	const handlePayWithCash = () => {
		dispatch(
			payWithCash({ tenant: tenantData, singleRoomData, propertyInfo })
		);
	};
	const showConfirmDialog = () => {
		return Alert.alert(
			'Are your sure?',
			'Are you sure you want to proceed?',
			[
				{
					text: 'Yes',
					onPress: () => {
						handlePayWithCash();
					},
				},

				{
					text: 'No',
				},
			]
		);
	};

	const handleTenantUpdate = () => {
		setUpdateTenantModalFlag(true);
	};

	if (!tenantData) {
		return (
			<View>
				<ActivityIndicator color="#109ED9" />
			</View>
		);
	} else {
		return (
			<Provider>
				{/* <CrossPlatformHeader
					title="TenantInfo"
					profile={false}
					backCallback={() => {
						navigate('RoomInfo', {
							singleRoomData,
							propertyInfo,
							buildingId,
							roomId,
						});
					}}
				/> */}

				<Card>
					<View style={tenantInfoStyles.updateTenantContainer}>
						<FontAwesome5
							onPress={handleTenantUpdate}
							style={tenantInfoStyles.iconStyle}
							name={'edit'}
						/>
					</View>

					<View style={tenantInfoStyles.row}>
						<Text style={tenantInfoStyles.col1}>Tenant Name</Text>
						<Text style={tenantInfoStyles.col}>
							{tenantData.name}
						</Text>
					</View>

					<View style={tenantInfoStyles.row}>
						<Text style={tenantInfoStyles.col1}>Email</Text>
						<Text style={tenantInfoStyles.col}>
							{tenantData.email}
						</Text>
					</View>
					<View style={tenantInfoStyles.row}>
						<Text style={tenantInfoStyles.col1}>Phone Number</Text>
						<Text style={tenantInfoStyles.col}>
							{tenantData.phoneNumber}
						</Text>
					</View>
					<View style={tenantInfoStyles.row}>
						<Text style={tenantInfoStyles.col1}>Address</Text>
						<Text style={tenantInfoStyles.col}>
							{propertyInfo.address}
						</Text>
					</View>

					<View style={tenantInfoStyles.row}>
						<Text style={tenantInfoStyles.col1}>Rent</Text>
						<Text style={tenantInfoStyles.col}>
							{tenantData.rent}
						</Text>
					</View>
					<View style={tenantInfoStyles.row}>
						<Text style={tenantInfoStyles.col1}>Security Fee</Text>
						<Text style={tenantInfoStyles.col}>
							{tenantData.securityAmount}
						</Text>
					</View>
					<View style={tenantInfoStyles.row}>
						<Text style={tenantInfoStyles.col1}>Join Date</Text>
						<Text style={tenantInfoStyles.col}>
							{format(
								new Date(tenantData.joinDate),
								'dd MMM yyyy'
							)}
						</Text>
					</View>
					<View style={tenantInfoStyles.row}>
						<Text style={tenantInfoStyles.col1}>Due Date</Text>
						<Text style={tenantInfoStyles.col}>
							{format(
								new Date(tenantData.rentDueDate),
								'dd MMM yyyy'
							)}
						</Text>
					</View>
					<Button
						title="Paid with cash"
						containerStyle={tenantInfoStyles.paidWithCashContainer}
						buttonStyle={tenantInfoStyles.paidWithCashBtn}
						titleStyle={tenantInfoStyles.paidWithCashTitle}
						onPress={showConfirmDialog}
						loading={loading}
						loadingProps={{ color: '#109ED9' }}
					/>
				</Card>
				{/* Modal for update Tenant */}
				<Portal>
					<Modal
						visible={updateTenantModalFLag}
						onDismiss={() => setUpdateTenantModalFlag(false)}
						contentContainerStyle={
							tenantInfoStyles.tenantUpdateModalContainer
						}
					>
						<AddTenantScreen
							singleRoomData={singleRoomData}
							propertyInfo={propertyInfo}
							showAddTenantScreenFlag={false}
							dismissAddAndUpdateTenantModal={() =>
								setUpdateTenantModalFlag(false)
							}
							tenantInfo={tenantData}
						/>
					</Modal>
				</Portal>

				<SnackBar
					visible={visible}
					text={text}
					onDismissSnackBar={onDismissSnackBar}
					onToggleSnackBar={onToggleSnackBar}
					// Todo : for now we statically fix its position
					// but when header is customize then we will fix it accordingly
					bottom={-70}
				/>
			</Provider>
		);
	}
};

export default TenantInfoScreen;
