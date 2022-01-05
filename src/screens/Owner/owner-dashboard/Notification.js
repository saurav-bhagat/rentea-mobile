import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
import { dashboardStyles } from './DashboardStyles';

const Notification = () => {
	return (
		<View>
			<ScrollView>
				<Text style={dashboardStyles.recentNotificationText}>
					Recent Notifications
				</Text>
				<View style={dashboardStyles.randomNotificationView}>
					<FontAwesomeIcons
						name="circle"
						size={40}
						style={{ color: '#E5E5E5' }}
					/>
					<View>
						<Text style={dashboardStyles.notificationHeadingText}>
							Notification
						</Text>
						<Text style={dashboardStyles.notificationContentText}>
							Key statistics of your account.
						</Text>
					</View>
				</View>
				<View style={dashboardStyles.randomNotificationView}>
					<FontAwesomeIcons
						name="circle"
						size={40}
						style={{ color: '#E5E5E5' }}
					/>
					<View>
						<Text style={dashboardStyles.notificationHeadingText}>
							Notification
						</Text>
						<Text style={dashboardStyles.notificationContentText}>
							Key statistics of your account.
						</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default Notification;
