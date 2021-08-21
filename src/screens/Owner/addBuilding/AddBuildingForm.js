import React, { useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Header, Left, Right, Body, Title } from 'native-base';

import CrossPlatformHeader from '../../../components/common/CrossPlatformHeader';
import SelectStatePicker from '../../../components/owner/building/SelectStatePicker';
import AddMaintainerSection from '../../../components/owner/maintainer/AddMaintainerSection';
import AddRoomSection from './AddRoomsSection';
import TextInputCommon from '../../../components/common/TextInputCommon';
import { isValidBuildingData } from '../../../helpers/addBuildingValidation';
import { saveBuildingData } from '../../../redux/actions';
import { addBuildingFormstyles } from './addBuildingFormStyles';

const AddBuildingForm = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const addBuildingState = useSelector((state) => state.buildingDetails);

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
		const formData = {
			buildingName,
			roomCount,
			floorCount,
			street,
			district,
			pinCode,
			stateAddress,
			maintainerName,
			maintainerPhone,
		};
		if (isValidBuildingData(formData)) {
			dispatch(saveBuildingData(formData));
		} else {
			alert('Enter fields Properly');
		}
	};

	return (
		<ScrollView
			contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}
			nestedScrollEnabled={true}
		>
			<CrossPlatformHeader
				title="Building Details"
				backCallback={() => navigation.navigate('AddBuilding')}
			/>

			<View style={addBuildingFormstyles.addBFcontainer}>
				<View style={addBuildingFormstyles.addBFormContainer}>
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

					<Button
						style={
							addBuildingFormstyles.submitBuildingDetailsButton
						}
						onPress={handleAddBuildingFormSubmit}
					>
						{addBuildingState.loading ? (
							<ActivityIndicator color="#ffffff" size="large" />
						) : (
							<Text
								style={
									addBuildingFormstyles.submitBuildingDetailsButton_text
								}
							>
								Submit
							</Text>
						)}
					</Button>
				</View>
			</View>
		</ScrollView>
	);
};

export default AddBuildingForm;
