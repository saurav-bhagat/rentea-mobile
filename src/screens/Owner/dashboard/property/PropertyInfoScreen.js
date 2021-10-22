import React from 'react';
import { View, Text, ScrollView } from 'react-native';
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
							bottomDivider
							containerStyle={
								propertiesScreenStyles.listContainer
							}
						>
							<ListItem.Content>
								<View
									style={
										propertiesScreenStyles.roomNoAndAddTenantBtnRow
									}
								>
									<View>
										<Text>Room No: {item.roomNo}</Text>
									</View>
									<View>
										<Button
											title="Add Tenant"
											buttonStyle={{
												backgroundColor: '#109FDA',
												borderRadius: 20,
											}}
											titleStyle={{
												color: '#FFF',
												fontSize: 10,
											}}
											onPress={() => {
												navigation.navigate(
													'UpdateTenantInfo',
													{
														singleRoomData: item,
														propertyInfo,
														showAddTenantScreenFlag: true,
													}
												);
											}}
										/>
									</View>
								</View>

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
												<View
													style={
														propertiesScreenStyles.tenantDetailContainerCol3
													}
												>
													<Text
														style={
															propertiesScreenStyles.readMoreText
														}
														onPress={() => {
															navigation.navigate(
																'RoomInfo',
																{
																	singleRoomData:
																		item,
																	propertyInfo,
																}
															);
														}}
													>
														Read more
													</Text>
												</View>
											</View>
										);
									})}
							</ListItem.Content>
						</ListItem>
					))}
				</View>
			</ScrollView>
		</View>
	);
};

export default PropertyInfoScreen;
