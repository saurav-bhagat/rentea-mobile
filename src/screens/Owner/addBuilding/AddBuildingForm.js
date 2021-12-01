import React, { useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Counter from 'react-native-counters';

import CrossPlatformHeader from '../../../components/common/CrossPlatformHeader';
import SelectStatePicker from '../../../components/owner/building/SelectStatePicker';
import AddMaintainerSection from '../../../components/owner/maintainer/AddMaintainerSection';
import AddRoomSection from './AddRoomsSection';
import TextInputCommon from '../../../components/common/TextInputCommon';
import { isValidBuildingData } from '../../../helpers/addBuildingValidation';
import { saveBuildingData } from '../../../redux/actions';
import { addBuildingFormstyles } from './addBuildingFormStyles';
import { navigate } from '../../../navigation/rootNavigation';
import SnackBar from '../../../components/common/SnackBar';
import useSnack from '../../../components/common/useSnack';
import { setFirstLoginFalse } from '../../../redux/actions';

const AddBuildingForm = () => {
	const dispatch = useDispatch();
	const addBuildingState = useSelector((state) => state.buildingDetails);
	const authState = useSelector((state) => state.auth);
	const [buildingName, setBuildingName] = useState('');
	const [roomCount, setRoomCount] = useState('');
	const [floorCount, setFloorCount] = useState('');
	const [stateAddress, setStateAddress] = useState('');
	const [pinCode, setPinCode] = useState('835210');
	const [street, setStreet] = useState('');
	const [district, setDistrict] = useState('Khunti');
	const [maintainerName, setMaintainerName] = useState('');
	const [maintainerPhone, setMaintainerPhone] = useState('');
	const { firstLogin } = useSelector((state) => state.auth.userInfo);
	const {
		visible,
		onToggleSnackBar,
		onDismissSnackBar,
		setVisible,
		text,
		setText,
	} = useSnack();

	const handleRoomCounter = (number, type) => {
		setRoomCount(number);
	};

	const handleFloorCounter = (number, type) => {
		setFloorCount(number);
	};

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
			setText('Enter fields properly.');
			setVisible(true);
		}
	};

	const skipAddBuilding = async () => {
		if (firstLogin) {
			try {
				let userInfo = await AsyncStorage.getItem('userInfo');
				userInfo = JSON.parse(userInfo);
				const firstLogin = userInfo.firstLogin;
				userInfo.firstLogin = false;
				await AsyncStorage.setItem(
					'userInfo',
					JSON.stringify(userInfo)
				);
				dispatch(setFirstLoginFalse());
				firstLogin
					? navigate('ownerDashboard')
					: navigate('Properties');
			} catch (err) {
				console.log('error while saving to async storage', err);
				setText('Error while skip, please try again?.');
				setVisible(true);
			}
		} else {
			firstLogin ? navigate('ownerDashboard') : navigate('Properties');
		}
	};
	return (
		<ScrollView
			contentContainerStyle={{ flexGrow: 1, backgroundColor: '#e5e5e5' }}
			nestedScrollEnabled={true}
		>
			{!authState.userInfo.firstLogin ? (
				<CrossPlatformHeader
					title="Add Apartment"
					backCallback={() => navigate('Properties')}
					profile={false}
				/>
			) : (
				<CrossPlatformHeader title="Add Apartment" profile={false} />
			)}

			<ScrollView
				contentContainerStyle={addBuildingFormstyles.addBFcontainer}
				nestedScrollEnabled={true}
			>
				<View style={addBuildingFormstyles.addBFCard}>
					<TextInputCommon
						label="Apartment Name"
						name="buildingName"
						onChangeText={(val) => setBuildingName(val)}
						style={addBuildingFormstyles.textItemStyle}
						inputStyle={addBuildingFormstyles.inputStyle}
					/>

					<TextInputCommon
						label="Plot No/Locality"
						name="plotnum"
						onChangeText={(val) => setStreet(val)}
						style={addBuildingFormstyles.textItemStyle}
						inputStyle={addBuildingFormstyles.inputStyle}
					/>

					<TextInputCommon
						label="Select Address"
						name="address"
						onChangeText={(val) => setStateAddress(val)}
						style={addBuildingFormstyles.textItemStyle}
						inputStyle={addBuildingFormstyles.inputStyle}
					/>

					<View style={addBuildingFormstyles.roomAndFloorC}>
						<View>
							<Text
								style={addBuildingFormstyles.roomAndFloorText}
							>
								Total Floors
							</Text>
							<Counter
								start={1}
								onChange={(number, type) =>
									handleFloorCounter(number, type)
								}
								buttonStyle={{ borderRadius: 25 }}
							/>
						</View>
						<View>
							<Text
								style={addBuildingFormstyles.roomAndFloorText}
							>
								Total Rooms
							</Text>
							<Counter
								start={1}
								onChange={(number, type) =>
									handleRoomCounter(number, type)
								}
								buttonStyle={{ borderRadius: 25 }}
							/>
						</View>
					</View>
				</View>
			</ScrollView>

			<SnackBar
				text={text}
				visible={visible}
				onDismissSnackBar={onDismissSnackBar}
				onToggleSnackBar={onToggleSnackBar}
				bottom={120}
			/>
		</ScrollView>
	);
};

export default AddBuildingForm;
