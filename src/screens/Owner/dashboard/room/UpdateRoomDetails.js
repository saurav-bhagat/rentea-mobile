import React, { useState, useEffect } from 'react';
import {
	Text,
	View,
	ActivityIndicator,
	Switch,
	ScrollView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-elements';
import CrossPlatformHeader from '../../../../components/common/CrossPlatformHeader';
import SnackBar from '../../../../components/common/SnackBar';
import TextInputCommon from '../../../../components/common/TextInputCommon';
import useSnack from '../../../../components/common/useSnack';
import {
	validateRoomFieldsForAddition,
	validateRoomFieldsForUpdate,
} from '../../../../helpers/addBuildingValidation';
import { navigate } from '../../../../navigation/rootNavigation';
import { updateRoomDetail } from '../../../../redux/actions/ownerActions/updateRoomAction';
import { addRoomSeparately } from '../../../../redux/actions/ownerActions/addRoomSeparately';
import { updateRoomDetailsStyle } from './UpdateRoomDetailsStyle';

export default function UpdateRoomDetails({ route }) {
	const dispatch = useDispatch();

	const singleRoomData = route.params?.singleRoomData;
	const propertyInfo = route.params?.propertyInfo;
	let loading = useSelector((state) => state.updateRoom.loading);
	const addRoomLoading = useSelector(
		(state) => state.addRoomSeparately.loading
	);
	const ownerId = useSelector(
		(state) => state.auth.userInfo.userDetails.ownerId
	);

	const [roomNO, setRoomNO] = useState('');
	const [rentAmount, setRentAmount] = useState('');
	const [roomSize, setRoomSize] = useState('');
	const [floorNo, setFloorNo] = useState('');
	const [BHK, setBHK] = useState('');
	const [isMultipleTenant, setIsMultipleTenant] = useState(false);

	const toggleSwitch = () =>
		setIsMultipleTenant((previousState) => !previousState);

	const {
		text,
		visible,
		setText,
		setVisible,
		onDismissSnackBar,
		onToggleSnackBar,
	} = useSnack();

	const updateRoomData = () => {
		const roomData = {
			roomId: singleRoomData._id,
			roomNo: roomNO,
			rent: parseInt(rentAmount),
			roomSize,
			floor: floorNo,
			roomType: BHK + 'bhk',
			isMultipleTenant,
		};

		const dataForValidation = JSON.parse(JSON.stringify(roomData));
		dataForValidation.roomType = BHK;
		dataForValidation.rent = rentAmount.toString();
		if (validateRoomFieldsForUpdate(dataForValidation)) {
			//TODO: floor number shouldn't be updated to more than the capacity of building
			dispatch(
				updateRoomDetail(roomData, (buildingId = propertyInfo._id))
			);
		} else {
			setText('Enter fields properly');
			setVisible(true);
		}
	};

	const addRoomToBuilding = () => {
		const roomData = {
			ownerId: ownerId,
			buildingId: propertyInfo._id,
			rooms: [
				{
					rent: parseInt(rentAmount),
					type: BHK + 'bhk',
					floor: floorNo,
					roomNo: roomNO,
					roomSize: roomSize,
					isMultipleTenant,
				},
			],
		};
		const dataForValidation = JSON.parse(JSON.stringify(roomData));

		dataForValidation.rooms[0].type = BHK;
		dataForValidation.rooms[0].rent = rentAmount.toString();

		if (validateRoomFieldsForAddition(dataForValidation)) {
			dispatch(addRoomSeparately(roomData));
		} else {
			setText('Enter fields properly');
			setVisible(true);
		}
	};

	useEffect(() => {
		if (singleRoomData) {
			setRoomNO(singleRoomData.roomNo);
			setRentAmount(singleRoomData.rent.toString());
			setRoomSize(singleRoomData.roomSize);
			setFloorNo(singleRoomData.floor);
			setBHK(singleRoomData.type.split('')[0]);
			setIsMultipleTenant(singleRoomData.isMultipleTenant);
		}
	}, [singleRoomData]);
	return (
		<ScrollView>
			{singleRoomData ? (
				<CrossPlatformHeader
					title="Update Room"
					backCallback={() => {
						navigate('RoomInfo', {
							singleRoomData,
							propertyInfo,
						});
					}}
				/>
			) : (
				<CrossPlatformHeader
					title="Add Room"
					backCallback={() => {
						navigate('PropertyInfo');
					}}
				/>
			)}

			<KeyboardAwareScrollView>
				<View style={updateRoomDetailsStyle.updateRoomContainer}>
					<Text style={{ fontSize: 19 }}>
						{' '}
						{singleRoomData
							? 'Update Room Details'
							: 'Add Room Details'}{' '}
					</Text>
					<TextInputCommon
						label="Room No."
						name="roomNo"
						style={{ marginBottom: 30, marginTop: 20 }}
						value={roomNO}
						onChangeText={(val) => setRoomNO(val)}
					/>
					<TextInputCommon
						label="Rent Amount"
						name="rentAmount"
						keyboardType="numeric"
						style={{ marginBottom: 30 }}
						value={rentAmount}
						onChangeText={(val) => setRentAmount(val)}
					/>

					<TextInputCommon
						label="Floor"
						name="floor"
						keyboardType="numeric"
						style={{ marginBottom: 30 }}
						value={floorNo}
						onChangeText={(val) => setFloorNo(val)}
					/>
					<TextInputCommon
						label="Room Size"
						name="roomSize"
						keyboardType="numeric"
						style={{ marginBottom: 30 }}
						value={roomSize}
						onChangeText={(val) => setRoomSize(val)}
					/>
					<TextInputCommon
						label="BHK"
						name="bhk"
						keyboardType="numeric"
						style={{ marginBottom: 30 }}
						value={BHK}
						onChangeText={(val) => setBHK(val)}
					/>
					<View style={{ flexDirection: 'row' }}>
						<View style={{ flex: 1 }}>
							<Text>IsMultipleTenantAllowed</Text>
						</View>
						<View style={{ flex: 1 }}>
							<Switch
								trackColor={{
									false: '#767577',
									true: '#109FDA',
								}}
								thumbColor={
									isMultipleTenant ? '#109FDA' : '#f4f3f4'
								}
								ios_backgroundColor="#3e3e3e"
								onValueChange={toggleSwitch}
								value={isMultipleTenant}
							/>
						</View>
					</View>
					<Button
						buttonStyle={updateRoomDetailsStyle.submitButton}
						onPress={
							singleRoomData ? updateRoomData : addRoomToBuilding
						}
						title="Submit"
						titleStyle={updateRoomDetailsStyle.submitButton_text}
						loading={addRoomLoading || loading}
						loadingProps={{ size: 'large', color: 'white' }}
					></Button>
				</View>
				<SnackBar
					visible={visible}
					text={text}
					onDismissSnackBar={onDismissSnackBar}
					onToggleSnackBar={onToggleSnackBar}
				/>
			</KeyboardAwareScrollView>
		</ScrollView>
	);
}
