import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Modal, Portal, Provider } from 'react-native-paper';
import { Button } from 'react-native-elements';
import { useSelector } from 'react-redux';
import CrossPlatformHeader from '../../../components/common/CrossPlatformHeader';
import { navigate } from '../../../navigation/rootNavigation';
import RNPickerSelect from 'react-native-picker-select';
import { addTenantFromDashboardStyles } from './AddTenantFromDashboardStyles';
import AddTenantScreen from '../dashboard/tenant/AddTenantScreen';
import { pickerSelectStyles } from '../addBuilding/AddRoomForm';

const SelectBuildingPlaceholder = {
	label: 'Select building...',
	value: null,
	color: '#9EA0A4',
};
const SelectRoomPlaceholder = {
	label: 'Select room...',
	value: null,
	color: '#9EA0A4',
};

export const AddTenantFromDashboard = () => {
	const { buildings } = useSelector(
		(state) => state.ownerDashbhoard.properties.ownerDashboardResult
	);

	const [buildingValue, setBuildingValue] = useState(null);
	const [buildingPickerOptions, setBuildingPickerOptions] = useState([]);

	const [roomValue, setRoomValue] = useState(null);
	const [roomPickerOptions, setRoomPickerOptions] = useState([]);

	const [propertyInfo, setPropertyInfo] = useState(null);
	const [singleRoomData, setSingleRoomData] = useState(null);
	const [addTenantModalFlag, setAddTenantModalFlag] = useState(false);

	useEffect(() => {
		const dropdownBuildings = buildings.map((build) => {
			return {
				label: build.name.toUpperCase(),
				value: build._id,
			};
		});
		setBuildingPickerOptions(dropdownBuildings);
	}, []);

	const getRooms = () => {
		const selectedBuilding = buildings.filter(
			(build) => build._id === buildingValue
		);
		setPropertyInfo(selectedBuilding[0]);
		let dropdownRooms =
			selectedBuilding.length > 0 ? selectedBuilding[0].rooms : [];
		dropdownRooms = dropdownRooms.map((room) => {
			return { label: room.roomNo, value: room._id };
		});
		setRoomPickerOptions(dropdownRooms);
	};

	const setRoomData = () => {
		if (propertyInfo && propertyInfo.rooms) {
			const roomData = propertyInfo.rooms.find(
				(room) => room._id === roomValue
			);
			setSingleRoomData(roomData);
		}
	};

	return (
		<Provider>
			<CrossPlatformHeader
				title="Add Tenant"
				backCallback={() => navigate('ownerDashboard')}
			/>

			{/* modal for add tenant screen  */}
			<Portal>
				<Modal
					visible={addTenantModalFlag}
					onDismiss={() => setAddTenantModalFlag(false)}
					contentContainerStyle={
						addTenantFromDashboardStyles.addTenantModalContainer
					}
				>
					<AddTenantScreen
						singleRoomData={singleRoomData}
						propertyInfo={propertyInfo}
						showAddTenantScreenFlag={true}
						dismissAddAndUpdateTenantModal={() =>
							setAddTenantModalFlag(false)
						}
						navigateToDashboard={true}
					/>
				</Modal>
			</Portal>
			<View style={addTenantFromDashboardStyles.addTenantParentView}>
				<View style={addTenantFromDashboardStyles.addTenantView}>
					<Text style={addTenantFromDashboardStyles.headingText}>
						Select building and room to continue:
					</Text>
					<RNPickerSelect
						useNativeAndroidPickerStyle={false}
						onValueChange={(val) => {
							setBuildingValue(val);
							getRooms();
						}}
						items={buildingPickerOptions}
						value={buildingValue}
						style={pickerSelectStyles}
						placeholder={SelectBuildingPlaceholder}
					/>

					{buildingValue && (
						<RNPickerSelect
							useNativeAndroidPickerStyle={false}
							style={pickerSelectStyles}
							value={roomValue}
							onValueChange={(val) => {
								setRoomValue(val);
								setRoomData();
							}}
							items={roomPickerOptions}
							placeholder={SelectRoomPlaceholder}
						/>
					)}

					{singleRoomData && singleRoomData.isMultipleTenant && (
						<Button
							title={'Add tenant'}
							containerStyle={
								addTenantFromDashboardStyles.addTenantBtn
							}
							titleStyle={
								addTenantFromDashboardStyles.addTenantBtnTxt
							}
							onPress={() => {
								setAddTenantModalFlag(true);
							}}
						/>
					)}

					{singleRoomData &&
						!singleRoomData.isMultipleTenant &&
						singleRoomData.tenants.length < 1 && (
							<Button
								title={'Add tenant'}
								containerStyle={
									addTenantFromDashboardStyles.addTenantBtn
								}
								titleStyle={
									addTenantFromDashboardStyles.addTenantBtnTxt
								}
								onPress={() => {
									setAddTenantModalFlag(true);
								}}
							/>
						)}

					{/* if room is singleTenant only and that too is filled */}

					{singleRoomData &&
						!singleRoomData.isMultipleTenant &&
						singleRoomData.tenants.length === 1 && (
							<Text
								style={addTenantFromDashboardStyles.errorText}
							>
								You cannot add tenant to this room, it is
								already filled.
							</Text>
						)}

					{/* if building is not available */}

					{buildings.length <= 0 && (
						<Text style={addTenantFromDashboardStyles.errorText}>
							No, building available to add tenant. Please add a
							building first.
						</Text>
					)}

					{/* if building is available but not the room  */}

					{buildingValue && roomPickerOptions.length <= 0 && (
						<Text style={addTenantFromDashboardStyles.errorText}>
							No, room available to add tenant. Please add a room
							first.
						</Text>
					)}
				</View>
			</View>
		</Provider>
	);
};
