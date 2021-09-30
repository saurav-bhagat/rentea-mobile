import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';

import TextInputCommon from '../../../../components/common/TextInputCommon';
import { isValidTenantData } from '../../../../helpers/addTenantValidation';
import { addTenant } from '../../../../redux/actions/ownerActions/addTenantAction';
import { addTenantStyles } from './AddTenantStyles';
import SnackBar from '../../../../components/common/SnackBar';
import useSnack from '../../../../components/common/useSnack';
import CrossPlatformHeader from '../../../../components/common/CrossPlatformHeader';
import { navigate } from '../../../../navigation/rootNavigation';

const AddTenantScreen = ({ singleRoomData, propertyInfo, route }) => {
	const dispatch = useDispatch();

	if (route) {
		var { singleRoomData: roomData, propertyInfo: property } = route.params;
		var tenant = roomData.tenants[0];
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
			name,
			email,
			phoneNumber: phone,
			securityAmount: security,
			roomId: roomData._id,
			buildId: property._id,
		};
		if (isValidTenantData(tenantData)) {
			// console.log(tenantData);
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
						navigate('PropertyInfo');
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

					<TouchableOpacity
						style={addTenantStyles.submitButton}
						onPress={tenant ? updateTenantData : handleAddTenant}
					>
						<Text style={addTenantStyles.submitButton_text}>
							Submit
						</Text>
					</TouchableOpacity>
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
