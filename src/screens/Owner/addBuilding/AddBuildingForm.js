import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Counter from 'react-native-counters';
import { Provider, Portal, Modal } from 'react-native-paper';
import { Button } from 'react-native-elements';
import SelectDropdown from 'react-native-select-dropdown';

import CrossPlatformHeader from '../../../components/common/CrossPlatformHeader';
import TextInputCommon from '../../../components/common/TextInputCommon';
import { isValidBuildingData } from '../../../helpers/addBuildingValidation';
import { saveBuildingData, updateBuildingData } from '../../../redux/actions';
import { addBuildingFormstyles } from './addBuildingFormStyles';
import { navigate } from '../../../navigation/rootNavigation';
import SnackBar from '../../../components/common/SnackBar';
import useSnack from '../../../components/common/useSnack';
import AddRoomForm from './AddRoomForm';
import AddRoomCard from './AddRoomCard';
import CustomCounter from './CustomCounter';
import {
	fetchStates,
	fetchCities,
} from '../../../redux/actions/getCityStateData';

const AddBuildingForm = ({ route }) => {
	const dispatch = useDispatch();
	const authState = useSelector((state) => state.auth);
	const { loading } = useSelector((state) => state.buildingDetails);
	const { roomDetails } = useSelector((state) => state.addRoomDetails);
	const [buildingName, setBuildingName] = useState('');
	const [roomCount, setRoomCount] = useState(0);
	const [floorCount, setFloorCount] = useState(0);
	const [stateAddress, setStateAddress] = useState('');
	const [pinCode, setPinCode] = useState('835210');
	const [street, setStreet] = useState('');
	const [district, setDistrict] = useState('Khunti');
	const [maintainerName, setMaintainerName] = useState('');
	const [maintainerPhone, setMaintainerPhone] = useState('');
	const [modalVisible, setModalVisible] = useState(false);
	const [stateArray, setStateArray] = useState([]);
	const [citiesArray, setCitiesArray] = useState([]);
	const [stat, setStat] = useState('');
	const [city, setCity] = useState('');
	const {
		visible,
		onToggleSnackBar,
		onDismissSnackBar,
		setVisible,
		text,
		setText,
	} = useSnack();
	let buildingInfo, rooms;
	if (route.params) {
		buildingInfo = route.params.buildingInfo;
		rooms = buildingInfo.rooms;
	}
	const cityDropDownRef = useRef();
	useEffect(() => {
		if (buildingInfo) {
			const { address } = buildingInfo;
			// spliting because address is like
			// address=street no - street ,address
			let tempStreetPlusStateAddress = address.split(',');
			setBuildingName(buildingInfo.name);
			setRoomCount(buildingInfo.rooms.length);
			setStreet(tempStreetPlusStateAddress[0]);
			setStateAddress(tempStreetPlusStateAddress[1]);
		}
		if (rooms && rooms.length > 0) {
			let tempFloorCount = 0;
			for (const roomData of rooms) {
				if (tempFloorCount < parseInt(roomData.floor)) {
					tempFloorCount = roomData.floor;
				}
			}
			setFloorCount(tempFloorCount);
		}
	}, [buildingInfo]);
	const handleAddBuildingAndUpdateFormSubmit = () => {
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
			if (buildingInfo) {
				formData['buildingId'] = buildingInfo._id;
				dispatch(updateBuildingData(formData));
			} else {
				dispatch(saveBuildingData(formData));
			}
		} else {
			setText('Enter fields properly.');
			setVisible(true);
		}
	};

	// Todo : New Ui for address
	// const fetchStatesData = () => {
	// 	fetchStates()
	// 		.then((result) => {
	// 			setStateArray(result);
	// 		})
	// 		.catch((err) => {
	// 			alert('error while fetching states, please try again');
	// 		});
	// };

	// const updateCitySelect = (stateName) => {
	// 	const stateForCity = stateArray.filter(
	// 		(state) => state.name === stateName.name
	// 	);
	// 	fetchCities(stateForCity[0].iso2)
	// 		.then((response) => {
	// 			setCitiesArray(response);
	// 		})
	// 		.catch((error) =>
	// 			alert('Error while fetching cities, please try again')
	// 		);
	// };

	// useEffect(() => {
	// 	fetchStatesData();
	// }, []);

	return (
		<Provider>
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
					backgroundColor: '#ffff',
				}}
				nestedScrollEnabled={true}
			>
				<CrossPlatformHeader
					title={buildingInfo ? 'Update Apartment' : 'Add Apartment'}
					backCallback={() => {
						authState.userInfo.firstLogin
							? navigate('AddBuilding')
							: navigate('Properties');
					}}
					profile={false}
				/>

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
							value={buildingName}
						/>

						<TextInputCommon
							label="Plot No/Locality"
							name="plotnum"
							onChangeText={(val) => setStreet(val)}
							style={addBuildingFormstyles.textItemStyle}
							inputStyle={addBuildingFormstyles.inputStyle}
							value={street}
						/>

						<TextInputCommon
							label="Address"
							name="address"
							onChangeText={(val) => setStateAddress(val)}
							style={addBuildingFormstyles.textItemStyle}
							inputStyle={addBuildingFormstyles.inputStyle}
							value={stateAddress}
						/>
						{!buildingInfo && (
							<View style={addBuildingFormstyles.roomAndFloorC}>
								<View>
									<Text
										style={
											addBuildingFormstyles.roomAndFloorText
										}
									>
										Total Floors
									</Text>
									<Counter
										start={0}
										onChange={(number, type) =>
											setFloorCount(number)
										}
										buttonStyle={{ borderRadius: 25 }}
									/>
								</View>
								<View>
									<Text
										style={
											addBuildingFormstyles.roomAndFloorText
										}
									>
										Total Rooms
									</Text>

									<CustomCounter
										count={roomCount}
										setCounter={setRoomCount}
										setModalVisible={setModalVisible}
									/>
								</View>
								{/* Room and Floor section ends */}
							</View>
						)}
						{roomDetails.map((roomDetail, i) => {
							return (
								<AddRoomCard
									roomDetail={roomDetail}
									floorCount={floorCount}
									key={i}
								/>
							);
						})}

						<Portal>
							<Modal
								visible={modalVisible}
								onDismiss={() => {
									setModalVisible(false);
									setRoomCount((prev) => prev - 1);
								}}
								contentContainerStyle={
									addBuildingFormstyles.addRoomFormModalContainer
								}
							>
								<AddRoomForm
									floorCount={floorCount}
									dismissAddRoomForm={() =>
										setModalVisible(false)
									}
									addRoomSeparatelyFlag={false}
								/>
							</Modal>
						</Portal>

						{/* Todo : New Ui for add address Field */}
						{/* <View style={userDetailsStyles.oudsRegionContainer}>
					<View style={userDetailsStyles.dropdownsRow}>
						{stateArray?.length >= 0 && (
							<SelectDropdown
								data={stateArray}
								onSelect={(selectedItem, index) => {
									console.log(selectedItem, index);
									setStat(selectedItem.name);
									setCity('');
									cityDropDownRef.current.reset();
									updateCitySelect(selectedItem);
								}}
								buttonTextAfterSelection={(
									selectedItem,
									index
								) => {
									// text represented after item is selected
									// if data array is an array of objects then return selectedItem.property to render after item is selected
									return selectedItem.name;
								}}
								rowTextForSelection={(item, index) => {
									// text represented for each item in dropdown
									// if data array is an array of objects then return item.property to represent item in dropdown
									return item.name;
								}}
								buttonStyle={userDetailsStyles.dropdownBtnStyle}
								buttonTextStyle={
									stat
										? userDetailsStyles.dropdownBtnTxtStyleActive
										: userDetailsStyles.dropdownBtnTxtStyleInactive
								}
								rowStyle={userDetailsStyles.dropdownRowStyle}
								rowTextStyle={
									userDetailsStyles.dropdownRowTxtStyle
								}
								defaultButtonText="Select your state"
							/>
						)}
						<View style={{ width: 12 }} />
						{citiesArray?.length >= 0 && (
							<SelectDropdown
								ref={cityDropDownRef}
								data={citiesArray}
								disabled={!stat}
								onSelect={(selectedItem, index) => {
									console.log(selectedItem, index);
									setCity(selectedItem.name);
								}}
								buttonTextAfterSelection={(
									selectedItem,
									index
								) => {
									// text represented after item is selected
									// if data array is an array of objects then return selectedItem.property to render after item is selected
									return selectedItem.name;
								}}
								rowTextForSelection={(item, index) => {
									// text represented for each item in dropdown
									// if data array is an array of objects then return item.property to represent item in dropdown
									return item.name;
								}}
								buttonStyle={
									stat
										? userDetailsStyles.dropdownBtnStyle
										: userDetailsStyles.dropdownBtnStyleDisabled
								}
								buttonTextStyle={
									city
										? userDetailsStyles.dropdownBtnTxtStyleActive
										: userDetailsStyles.dropdownBtnTxtStyleInactive
								}
								rowStyle={userDetailsStyles.dropdownRowStyle}
								rowTextStyle={
									userDetailsStyles.dropdownRowTxtStyle
								}
								defaultButtonText="Select your city"
							/>
						)}
					</View>
					<View style={userDetailsStyles.oudsFormContainer}>
						<TextInput
							value={pincode}
							style={userDetailsStyles.oudsPhoneInputBox}
							placeholderTextColor={'#aaa'}
							placeholder="Pincode"
							onChangeText={(val) => setPincode(val)}
						/>
					</View>
				</View> */}

						<Button
							title={
								buildingInfo
									? 'Update apartment'
									: 'Add apartment'
							}
							onPress={handleAddBuildingAndUpdateFormSubmit}
							buttonStyle={addBuildingFormstyles.submitBtn}
							titleStyle={addBuildingFormstyles.submitBtnTxt}
							loading={loading}
						/>

						{/* Building Form Card ends */}
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
		</Provider>
	);
};

export default AddBuildingForm;
