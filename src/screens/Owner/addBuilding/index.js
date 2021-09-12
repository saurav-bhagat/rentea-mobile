import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import CrossPlatformHeader from '../../../components/common/CrossPlatformHeader';
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
			<CrossPlatformHeader title="Add Building" profile={false} />
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
