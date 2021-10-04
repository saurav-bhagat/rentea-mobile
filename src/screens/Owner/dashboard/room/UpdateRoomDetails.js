import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import CrossPlatformHeader from '../../../../components/common/CrossPlatformHeader';
import SnackBar from '../../../../components/common/SnackBar';
import TextInputCommon from '../../../../components/common/TextInputCommon';
import useSnack from '../../../../components/common/useSnack';
import { validateRoomFields } from '../../../../helpers/addBuildingValidation';
import { navigate } from '../../../../navigation/rootNavigation';
import { updateRoomDetailsStyle } from './UpdateRoomDetailsStyle';

export default function UpdateRoomDetails({ route }) {
	const { singleRoomData, propertyInfo } = route.params;
	const [roomNO, setRoomNO] = useState('');
	const [rentAmount, setRentAmount] = useState('');
	const [securityAmount, setSecurityAmount] = useState('');
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
			roomNo: roomNO,
			rent: rentAmount,
			security: securityAmount,
			floor: floorNo,
			bhk: BHK,
		};
		if (validateRoomFields(roomData)) {
			//need to modify validateRoomFields accordingly
			//also need to add size input field
			console.log(roomData);
		} else {
			setText('Enter fields properly');
			setVisible(true);
		}
	};

	useEffect(() => {
		const tenant = singleRoomData.tenants[0];
		setRoomNO(singleRoomData.roomNo);
		setRentAmount(singleRoomData.rent.toString());
		setSecurityAmount(tenant['securityAmount'].toString());
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
						label="Security Amount"
						name="securityAmount"
						keyboardType="numeric"
						style={{ marginBottom: 30 }}
						value={securityAmount}
						onChangeText={(val) => setSecurityAmount(val)}
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
						label="BHK"
						name="bhk"
						keyboardType="numeric"
						style={{ marginBottom: 30 }}
						value={BHK}
						onChangeText={(val) => setBHK(val)}
					/>

					<TouchableOpacity
						style={updateRoomDetailsStyle.submitButton}
						onPress={() => updateRoomData()}
					>
						<Text style={updateRoomDetailsStyle.submitButton_text}>
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
		</View>
	);
}
