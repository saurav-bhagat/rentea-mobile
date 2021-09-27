import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';

import TextInputCommon from '../../../../components/common/TextInputCommon';
import { isValidTenantData } from '../../../../helpers/addTenantValidation';
import { addTenant } from '../../../../redux/actions/ownerActions/addTenantAction';
import { addTenantStyles } from './AddTenantStyles';
import { Snackbar } from 'react-native-paper';

const AddTenantScreen = ({ singleRoomData, propertyInfo }) => {
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [security, setSecurity] = useState('');

	const [visible, setVisible] = useState(false);
	const [snackText, setSnackText] = useState('');
	const onToggleSnackBar = () => setVisible(!visible);
	const onDismissSnackBar = () => {
		setVisible(false);
	};

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
			setSnackText('Enter fields properly');
			setVisible(true);
		}
	};

	return (
		<KeyboardAwareScrollView>
			<View style={addTenantStyles.addTenantContainer}>
				<Text style={{ fontSize: 19 }}>
					Add Tenant for Room {singleRoomData.roomNo}
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
					onPress={handleAddTenant}
				>
					<Text style={addTenantStyles.submitButton_text}>
						Submit
					</Text>
				</TouchableOpacity>
			</View>
			<Snackbar
				visible={visible}
				onDismiss={onDismissSnackBar}
				action={{
					label: 'OK!',
					onPress: () => {
						onToggleSnackBar();
					},
				}}
				duration={3000}
				style={{ backgroundColor: '#000', bottom: 50 }}
			>
				{snackText}
			</Snackbar>
		</KeyboardAwareScrollView>
	);
};

export default AddTenantScreen;
