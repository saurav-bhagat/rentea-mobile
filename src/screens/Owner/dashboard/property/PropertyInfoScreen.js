import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import { format } from 'date-fns';

import { propertiesScreenStyles } from './PropertiesScreenStyles';
import CrossPlatformHeader from '../../../../components/common/CrossPlatformHeader';
import { navigate } from '../../../../navigation/rootNavigation';

const PropertyInfoScreen = ({ route, navigation }) => {
	const { propertyInfo } = route.params;
	const roomListData = propertyInfo.rooms;
	return (
		<View style={propertiesScreenStyles.propertyInfoContainer}>
			<CrossPlatformHeader
				title="PropertyInfo"
				backCallback={() => {
					navigate('Properties');
				}}
			/>
			<ScrollView style={{ flex: 1 }}>
				<View style={propertiesScreenStyles.propertyTitleContainer}>
					<Text style={propertiesScreenStyles.propertyTitle}>
						<Text
							style={propertiesScreenStyles.propertyHeadingText}
						>
							Building Name :{' '}
						</Text>
						{propertyInfo.name}
					</Text>
				</View>

				<View style={propertiesScreenStyles.maintainerContainer}>
					<Text style={propertiesScreenStyles.maintainerDetailsText}>
						Maintainer Details:{' '}
					</Text>
					<View
						style={propertiesScreenStyles.maintainerInfoContainer}
					>
						<Text style={propertiesScreenStyles.maintainerName}>
							Name: Shivam Gupta
						</Text>
						<Text style={propertiesScreenStyles.maintainerName}>
							Phone: +91 9876543210
						</Text>
					</View>
				</View>
				<View
					style={propertiesScreenStyles.roomsAndAddRoomBtnContainer}
				>
					<Text style={propertiesScreenStyles.roomsText}>
						Rooms:{' '}
					</Text>
					<View style={propertiesScreenStyles.addRoomBtnContainer}>
						<Button
							buttonStyle={{
								backgroundColor: '#FFF',
							}}
							titleStyle={{ color: '#109FDA' }}
							onPress={() =>
								navigate('UpdateRoomDetails', { propertyInfo })
							}
							title="Add Room"
							raised
						/>
					</View>
				</View>

				<View style={propertiesScreenStyles.roomsList}>
					{roomListData.map((item, i) => (
						<ListItem
							key={i}
							Component={TouchableOpacity}
							bottomDivider
							containerStyle={
								propertiesScreenStyles.listContainer
							}
							onPress={() => {
								navigation.navigate('RoomInfo', {
									singleRoomData: item,
									propertyInfo,
								});
							}}
						>
							<ListItem.Content>
								<ListItem.Title>
									Room No: {item.roomNo}
								</ListItem.Title>

								{item.tenants.length > 0 &&
									item.tenants.map((tenant) => {
										return (
											<View
												key={tenant._id}
												style={
													propertiesScreenStyles.tenantDetailContainer
												}
											>
												<View
													style={
														propertiesScreenStyles.tenantDetailContainerCol1
													}
												>
													<Text>{tenant.name}</Text>
												</View>
												<View
													style={
														propertiesScreenStyles.tenantDetailContainerCol2
													}
												>
													<Text>
														Due Date:{' '}
														{format(
															new Date(
																tenant.rentDueDate
															),
															'dd MMM yyyy'
														)}
													</Text>
												</View>
											</View>
										);
									})}
								{item.tenants.length === 0 && (
									<View style={{ marginTop: 10 }}>
										<Text>No Tenant added yet</Text>
									</View>
								)}
							</ListItem.Content>
						</ListItem>
					))}
				</View>
			</ScrollView>
		</View>
	);
};

export default PropertyInfoScreen;
