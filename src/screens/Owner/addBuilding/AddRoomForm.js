import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Checkbox } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import TextInputCommon from '../../../components/common/TextInputCommon';
import { validateRoomFields } from '../../../helpers/addBuildingValidation';
import { addRoomFormStyles } from './addRoomFormStyle';
import { saveRoomData, updateRoomData } from '../../../redux/actions';
import useSnack from '../../../components/common/useSnack';
import SnackBar from '../../../components/common/SnackBar';

const AddRoomForm = ({ floorCount, dismissAddRoomForm, roomDetail }) => {
	const [roomNo, setRoomNo] = useState('');
	const [roomType, setRoomType] = useState('');
	const [rent, setRent] = useState('');
	const [security, setSecurity] = useState('');
	const [isMultipleTenant, setIsMultipleTenant] = useState(false);
	const [floorNumber, setFloorNumber] = useState('');
	const [roomSizeInFt, setRoomSizeInFt] = useState('');
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

	useEffect(() => {
		if (roomDetail) {
			const {
				roomNo,
				bhk: roomType,
				rent,
				security,
				isMultipleTenant,
				floor: floorNumber,
				sizeInFt: roomSizeInFt,
			} = roomDetail;

			setRoomNo(roomNo);
			setRoomType(roomType);
			setRent(rent);
			setSecurity(security);
			setIsMultipleTenant(isMultipleTenant);
			setFloorNumber(floorNumber);
			setRoomSizeInFt(roomSizeInFt);
		}
	}, [roomDetail]);

	const handleAddAndUpdateRoom = () => {
		setLoader(true);
		const currentRoomData = {
			_id: new Date().getTime() + 'dean',
			roomNo,
			bhk: roomType,
			isMultipleTenant,
			floor: floorNumber,
			sizeInFt: roomSizeInFt,
		};
		if (!isMultipleTenant) {
			currentRoomData['rent'] = rent;
			currentRoomData['security'] = security;
		}

		// update room details
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
			// add room details
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

	return (
		<View>
			<View style={addRoomFormStyles.headerContainer}>
				<Text style={addRoomFormStyles.headerTxt}>
					{roomDetail ? 'Update room details' : 'Add room details'}
				</Text>
			</View>
			<View style={addRoomFormStyles.roomDetailContainer}>
				<View style={addRoomFormStyles.roomDetailCol1}>
					<TextInputCommon
						label="Room no"
						name="roomNo"
						onChangeText={(val) => setRoomNo(val)}
						value={roomNo}
						style={addRoomFormStyles.textItemStyle}
						inputStyle={addRoomFormStyles.inputStyle}
					/>
				</View>
				<View style={addRoomFormStyles.roomDetailCol2}>
					<TextInputCommon
						label="Room type"
						name="roomType"
						onChangeText={(val) => setRoomType(val)}
						value={roomType}
						style={addRoomFormStyles.textItemStyle}
						inputStyle={addRoomFormStyles.inputStyle}
						keyboardType="numeric"
					/>
				</View>
			</View>
			{!isMultipleTenant && (
				<View style={addRoomFormStyles.roomDetailContainer}>
					<View style={addRoomFormStyles.roomDetailCol1}>
						<TextInputCommon
							label="Rent"
							name="rent"
							onChangeText={(val) => setRent(val)}
							value={rent}
							style={addRoomFormStyles.textItemStyle}
							inputStyle={addRoomFormStyles.inputStyle}
							keyboardType="numeric"
						/>
					</View>
					<View style={addRoomFormStyles.roomDetailCol2}>
						<TextInputCommon
							label="Security"
							name="security"
							onChangeText={(val) => setSecurity(val)}
							value={security}
							style={addRoomFormStyles.textItemStyle}
							inputStyle={addRoomFormStyles.inputStyle}
							keyboardType="numeric"
						/>
					</View>
				</View>
			)}
			<View style={addRoomFormStyles.roomDetailContainer}>
				<View style={addRoomFormStyles.roomDetailCol1}>
					<TextInputCommon
						label="Room Size"
						name="rent"
						onChangeText={(val) => setRoomSizeInFt(val)}
						value={roomSizeInFt}
						style={addRoomFormStyles.textItemStyle}
						inputStyle={addRoomFormStyles.inputStyle}
						keyboardType="numeric"
					/>
				</View>
				<View style={addRoomFormStyles.roomDetailCol2}>
					<TextInputCommon
						label="Floor Number"
						name="floorNumber"
						onChangeText={(val) => setFloorNumber(val)}
						value={floorNumber}
						style={addRoomFormStyles.textItemStyle}
						inputStyle={addRoomFormStyles.inputStyle}
						keyboardType="numeric"
					/>
				</View>
			</View>
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
		</View>
	);
};
export default AddRoomForm;
