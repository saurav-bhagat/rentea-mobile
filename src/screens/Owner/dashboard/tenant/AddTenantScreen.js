import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';

import TextInputCommon from '../../../../components/common/TextInputCommon';
import { isValidTenantData } from '../../../../helpers/addTenantValidation';
import { addTenant } from '../../../../redux/actions/ownerActions/addTenantAction';
import { addTenantStyles } from './AddTenantStyles';
import SnackBar from '../../../../components/common/SnackBar';
import useSnack from '../../../../components/common/useSnack';

const AddTenantScreen = ({ singleRoomData, propertyInfo }) => {
	const dispatch = useDispatch();

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

	return (
		<KeyboardAwareScrollView style={{ minHeight: '100%' }}>
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
			<SnackBar
				visible={visible}
				text={text}
				onDismissSnackBar={onDismissSnackBar}
				onToggleSnackBar={onToggleSnackBar}
			/>
		</KeyboardAwareScrollView>
	);
};

export default AddTenantScreen;
