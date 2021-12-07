import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { navigate } from '../../../navigation/rootNavigation';
import { addBuildingStyles } from './addBuildingStyles';

const AddBuilding = () => {
	const { buildingDetails } = useSelector((state) => state.buildingDetails);

	const handleBuildingSubmit = async () => {
		let userInfo = await AsyncStorage.getItem('userInfo');
		userInfo = JSON.parse(userInfo);
		userInfo.firstLogin = false;
		await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));

		// Todo : For now we manually navigate ownerDashboard but we have to optimize our stack in future
		navigate('ownerDashboard');
	};

	return (
		<View style={addBuildingStyles.addBuildingContainer}>
			<View>
				<Text style={addBuildingStyles.addBuildingRow1Txt}>
					Add Buildings
				</Text>
			</View>
			<View>
				<Text style={addBuildingStyles.addBuildingRow2Txt}>
					Add Building/Property details
				</Text>
			</View>
			<View>
				<Text style={addBuildingStyles.addBuildingRow3Txt}>
					Add Building/Property detailsAdd Building/Property
					detailsAdd Building/Property details
				</Text>
			</View>
			<View style={{ marginTop: 25 }}>
				{buildingDetails.length > 0 &&
					buildingDetails.map((buildingDetail, i) => {
						return (
							<TouchableOpacity
								key={i}
								style={
									addBuildingStyles.buildingDetailContainer
								}
							>
								<Text
									style={addBuildingStyles.buidlingDetailTxt}
								>
									{buildingDetail.buildingName}
								</Text>
							</TouchableOpacity>
						);
					})}
			</View>
			<View style={{ marginTop: 40 }}>
				<View>
					<Button
						title="Add Building"
						type="outline"
						titleStyle={{ fontFamily: 'interSemiBold' }}
						onPress={() => {
							navigate('AddBuildingForm');
						}}
						buttonStyle={addBuildingStyles.addBtn}
					/>
				</View>

				<View style={addBuildingStyles.skipAndContinueContainer}>
					<View style={{ flex: 1 }}>
						<Button
							title="Skip"
							type="outline"
							titleStyle={{ fontFamily: 'interRegular' }}
							buttonStyle={addBuildingStyles.skipBtn}
							disabled={buildingDetails.length !== 0}
							disabledStyle={addBuildingStyles.skipBtn}
							onPress={() => navigate('ownerDashboard')}
						/>
					</View>
					<View style={{ flex: 1 }}>
						<Button
							title="Continue"
							type="outline"
							titleStyle={{ fontFamily: 'interRegular' }}
							buttonStyle={addBuildingStyles.continueBtn}
							disabledStyle={addBuildingStyles.continueBtn}
							disabled={buildingDetails.length === 0}
							onPress={() => {
								handleBuildingSubmit();
							}}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};
export default AddBuilding;
