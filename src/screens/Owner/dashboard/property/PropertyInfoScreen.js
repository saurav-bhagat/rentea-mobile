import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
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
						{propertyInfo.name}
					</Text>
				</View>

				<View style={propertiesScreenStyles.maintainerContainer}>
					<Text style={{ fontWeight: 'bold' }}>
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

				<Text
					style={{
						marginBottom: 20,
						marginLeft: 30,
						fontWeight: 'bold',
					}}
				>
					Rooms:{' '}
				</Text>
				<View Style={propertiesScreenStyles.roomsList}>
					{roomListData.map((item, i) => (
						<ListItem
							key={i}
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
								<View
									style={propertiesScreenStyles.listSubtitle}
								>
									{item.tenants.length > 0 ? (
										<>
											<Text style={{ marginRight: 90 }}>
												{item.tenants[0].name}
											</Text>
											<Text>
												Due Date:{' '}
												{format(
													new Date(
														item.tenants[0].rentDueDate
													),
													'dd MMM yyyy'
												)}
											</Text>
										</>
									) : (
										<Text>No Tenant Added</Text>
									)}
								</View>
							</ListItem.Content>
							<ListItem.Chevron />
						</ListItem>
					))}
				</View>
			</ScrollView>
		</View>
	);
};

export default PropertyInfoScreen;
