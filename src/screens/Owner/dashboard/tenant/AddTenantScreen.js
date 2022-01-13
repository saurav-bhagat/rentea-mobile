import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

import { useDispatch, useSelector } from 'react-redux';

import TextInputCommon from '../../../../components/common/TextInputCommon';
import { isValidTenantData } from '../../../../helpers/addTenantValidation';
import { addTenant } from '../../../../redux/actions/ownerActions/addTenantAction';
import { addTenantStyles } from './AddTenantStyles';
import SnackBar from '../../../../components/common/SnackBar';
import useSnack from '../../../../components/common/useSnack';

import { updateTenantDetails } from '../../../../redux/actions/ownerActions/updateTenantAction';

const AddTenantScreen = ({
	singleRoomData,
	propertyInfo,
	showAddTenantScreenFlag,
	tenantInfo,
	dismissAddAndUpdateTenantModal,
}) => {
	const dispatch = useDispatch();
	const { error } = useSelector((state) => state.addTenantResponse);

	let loading;
	let roomData = singleRoomData;
	let property = propertyInfo;
	let tenant = tenantInfo;
	let isMultipleTenant = roomData.isMultipleTenant;

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
			setTimeout(() => {
				dismissAddAndUpdateTenantModal();
			}, 1000);
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
			rent,
		};
		if (isValidTenantData(tenantData)) {
			dispatch(updateTenantDetails(tenantData));
			setTimeout(() => {
				dismissAddAndUpdateTenantModal();
			}, 1000);
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
			const tempRent = singleRoomData.isMultipleTenant
				? tenant.rent
				: singleRoomData.rent;
			setRent(tempRent.toString());
		}
	}, [tenant]);

	useEffect(() => {
		if (error) {
			setVisible(true);
			setText(error.err);
		}
	}, [error]);

	return (
		<View>
			<ScrollView contentContainerStyle={{}}>
				<View style={addTenantStyles.addTenantContainer}>
					<Text
						style={{
							fontSize: 19,
							textAlign: 'center',
							marginBottom: 20,
						}}
					>
						{!showAddTenantScreenFlag
							? 'Update Tenant for Room'
							: 'Add Tenant for Room'}{' '}
						{roomData.roomNo}
					</Text>
					<View style={addTenantStyles.row}>
						<View style={addTenantStyles.col}>
							<TextInputCommon
								label="Tenant Name"
								name="tenantName"
								onChangeText={(val) => setName(val)}
								value={name}
							/>
						</View>
						<View style={addTenantStyles.col}>
							<TextInputCommon
								label="Tenant Email"
								name="tenantEmail"
								onChangeText={(val) => setEmail(val)}
								value={email}
							/>
						</View>
					</View>
					<View style={addTenantStyles.row}>
						<View style={addTenantStyles.col}>
							<TextInputCommon
								label="Tenant Phone"
								name="tenantPhone"
								onChangeText={(val) => setPhone(val)}
								value={phone}
								keyboardType="numeric"
								style={{ marginTop: 25 }}
							/>
						</View>
						<View style={addTenantStyles.col}>
							<TextInputCommon
								label="Security Paid"
								name="securityPaid"
								onChangeText={(val) => setSecurity(val)}
								value={security}
								keyboardType="numeric"
								style={{ marginTop: 25 }}
							/>
						</View>
					</View>

					{((isMultipleTenant && showAddTenantScreenFlag) ||
						(isMultipleTenant && !showAddTenantScreenFlag) ||
						(!isMultipleTenant && !showAddTenantScreenFlag)) && (
						<View style={addTenantStyles.row}>
							<View style={addTenantStyles.col}>
								<TextInputCommon
									label="Rent"
									name="rent"
									onChangeText={(val) => setRent(val)}
									value={rent}
									keyboardType="numeric"
									style={{ marginTop: 25 }}
								/>
							</View>
							<View style={addTenantStyles.col}></View>
						</View>
					)}
					<View style={addTenantStyles.row}>
						<View style={addTenantStyles.col}>
							<Button
								title={
									!showAddTenantScreenFlag ? 'Update' : 'Add'
								}
								buttonStyle={addTenantStyles.submitButton}
								titleStyle={addTenantStyles.submitButton_text}
								onPress={
									!showAddTenantScreenFlag
										? updateTenantData
										: handleAddTenant
								}
								loading={loading}
							/>
						</View>
						<View style={addTenantStyles.col}></View>
					</View>
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
