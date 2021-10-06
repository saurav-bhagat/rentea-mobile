import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { Button } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';

import CrossPlatformHeader from '../../../../components/common/CrossPlatformHeader';
import SnackBar from '../../../../components/common/SnackBar';
import TextInputCommon from '../../../../components/common/TextInputCommon';
import useSnack from '../../../../components/common/useSnack';
import { validateRoomFieldsForUpdate } from '../../../../helpers/addBuildingValidation';
import { navigate } from '../../../../navigation/rootNavigation';
import { updateRoomDetail } from '../../../../redux/actions/ownerActions/updateRoomAction';
import { updateRoomDetailsStyle } from './UpdateRoomDetailsStyle';

export default function UpdateRoomDetails({ route }) {
	const dispatch = useDispatch();

	const { singleRoomData, propertyInfo } = route.params;
	const { loading } = useSelector((state) => state.updateRoom);

	const [roomNO, setRoomNO] = useState('');
	const [rentAmount, setRentAmount] = useState('');
	const [roomSize, setRoomSize] = useState('');
	const [floorNo, setFloorNo] = useState('');
	const [BHK, setBHK] = useState('');

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
		};

		const dataForValidation = {
			...roomData,
			roomType: BHK,
			rent: rentAmount.toString(),
		};
		if (validateRoomFieldsForUpdate(dataForValidation)) {
			//TODO: floor number shouldn't be updated to more than the capacity of building
			dispatch(updateRoomDetail(roomData));
		} else {
			setText('Enter fields properly');
			setVisible(true);
		}
	};

	useEffect(() => {
		setRoomNO(singleRoomData.roomNo);
		setRentAmount(singleRoomData.rent.toString());
		setRoomSize(singleRoomData.roomSize);
		setFloorNo(singleRoomData.floor);
		setBHK(singleRoomData.type.split('')[0]);
	}, [singleRoomData]);

	return (
		<View>
			<CrossPlatformHeader
				title="Update Room"
				backCallback={() => {
					navigate('RoomInfo', {
						singleRoomData,
						propertyInfo,
					});
				}}
			/>
			<KeyboardAwareScrollView style={{ minHeight: '100%' }}>
				<View style={updateRoomDetailsStyle.updateRoomContainer}>
					<Text style={{ fontSize: 19 }}>Update Room Details</Text>
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

					<Button
						style={updateRoomDetailsStyle.submitButton}
						onPress={() => {
							updateRoomData();
						}}
					>
						{loading ? (
							<ActivityIndicator color="#ffffff" size="large" />
						) : (
							<Text
								style={updateRoomDetailsStyle.submitButton_text}
							>
								Submit
							</Text>
						)}
					</Button>
				</View>
				<SnackBar
					visible={visible}
					text={text}
					onDismissSnackBar={onDismissSnackBar}
					onToggleSnackBar={onToggleSnackBar}
				/>
			</KeyboardAwareScrollView>
		</View>
	);
}
