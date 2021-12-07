import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Checkbox } from 'react-native-paper';
import { Button } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import { useDispatch, useSelector } from 'react-redux';

import TextInputCommon from '../../../components/common/TextInputCommon';
import { validateRoomFields } from '../../../helpers/addBuildingValidation';
import { saveRoomData, updateRoomData } from '../../../redux/actions';
import useSnack from '../../../components/common/useSnack';
import SnackBar from '../../../components/common/SnackBar';
import { addRoomFormStyles } from './addRoomFormStyle';

DropDownPicker.setListMode('SCROLLVIEW');

const AddRoomForm = ({ floorCount, roomDetail, dismissAddRoomForm }) => {
	const [roomNo, setRoomNo] = useState(null);
	const [rent, setRent] = useState(null);
	const [security, setSecurity] = useState(null);
	const [isMultipleTenant, setIsMultipleTenant] = useState(null);
	const [selectedType, setSelectedType] = useState(null);
	const [selectedFloor, setSelectedFloor] = useState(null);

	const [roomTypes, setRoomTypes] = useState([
		{ label: '1BHK', value: 1 },
		{ label: '2BHK', value: 2 },
		{ label: '3BHK', value: 2 },
		{ label: '1RK', value: 0.5 },
	]);

	const floorNums = [...Array(floorCount + 1).keys()];

	const [floors, setFloors] = useState(
		floorNums.map((num) => {
			return { label: num.toString(), value: num };
		})
	);

	const {
		visible,
		text,
		setText,
		setVisible,
		onDismissSnackBar,
		onToggleSnackBar,
	} = useSnack();
	const dispatch = useDispatch();
	const [loader, setLoader] = useState(false);

	const currentRoomData = {
		roomNo,
		sizeInFt: 3000,
		bhk: selectedType,
		isMultipleTenant,
		floor: selectedFloor,
	};
	if (!isMultipleTenant) {
		currentRoomData['rent'] = rent;
		currentRoomData['security'] = security;
	}
	useEffect(() => {
		if (roomDetail) {
			const {
				roomNo,
				bhk: selectedType,
				rent,
				security,
				isMultipleTenant,
				floor: selectedFloor,
			} = roomDetail;

			setRoomNo(roomNo);
			setSelectedType(selectedType);
			setRent(rent);
			setSecurity(security);
			setIsMultipleTenant(isMultipleTenant);
			setSelectedFloor(selectedFloor);
		}
	}, [roomDetail]);

	const handleAddAndUpdateRoom = () => {
		setLoader(true);
		// Update room details
		if (roomDetail) {
			if (validateRoomFields(currentRoomData, floorCount)) {
				dispatch(updateRoomData(currentRoomData, roomDetail._id));
				setText(`Room  updated in building successfully!`);
				setVisible(true);
				setTimeout(() => {
					setLoader(false);
					dismissAddRoomForm();
				}, 1000);
			} else {
				setText('Enter fields properly.');
				setVisible(true);
				setLoader(false);
			}
		} else {
			// Add room details
			if (validateRoomFields(currentRoomData, floorCount)) {
				dispatch(saveRoomData(currentRoomData));
				setText(`Room ${roomNo} added in building`);
				setVisible(true);
				setTimeout(() => {
					setLoader(false);
					dismissAddRoomForm();
				}, 1000);
			} else {
				setText('Enter fields properly.');
				setVisible(true);
				setLoader(false);
			}
		}
	};

	const SelectRoomPlaceholder = {
		label: 'Select room type...',
		value: null,
		color: '#9EA0A4',
	};

	const SelectFloorPlaceholder = {
		label: 'Select floor...',
		value: null,
		color: '#9EA0A4',
	};

	return (
		<ScrollView contentContainerStyle={addRoomFormStyles.addRoomContainer}>
			<View style={addRoomFormStyles.headerContainer}>
				<Text style={addRoomFormStyles.headerTxt}>
					{roomDetail ? 'Update room details' : 'Add room details'}
				</Text>
			</View>
			<TextInputCommon
				label="Room Number"
				name="roomNo"
				value={roomNo}
				onChangeText={(val) => setRoomNo(val)}
				style={addRoomFormStyles.textItemStyle}
				inputStyle={addRoomFormStyles.inputStyle}
			/>
			{!isMultipleTenant && (
				<View style={addRoomFormStyles.rentSecurityContainer}>
					<TextInput
						style={addRoomFormStyles.rentTxtInptContainer}
						onChangeText={(val) => setRent(val)}
						value={rent}
						placeholder="Rent (INR)"
						keyboardType="numeric"
					/>
					<TextInput
						style={addRoomFormStyles.securityTxtInptContainer}
						onChangeText={(val) => setSecurity(val)}
						value={security}
						placeholder="Security (INR)"
						keyboardType="numeric"
					/>
				</View>
			)}
			<RNPickerSelect
				useNativeAndroidPickerStyle={false}
				onValueChange={(val) => setSelectedType(val)}
				items={roomTypes}
				value={selectedType}
				style={pickerSelectStyles}
				placeholder={SelectRoomPlaceholder}
			/>

			<RNPickerSelect
				useNativeAndroidPickerStyle={false}
				onValueChange={(val) => setSelectedFloor(val)}
				items={floors}
				value={selectedFloor}
				style={pickerSelectStyles}
				placeholder={SelectFloorPlaceholder}
			/>

			<View style={addRoomFormStyles.multipleTenantContainer}>
				<View style={{ flex: 1, paddingTop: 5 }}>
					<Text style={addRoomFormStyles.multipleTxt}>
						MultipleTenant
					</Text>
				</View>
				<View style={{ flex: 1 }}>
					<Checkbox
						status={isMultipleTenant ? 'checked' : 'unchecked'}
						onPress={() => setIsMultipleTenant(!isMultipleTenant)}
						color="#109ED9"
					/>
				</View>
			</View>

			<View style={addRoomFormStyles.addRoomBtnContainer}>
				<Button
					title={roomDetail ? 'Update room' : 'Add room'}
					buttonStyle={addRoomFormStyles.addRoomBtn}
					titleStyle={addRoomFormStyles.addRoomBtnTxt}
					onPress={handleAddAndUpdateRoom}
					loading={loader}
				/>
			</View>

			<SnackBar
				text={text}
				visible={visible}
				onDismissSnackBar={onDismissSnackBar}
				onToggleSnackBar={onToggleSnackBar}
			/>
		</ScrollView>
	);
};

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontSize: 16,
		paddingVertical: 12,
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 4,
		color: 'black',
		paddingRight: 30, // to ensure the text is never behind the icon
		marginVertical: 18,
	},
	inputAndroid: {
		fontSize: 16,
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderWidth: 0.5,
		borderColor: 'purple',
		borderRadius: 8,
		color: 'black',
		paddingRight: 30, // to ensure the text is never behind the icon
		marginVertical: 18,
	},
});

export default AddRoomForm;
