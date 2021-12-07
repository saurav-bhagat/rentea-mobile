import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Counter from 'react-native-counters';
import { Provider, Portal, Modal } from 'react-native-paper';
import { Button } from 'react-native-elements';

import CrossPlatformHeader from '../../../components/common/CrossPlatformHeader';
import TextInputCommon from '../../../components/common/TextInputCommon';
import { isValidBuildingData } from '../../../helpers/addBuildingValidation';
import { saveBuildingData } from '../../../redux/actions';
import { addBuildingFormstyles } from './addBuildingFormStyles';
import { navigate } from '../../../navigation/rootNavigation';
import SnackBar from '../../../components/common/SnackBar';
import useSnack from '../../../components/common/useSnack';
import AddRoomForm from './AddRoomForm';
import AddRoomCard from './AddRoomCard';

const AddBuildingForm = () => {
	const dispatch = useDispatch();
	const authState = useSelector((state) => state.auth);
	const { loading } = useSelector((state) => state.buildingDetails);
	const { roomDetails } = useSelector((state) => state.addRoomDetails);
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
	const [modalVisible, setModalVisible] = useState(false);
	const {
		visible,
		onToggleSnackBar,
		onDismissSnackBar,
		setVisible,
		text,
		setText,
	} = useSnack();

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

	const handleCounter = (number, type) => {
		if (floorCount >= 1) {
			setRoomCount(number);
			type === '+' && setModalVisible(true);
		} else {
			setText('Please enter floor number before adding room');
			setVisible(true);
		}
	};

	return (
		<Provider>
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
					backgroundColor: '#ffff',
				}}
				nestedScrollEnabled={true}
			>
				{!authState.userInfo.firstLogin ? (
					<CrossPlatformHeader
						title="Add Apartment"
						backCallback={() => navigate('Properties')}
						profile={false}
					/>
				) : (
					<CrossPlatformHeader
						title="Add Apartment"
						profile={false}
					/>
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
								<Counter
									start={0}
									onChange={(number, type) =>
										handleCounter(number, type)
									}
									buttonStyle={{ borderRadius: 25 }}
								/>
							</View>
							{/* Room and Floor section ends */}
						</View>

						{roomDetails.length > 0 && (
							<View style={addBuildingFormstyles.roomDetailRow}>
								<View style={addBuildingFormstyles.roomDtlCol}>
									<Text
										style={
											addBuildingFormstyles.roomDtlColTxt1
										}
									>
										Room no:
									</Text>
								</View>
								<View style={addBuildingFormstyles.roomDtlCol}>
									<Text
										style={
											addBuildingFormstyles.roomDtlColTxt2
										}
									>
										Edit
									</Text>
								</View>
								<View style={addBuildingFormstyles.roomDtlCol}>
									<Text
										style={
											addBuildingFormstyles.roomDtlColTxt3
										}
									>
										Delete
									</Text>
								</View>
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
								/>
							</Modal>
						</Portal>

						<Button
							title="Submit"
							onPress={handleAddBuildingFormSubmit}
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
