import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
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

const AddTenantScreen = ({ singleRoomData, propertyInfo, route }) => {
	const dispatch = useDispatch();

	if (route) {
		var { singleRoomData: roomData, propertyInfo: property } = route.params;
		var tenant = roomData.tenants[0];
		var { loading } = useSelector((state) => state.updateTenant);
	} else {
		var { loading } = useSelector((state) => state.addTenantResponse);
	}

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [security, setSecurity] = useState('');

	const {
		text,
		visible,
		setText,
		setVisible,
		onDismissSnackBar,
		onToggleSnackBar,
	} = useSnack();

	const handleAddTenant = () => {
		const tenantData = {
			name,
			email,
			phoneNumber: phone,
			securityAmount: security,
			roomId: singleRoomData._id,
			buildId: propertyInfo._id,
		};
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
		};
		if (isValidTenantData(tenantData)) {
			dispatch(updateTenantDetails(tenantData));
		} else {
			setText('Enter fields properly');
			setVisible(true);
		}
	};

	useEffect(() => {
		if (tenant) {
			setName(tenant.name);
			setPhone(tenant.phoneNumber);
			setEmail(tenant.email);
			setSecurity(tenant.securityAmount.toString());
		}
	}, [tenant]);

	return (
		<View>
			{tenant && (
				<CrossPlatformHeader
					title="TenantInfo"
					backCallback={() => {
						navigate('RoomInfo', {
							singleRoomData: roomData,
							propertyInfo: property,
						});
					}}
				/>
			)}
			<KeyboardAwareScrollView style={{ minHeight: '100%' }}>
				<View style={addTenantStyles.addTenantContainer}>
					<Text style={{ fontSize: 19 }}>
						{tenant
							? 'Update Tenant for Room'
							: 'Add Tenant for Room'}{' '}
						{tenant ? roomData.roomNo : singleRoomData.roomNo}
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

					<Button
						style={addTenantStyles.submitButton}
						onPress={tenant ? updateTenantData : handleAddTenant}
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
			</KeyboardAwareScrollView>
		</View>
	);
};

export default AddTenantScreen;
