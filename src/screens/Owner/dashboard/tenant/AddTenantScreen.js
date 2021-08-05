import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import TextInputCommon from '../../../../components/common/TextInputCommon';
import { isValidTenantData } from '../../../../helpers/addTenantValidation';
import { addTenantStyles } from './AddTenantStyles';

const AddTenantScreen = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [security, setSecurity] = useState('');

	const handleAddTenant = () => {
		const tenantData = {
			name,
			email,
			phoneNumber: phone,
			securityAmount: security,
		};
		if (isValidTenantData(tenantData)) {
			console.log('dispatch action to register tenant here!');
		} else {
			alert('Enter fields Properly');
		}
	};

	return (
		<View style={addTenantStyles.addTenantContainer}>
			<Text style={{ fontSize: 19 }}>Add Tenant to this Room</Text>
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
				<Text style={addTenantStyles.submitButton_text}>Submit</Text>
			</TouchableOpacity>
		</View>
	);
};

export default AddTenantScreen;
