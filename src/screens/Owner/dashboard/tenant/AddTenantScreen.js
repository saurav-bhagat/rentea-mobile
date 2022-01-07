import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { Button } from 'native-base';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';

import TextInputCommon from '../../../../components/common/TextInputCommon';
import { isValidTenantData } from '../../../../helpers/addTenantValidation';
import { addTenant } from '../../../../redux/actions/ownerActions/addTenantAction';
import { addTenantStyles } from './AddTenantStyles';
import SnackBar from '../../../../components/common/SnackBar';
import useSnack from '../../../../components/common/useSnack';
import CrossPlatformHeader from '../../../../components/common/CrossPlatformHeader';
import { navigate } from '../../../../navigation/rootNavigation';
import { updateTenantDetails } from '../../../../redux/actions/ownerActions/updateTenantAction';

const AddTenantScreen = ({ route }) => {
	const dispatch = useDispatch();
	const { error } = useSelector((state) => state.addTenantResponse);

	let loading, roomData, property, tenant, isMultipleTenant;
	const showAddTenantScreenFlag = route.params.showAddTenantScreenFlag;

	const { propertyInfo } = route.params;
	if (route) {
		roomData = route.params.singleRoomData;
		isMultipleTenant = roomData.isMultipleTenant;
		property = route.params.propertyInfo;
		tenant = route.params.tenantInfo;
	}
	if (showAddTenantScreenFlag) {
		loading = useSelector((state) => state.addTenantResponse.loading);
	} else {
		loading = useSelector((state) => state.updateTenant.loading);
	}

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [security, setSecurity] = useState('');
	const [rent, setRent] = useState('');

	const {
		text,
		visible,
		setText,
		setVisible,
		onDismissSnackBar,
		onToggleSnackBar,
	} = useSnack();

	const handleAddTenant = () => {
		let tenantData;
		if (isMultipleTenant) {
			tenantData = {
				name,
				email,
				phoneNumber: phone,
				securityAmount: security,
				roomId: roomData._id,
				buildId: propertyInfo._id,
				rent,
			};
		} else {
			tenantData = {
				name,
				email,
				phoneNumber: phone,
				securityAmount: security,
				roomId: roomData._id,
				buildId: propertyInfo._id,
			};
		}
		if (isValidTenantData(tenantData)) {
			dispatch(addTenant(tenantData));
		} else {
			setText('Enter fields properly');
			setVisible(true);
		}
	};
	const updateTenantData = () => {
		const tenantData = {
			_id: tenant._id,
			name,
			email,
			phoneNumber: phone,
			securityAmount: security,
			roomId: roomData._id,
			buildingId: propertyInfo._id,
		};
		if (isValidTenantData(tenantData)) {
			dispatch(updateTenantDetails(tenantData));
		} else {
			setText('Enter fields properly');
			setVisible(true);
		}
	};

	useEffect(() => {
		if (tenant && !showAddTenantScreenFlag) {
			setName(tenant.name);
			setPhone(tenant.phoneNumber);
			setEmail(tenant.email);
			setSecurity(tenant.securityAmount.toString());
		}
	}, [tenant]);

	useEffect(() => {
		if (error) {
			setVisible(true);
			setText(error.err);
		}
	}, [error]);

	const handleGoBack = () => {
		if (!showAddTenantScreenFlag) {
			navigate('TenantInfo', {
				singleRoomData: roomData,
				propertyInfo: property,
				tenant,
			});
		} else {
			navigate('RoomInfo', {
				singleRoomData: roomData,
				propertyInfo: property,
			});
		}
	};
	return (
		<View>
			<CrossPlatformHeader backCallback={handleGoBack} />

			<ScrollView contentContainerStyle={{ height: 700 }}>
				<View style={addTenantStyles.addTenantContainer}>
					<Text style={{ fontSize: 19 }}>
						{!showAddTenantScreenFlag
							? 'Update Tenant for Room'
							: 'Add Tenant for Room'}{' '}
						{tenant && roomData.roomNo}
					</Text>
					<TextInputCommon
						label="Tenant Name"
						name="tenantName"
						onChangeText={(val) => setName(val)}
						value={name}
						style={{ marginBottom: 30, marginTop: 20 }}
					/>
					<TextInputCommon
						label="Tenant Email"
						name="tenantEmail"
						onChangeText={(val) => setEmail(val)}
						value={email}
						style={{ marginBottom: 30 }}
					/>
					<TextInputCommon
						label="Tenant Phone"
						name="tenantPhone"
						onChangeText={(val) => setPhone(val)}
						value={phone}
						keyboardType="numeric"
						style={{ marginBottom: 30 }}
					/>
					<TextInputCommon
						label="Security Paid"
						name="securityPaid"
						onChangeText={(val) => setSecurity(val)}
						value={security}
						keyboardType="numeric"
						style={{ marginBottom: 30 }}
					/>
					{isMultipleTenant && showAddTenantScreenFlag && (
						<TextInputCommon
							label="Rent"
							name="rent"
							onChangeText={(val) => setRent(val)}
							value={rent}
							keyboardType="numeric"
							style={{ marginBottom: 30 }}
						/>
					)}
					<Button
						style={addTenantStyles.submitButton}
						onPress={
							!showAddTenantScreenFlag
								? updateTenantData
								: handleAddTenant
						}
					>
						{loading ? (
							<ActivityIndicator color="#ffffff" size="large" />
						) : (
							<Text style={addTenantStyles.submitButton_text}>
								Submit
							</Text>
						)}
					</Button>
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

export default AddTenantScreen;
