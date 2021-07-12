import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Header, Left, Right, Body, Title } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import BuildingAccordion from './BuildingAccordion';
import AddBuildingFabButton from '../../../components/owner/building/AddBuildingFabButton';
import { useSelector } from 'react-redux';

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
				<Left>
					<Button transparent>
						<Icon name="chevron-back-outline" />
					</Button>
				</Left>
				<Body>
					<Title style={{ color: '#000', fontSize: 24 }}>
						Add Building
					</Title>
				</Body>
				<Right />
			</Header>
			<View style={styles.addBContainer}>
				{/* <View style={styles.addBTextContainer}>
						<Text style={styles.addBText}>Add Building </Text>
						<Text>
							Click on the add button below to add building
							details
						</Text>
					</View> */}
				<ScrollView>
					<BuildingAccordion
						buildingDetails={buildingData.buildingDetails}
					/>
				</ScrollView>
				<View>
					<Button rounded style={styles.addBSkipButton}>
						<Text style={styles.addBSkipButtonText}>Skip</Text>
						<Icon
							name="chevron-forward-outline"
							style={styles.forwardIcon}
						/>
					</Button>
					<AddBuildingFabButton />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	addBContainer: {
		flex: 1,
		paddingTop: '2%',
		backgroundColor: 'white',
		width: '85%',
		marginLeft: 'auto',
		marginRight: 'auto',
		justifyContent: 'space-between',
	},
	addBTextContainer: {
		marginBottom: 30,
	},
	addBText: {
		fontSize: 50,
		letterSpacing: 1.3,
		color: '#666666',
		marginBottom: 0,
	},
	addBSkipButton: {
		marginTop: 20,
		backgroundColor: '#109FDA',
		paddingHorizontal: 12,
		justifyContent: 'center',
		width: 100,
		marginRight: 18,
		marginLeft: 12,
		marginBottom: 20,
	},
	addBSkipButtonText: {
		color: '#fff',
		fontSize: 19,
	},
	forwardIcon: {
		color: '#fff',
		marginLeft: 4,
		top: 2,
		fontSize: 22,
	},
});

export default AddBuilding;
