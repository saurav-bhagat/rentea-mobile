import React, { useState, useEffect } from 'react';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
import { dashboardStyles } from './DashboardStyles';
import { ScrollView } from 'react-native-gesture-handler';
import PropertiesScreen from '../dashboard/property/PropertiesScreen';
import { useNavigation } from '@react-navigation/native';

const DashboardHome = () => {
	const [showDashboard, setShowDashboard] = useState(true);
	const navigation = useNavigation();

	return (
		<View style={{ flex: 1 }}>
			<View style={dashboardStyles.buttonView}>
				<Button
					type="clear"
					containerStyle={dashboardStyles.dashboardButton}
					title="Dashboard"
					buttonStyle={{
						height: 60,
						borderBottomColor: '#109ED9',
						borderBottomWidth: showDashboard ? 2 : 0,
					}}
					titleStyle={{ fontFamily: 'OpenSans_600SemiBold' }}
					onPress={() => setShowDashboard(true)}
				/>
				<Button
					type="clear"
					containerStyle={dashboardStyles.propertiesButton}
					title="My Properties"
					buttonStyle={{
						height: 60,
						borderBottomColor: '#109ED9',
						borderBottomWidth: showDashboard ? 0 : 2,
					}}
					titleStyle={{ fontFamily: 'OpenSans_600SemiBold' }}
					onPress={() => setShowDashboard(false)}
				/>
			</View>
			{showDashboard ? (
				<View style={{ flex: 6, marginHorizontal: 30, marginTop: -15 }}>
					<Text style={dashboardStyles.summaryText}>Summary</Text>
					<Text style={dashboardStyles.summaryCaptionText}>
						Key statistics of your account
					</Text>
					<View style={dashboardStyles.summaryView}>
						<View style={dashboardStyles.boxView}>
							<Icons
								name="home-city"
								style={{
									flex: 1,
									fontSize: 40,
									color: '#109ED9',
									marginLeft: 7,
								}}
							/>
							<View style={dashboardStyles.boxTextView}>
								<Text style={dashboardStyles.boxQuantityText}>
									5
								</Text>
								<Text
									style={
										dashboardStyles.boxQuantityCaptionText
									}
								>
									Properties
								</Text>
							</View>
						</View>
						<View style={dashboardStyles.boxView}>
							<FontAwesomeIcons
								name="door-open"
								style={{
									flex: 1,
									fontSize: 40,
									color: '#109ED9',
									marginLeft: 7,
								}}
							/>
							<View style={dashboardStyles.boxTextView}>
								<Text style={dashboardStyles.boxQuantityText}>
									50
								</Text>
								<Text
									style={
										dashboardStyles.boxQuantityCaptionText
									}
								>
									Rooms
								</Text>
							</View>
						</View>
						<View style={dashboardStyles.boxView}>
							<FontAwesomeIcons
								name="door-open"
								style={{
									flex: 1,
									fontSize: 40,
									color: '#F78585',
									marginLeft: 7,
								}}
							/>
							<View style={dashboardStyles.boxTextView}>
								<Text style={dashboardStyles.boxQuantityText}>
									22
								</Text>
								<Text
									style={
										dashboardStyles.boxQuantityCaptionText
									}
								>
									Vacant Rooms
								</Text>
							</View>
						</View>
						<View style={dashboardStyles.boxView}>
							<FontAwesomeIcons
								name="users"
								style={{
									flex: 1,
									fontSize: 40,
									color: '#65C466',
									marginLeft: 7,
								}}
							/>
							<View style={dashboardStyles.boxTextView}>
								<Text style={dashboardStyles.boxQuantityText}>
									28
								</Text>
								<Text
									style={
										dashboardStyles.boxQuantityCaptionText
									}
								>
									Total Tenants
								</Text>
							</View>
						</View>
					</View>
					<View style={dashboardStyles.buttonContainerView}>
						<Button
							type="solid"
							title="Add Property"
							containerStyle={dashboardStyles.addPropertyButton}
							titleStyle={{ fontFamily: 'OpenSans_600SemiBold' }}
							onPress={() =>
								navigation.navigate('AddBuildingForm')
							}
						/>
						<Button
							type="solid"
							title="Add Tenants"
							containerStyle={dashboardStyles.addPropertyButton}
							titleStyle={{ fontFamily: 'OpenSans_600SemiBold' }}
							onPress={() => setShowDashboard(false)}
						/>
					</View>
					<View style={{ flex: 3 }}>
						<ScrollView>
							<Text
								style={dashboardStyles.recentNotificationText}
							>
								Recent Notifications
							</Text>
							<View
								style={dashboardStyles.randomNotificationView}
							>
								<FontAwesomeIcons
									name="circle"
									size={40}
									style={{ color: '#E5E5E5' }}
								/>
								<View>
									<Text
										style={{
											fontFamily: 'OpenSans_600SemiBold',
											fontSize: 16,
										}}
									>
										Notification
									</Text>
									<Text
										style={{
											fontFamily: 'OpenSans_600SemiBold',
											fontSize: 14,
											color: '#B8B8B8',
										}}
									>
										Key statistics of your account.
									</Text>
								</View>
							</View>
							<View
								style={dashboardStyles.randomNotificationView}
							>
								<FontAwesomeIcons
									name="circle"
									size={40}
									style={{ color: '#E5E5E5' }}
								/>
								<View>
									<Text
										style={{
											fontFamily: 'OpenSans_600SemiBold',
											fontSize: 16,
										}}
									>
										Notification
									</Text>
									<Text
										style={{
											fontFamily: 'OpenSans_600SemiBold',
											fontSize: 14,
											color: '#B8B8B8',
										}}
									>
										Key statistics of your account.
									</Text>
								</View>
							</View>
						</ScrollView>
					</View>
				</View>
			) : (
				<View style={{ flex: 9 }}>
					<PropertiesScreen />
				</View>
			)}
		</View>
	);
};

export default DashboardHome;
