import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Checkbox } from 'react-native-paper';
import { Button } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import { useDispatch, useSelector } from 'react-redux';

import TextInputCommon from '../../../components/common/TextInputCommon';
import {
	validateRoomFields,
	validateRoomFieldsForUpdate,
} from '../../../helpers/addBuildingValidation';
import { saveRoomData, updateRoomData } from '../../../redux/actions';
import useSnack from '../../../components/common/useSnack';
import SnackBar from '../../../components/common/SnackBar';
import { addRoomFormStyles } from './addRoomFormStyle';
import { addRoomSeparately } from '../../../redux/actions/ownerActions/addRoomSeparately';
import { updateRoomDetail } from '../../../redux/actions/ownerActions/updateRoomAction';
DropDownPicker.setListMode('SCROLLVIEW');

const AddRoomForm = ({
	floorCount,
	roomDetail,
	dismissAddRoomForm,
	addRoomSeparatelyFlag,
	ownerId,
	buildingId,
}) => {
	const [roomNo, setRoomNo] = useState(null);
	const [rent, setRent] = useState(null);
	const [security, setSecurity] = useState(null);
	const [isMultipleTenant, setIsMultipleTenant] = useState(false);
	const [selectedType, setSelectedType] = useState(null);
	const [selectedFloor, setSelectedFloor] = useState(null);
	const [roomSize, setRoomSize] = useState(null);
	const [roomTypes, setRoomTypes] = useState([
		{ label: '1BHK', value: 1 },
		{ label: '2BHK', value: 2 },
		{ label: '3BHK', value: 2 },
		{ label: '1RK', value: 0.5 },
	]);

	const floorNums = [...Array(parseInt(floorCount) + 1).keys()];
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
		_id: new Date().getTime() + 'dean_winchester',
		roomNo,
		roomSize,
		roomType: selectedType,
		isMultipleTenant,
		floor: selectedFloor,
	};
	if (!isMultipleTenant) {
		currentRoomData['rent'] = rent;
		currentRoomData['security'] = security;
	}
	// for room update
	if (rent) {
		currentRoomData['rent'] = rent;
	}
	useEffect(() => {
		if (roomDetail) {
			let {
				roomNo,
				// It came from  redux
				roomType,
				// It came from db
				type,
				rent,
				security,
				isMultipleTenant,
				floor,
				roomSize,
			} = roomDetail;
			let rentOfRoomIncludingAllTenant = 0;
			roomDetail?.tenants?.forEach((tenant) => {
				tenant?.rent.forEach((r) => {
					if (!r.isPaid) {
						rentOfRoomIncludingAllTenant += r?.amount;
					}
				});
			});
			rent = rent?.toString();
			if (!roomType) {
				roomType = parseInt(type.split('')[0]);
			}
			if (typeof floor === 'string') {
				floor = parseInt(floor);
			}
			// Todo: Once we integrate security in backend then we ill remove this
			if (!security) {
				security = rent;
			}
			setRoomNo(roomNo);
			setSelectedType(roomType);
			setRent(rentOfRoomIncludingAllTenant.toString());
			setSecurity(security);
			setIsMultipleTenant(isMultipleTenant);
			setSelectedFloor(floor);
			setRoomSize(roomSize);
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
	const handleAddAndUpdateRoomSeperately = () => {
		delete currentRoomData._id;
		const roomData = {
			ownerId,
			buildingId,
			rooms: [{ ...currentRoomData, type: selectedType }],
		};

		if (!roomDetail) {
			// adding room seperately
			if (validateRoomFields(currentRoomData, selectedFloor)) {
				dispatch(addRoomSeparately(roomData));
				setText(`Room ${roomNo} added successfully`);
				setVisible(true);
				setTimeout(() => {
					setLoader(false);
					dismissAddRoomForm();
				}, 1000);
			} else {
				setText('Enter fields properly.');
				setVisible(true);
			}
		} else {
			// update room seperately
			const roomData = {
				roomId: roomDetail._id,
				...currentRoomData,
			};

			if (validateRoomFieldsForUpdate(roomData)) {
				//TODO: floor number shouldn't be updated to more than the capacity of building
				dispatch(updateRoomDetail(roomData, buildingId));
				setText(`Room ${roomNo} updated successfully`);
				setVisible(true);
				setTimeout(() => {
					setLoader(false);
					dismissAddRoomForm();
				}, 1000);
			} else {
				setText('Enter fields properly');
				setVisible(true);
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
			<View style={addRoomFormStyles.row}>
				<View style={addRoomFormStyles.col}>
					<TextInputCommon
						label="Room no"
						name="roomNo"
						value={roomNo}
						onChangeText={(val) => setRoomNo(val)}
						style={addRoomFormStyles.textItemStyle}
						inputStyle={{}}
						keyboardType="numeric"
					/>
				</View>
				<View style={addRoomFormStyles.col}>
					<TextInputCommon
						label="Room size(in sq ft)"
						name="roomSize"
						value={roomSize}
						onChangeText={(val) => setRoomSize(val)}
						style={addRoomFormStyles.textItemStyle}
						inputStyle={addRoomFormStyles.inputStyle}
						keyboardType="numeric"
					/>
				</View>
			</View>

			{!isMultipleTenant && (
				<View style={addRoomFormStyles.row}>
					<View style={addRoomFormStyles.col}>
						<TextInputCommon
							label="Rent"
							name="rent"
							value={rent}
							onChangeText={(val) => setRent(val)}
							style={addRoomFormStyles.textItemStyle}
							inputStyle={{}}
							keyboardType="numeric"
						/>
					</View>
					<View style={addRoomFormStyles.col}>
						<TextInputCommon
							label="Security/Advance"
							name="security"
							value={security}
							onChangeText={(val) => setSecurity(val)}
							style={addRoomFormStyles.textItemStyle}
							inputStyle={addRoomFormStyles.inputStyle}
							keyboardType="numeric"
						/>
					</View>
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

			<Text>*Consider Floor 0 as Ground floor.</Text>

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
					onPress={
						!addRoomSeparatelyFlag
							? handleAddAndUpdateRoom
							: handleAddAndUpdateRoomSeperately
					}
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

export const pickerSelectStyles = StyleSheet.create({
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
