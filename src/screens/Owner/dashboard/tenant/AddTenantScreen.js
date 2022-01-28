import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

import { useDispatch, useSelector } from 'react-redux';

import TextInputCommon from '../../../../components/common/TextInputCommon';
import { isValidTenantData } from '../../../../helpers/addTenantValidation';
import { addTenant } from '../../../../redux/actions/ownerActions/addTenantAction';
import { addTenantStyles } from './AddTenantStyles';
import SnackBar from '../../../../components/common/SnackBar';
import useSnack from '../../../../components/common/useSnack';

import { updateTenantDetails } from '../../../../redux/actions/ownerActions/updateTenantAction';
import { Input, Item, Label } from 'native-base';

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
	const [monthEndOne, setMonthEndOne] = useState(false);
	const [date, setDate] = useState(new Date());
	const [showDatePicker, setShowDatePicker] = useState(false);

	const onDateChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setShowDatePicker(Platform.OS === 'ios');
		setDate(currentDate);
	};

	const {
		text,
		visible,
		setText,
		setVisible,
		onDismissSnackBar,
		onToggleSnackBar,
	} = useSnack();

	const handleAddTenant = () => {
		let tenantData = {
			name,
			email,
			phoneNumber: phone,
			securityAmount: security,
			roomId: roomData._id,
			buildId: propertyInfo._id,
			rent: isMultipleTenant ? rent : roomData.rent,
		};

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
			oldRent: tenant.rent,
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
			setRent(tenant.rent.toString());
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
			{/* <CrossPlatformHeader backCallback={handleGoBack} /> */}
			<ScrollView contentContainerStyle={{ height: 700 }}>
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
							<Item
								floatingLabel
								style={{ borderColor: '#666', marginTop: 25 }}
							>
								<Label style={{ fontSize: 13 }}>
									Rent starting date:
								</Label>
								<Input
									onTouchStart={() => setShowDatePicker(true)}
									name="rentStartDate"
									style={{ marginTop: 25 }}
									value={date.toLocaleDateString()}
								/>
							</Item>
							{showDatePicker && (
								<DateTimePicker
									testID="dateTimePicker"
									value={date}
									mode="date"
									is24Hour={true}
									display="default"
									onChange={onDateChange}
								/>
							)}
						</View>
					</View>

					<View style={addTenantStyles.row}>
						<View
							style={[
								addTenantStyles.col,
								{ marginTop: 20 },
								{ display: 'flex' },
								{ alignItems: 'center' },
							]}
						>
							<Text style={addTenantStyles.rentDateEndText}>
								By default join date will be considered as end
								of month, if you want start of every month i.e.
								1st to be month end. Please check this below
								field:
							</Text>
							<CheckBox
								containerStyle={
									addTenantStyles.checkoxContainer
								}
								center
								title="Choose 1st as month end."
								checked={monthEndOne}
								onPress={() => setMonthEndOne(!monthEndOne)}
							/>
						</View>
					</View>
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
