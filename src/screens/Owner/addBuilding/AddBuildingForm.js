import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';

import BackIcon from '../../../components/common/BackIcon';
import SelectStatePicker from '../../../components/owner/building/SelectStatePicker';
import AddMaintainerSection from '../../../components/owner/maintainer/AddMaintainerSection';
import AddRoomSection from './AddRoomsSection';
import TextInputCommon from '../../../components/common/TextInputCommon';

import { setBuildingDetails } from '../../../redux/actions';

const AddBuildingForm = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const [buildingName, setBuildingName] = useState('');
	const [roomCount, setRoomCount] = useState('');
	const [floorCount, setFloorCount] = useState('');
	const [stateAddress, setStateAddress] = useState('');
	const [pinCode, setPinCode] = useState('');
	const [street, setStreet] = useState('');
	const [district, setDistrict] = useState('');
	const [maintainerName, setMaintainerName] = useState('');
	const [maintainerPhone, setMaintainerPhone] = useState('');

	const handleAddBuildingFormSubmit = () => {
		console.log(`
			Inside Submit:
			Building Name is: ${buildingName},
			Room count is: ${roomCount},
			Floor Count is: ${floorCount},
			Address is: ${street} , ${district} , 
			${stateAddress}, ${pinCode}
		`);
		// call an action which will set this values to the store.
		dispatch(
			setBuildingDetails({
				buildingName,
				roomCount,
				floorCount,
				street,
				district,
				pinCode,
				stateAddress,
				maintainerName,
				maintainerPhone,
			})
		);
	};

	return (
		<ScrollView
			contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}
			nestedScrollEnabled={true}
		>
			<View style={styles.addBFcontainer}>
				<View style={styles.addBFHeader}>
					<BackIcon
						onPress={() => navigation.navigate('AddBuilding')}
					/>
					<Text style={styles.addBFHeaderText}>
						Add Building Details
					</Text>
				</View>
				<View style={styles.addBFormContainer}>
					<TextInputCommon
						label="Building Name"
						name="buildingName"
						onChangeText={(val) => setBuildingName(val)}
					/>
					<View style={{ flexDirection: 'row', marginTop: 30 }}>
						<View style={{ flex: 1 }}>
							<TextInputCommon
								label="Number of Rooms"
								style={{
									width: '80%',
									alignSelf: 'flex-start',
								}}
								name="roomCount"
								onChangeText={(val) => setRoomCount(val)}
								value={roomCount}
								keyboardType="numeric"
							/>
						</View>
						<View style={{ flex: 1 }}>
							<TextInputCommon
								label="Number of Floors"
								style={{ width: '80%', alignSelf: 'flex-end' }}
								name="floorCount"
								onChangeText={(val) => setFloorCount(val)}
								value={floorCount}
								keyboardType="numeric"
							/>
						</View>
					</View>

					<View style={{ marginTop: 30 }}>
						<SelectStatePicker
							onValueChange={(val) => setStateAddress(val)}
							stateAddress={stateAddress}
						/>
					</View>

					<View style={{ flexDirection: 'row', marginTop: 30 }}>
						<View style={{ flex: 1 }}>
							<TextInputCommon
								label="District"
								style={{
									width: '90%',
									alignSelf: 'flex-start',
								}}
								name="district"
								onChangeText={(val) => setDistrict(val)}
							/>
						</View>
						<View style={{ flex: 1 }}>
							<TextInputCommon
								label="Pincode"
								style={{ width: '90%', alignSelf: 'flex-end' }}
								name="pincode"
								onChangeText={(val) => setPinCode(val)}
								keyboardType="numeric"
							/>
						</View>
					</View>

					<TextInputCommon
						label="Street/Locality"
						style={{ marginTop: 30 }}
						name="street"
						onChangeText={(val) => setStreet(val)}
					/>

					<Text
						style={{ fontSize: 22, marginTop: 35, color: '#666' }}
					>
						Maintainer:
					</Text>

					<AddMaintainerSection
						setMaintainerName={setMaintainerName}
						setMaintainerPhone={setMaintainerPhone}
					/>

					<AddRoomSection roomCount={roomCount} />

					<TouchableHighlight
						style={styles.submitBuildingDetailsButton}
						onPress={handleAddBuildingFormSubmit}
					>
						<Text style={styles.submitBuildingDetailsButton_text}>
							Submit
						</Text>
					</TouchableHighlight>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	addBFcontainer: {
		flex: 1,
		paddingTop: '13%',
		width: '95%',
		marginLeft: 'auto',
		marginRight: 'auto',
		minHeight: '100%',
	},
	addBFHeader: {
		flexDirection: 'row',
		alignItems: 'flex-start',
	},
	addBFHeaderText: {
		flex: 1,
		fontSize: 30,
		letterSpacing: 1.3,
		color: '#666666',
		marginBottom: 0,
	},
	addBFormContainer: {
		flex: 1,
		padding: 10,
	},
	addBFormInput: {
		borderBottomWidth: 1,
		height: 40,
		margin: 12,
	},
	submitBuildingDetailsButton: {
		width: '100%',
		marginTop: 40,
		backgroundColor: '#109FDA',
		justifyContent: 'center',
		height: 58,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		borderRadius: 35
	},
	submitBuildingDetailsButton_text: {
		color: '#fff',
		fontSize: 22,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 1,
		textAlign: 'center'
	},
});

export default AddBuildingForm;
