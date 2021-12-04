import React, { useState } from 'react';
import {
	View,
	Text,
	ScrollView,
	ActivityIndicator,
	TextInput,
	StyleSheet,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Button } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

import TextInputCommon from '../../../components/common/TextInputCommon';
import { addBuildingFormstyles } from './addBuildingFormStyles';
import { validateRoomFields } from '../../../helpers/addBuildingValidation';
import { saveRoomData } from '../../../redux/actions';
import useSnack from '../../../components/common/useSnack';
import SnackBar from '../../../components/common/SnackBar';

DropDownPicker.setListMode('SCROLLVIEW');

const AddRoomForm = ({ floorCount }) => {
	const [roomNo, setRoomNo] = useState(null);
	const [rent, setRent] = useState(null);
	const [security, setSecurity] = useState(null);
	const [isMultipleTenant, setIsMultipleTenant] = useState(null);
	const [typeOpen, setTypeOpen] = useState(false);
	const [selectedType, setSelectedType] = useState(null);

	const [floorOpen, setFloorOpen] = useState(null);
	const [selectedFloor, setSelectedFloor] = useState(null);

	const [roomTypes, setRoomTypes] = useState([
		{ label: '1BHK', value: 1 },
		{ label: '2BHK', value: 2 },
		{ label: '3BHK', value: 2 },
		{ label: '1RK', value: 0.5 },
	]);
	const floorNums = [...Array(3).keys()];
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

	const handleMultipleTenant = (isChecked) => {
		setIsMultipleTenant(isChecked);
	};

	const currentRoomData = {
		roomNo,
		rent,
		security,
		sizeInFt: 3000,
		bhk: selectedType,
		isMultipleTenant,
		floor: selectedFloor,
	};

	const handleAddRoomClick = () => {
		console.log(currentRoomData);
		console.log('Floor count is: ', floorCount);
		if (validateRoomFields(currentRoomData, floorCount)) {
			// dispatch(saveRoomData(currentRoomData));
			setText(`Room ${roomNo} added in building`);
		} else {
			setText('Enter fields properly.');
		}
		setVisible(true);
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
		<ScrollView
			contentContainerStyle={addBuildingFormstyles.addRoomContainer}
		>
			<TextInputCommon
				label="Room Number"
				name="roomNo"
				onChangeText={(val) => setRoomNo(val)}
				style={addBuildingFormstyles.textItemStyle}
				inputStyle={addBuildingFormstyles.inputStyle}
			/>

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

			<BouncyCheckbox
				size={23}
				fillColor="#109ED9"
				unfillColor="#FFFFFF"
				text="Multiple Tenant"
				style={[
					{ marginTop: 18, paddingLeft: 5 },
					isMultipleTenant ? { marginBottom: 18 } : {},
				]}
				iconStyle={{ borderColor: 'black' }}
				textStyle={{
					textDecorationLine: 'none',
				}}
				onPress={(isChecked) => handleMultipleTenant(isChecked)}
			/>
			{!isMultipleTenant && (
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-around',
						marginVertical: 10,
					}}
				>
					<TextInput
						style={{
							height: 40,
							marginVertical: 12,
							marginRight: 12,
							borderBottomWidth: 0.6,
							padding: 10,
							flex: 1,
						}}
						onChangeText={(val) => setRent(val)}
						value={rent}
						placeholder="Rent (INR)"
						keyboardType="numeric"
					/>
					<TextInput
						style={{
							height: 40,
							marginVertical: 12,
							marginLeft: 12,
							borderBottomWidth: 0.6,
							padding: 10,
							flex: 1,
						}}
						onChangeText={(val) => setSecurity(val)}
						value={security}
						placeholder="Security (INR)"
						keyboardType="numeric"
					/>
				</View>
			)}

			<Button
				mode="contained"
				onPress={handleAddRoomClick}
				style={{
					backgroundColor: '#109ED9',
					width: '40%',
					marginTop: 12,
				}}
			>
				Add
			</Button>

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
