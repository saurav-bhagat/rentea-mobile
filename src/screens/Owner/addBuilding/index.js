import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button, Header, Left, Right, Body, Title } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

import BuildingAccordion from './BuildingAccordion';
import AddBuildingFabButton from '../../../components/owner/building/AddBuildingFabButton';
import { addBuildingStyles } from './addBuildingStyles';

const AddBuilding = () => {
	const buildingData = useSelector((state) => state.buildingDetails);
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: 'white',
			}}
		>
			<Header transparent>
				<Left />
				<Body>
					<Title style={{ color: '#000', fontSize: 24, right: 40 }}>
						Add Building
					</Title>
				</Body>
				<Right />
			</Header>
			<View style={addBuildingStyles.addBContainer}>
				<ScrollView>
					<BuildingAccordion
						buildingDetails={buildingData.buildingDetails}
					/>
				</ScrollView>
			</View>
			{/* <View> */}
			{/* TODO: Implement this if needed in feedback
					<Button rounded style={addBuildingStyles.addBSkipButton}>
					<Text style={addBuildingStyles.addBSkipButtonText}>Skip</Text>
					<Icon
						name="chevron-forward-outline"
						style={addBuildingStyles.forwardIcon}
					/>
				</Button> */}
			{/* </View> */}
			<AddBuildingFabButton />
		</View>
	);
};

export default AddBuilding;
