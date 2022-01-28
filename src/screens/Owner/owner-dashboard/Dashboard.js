import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';
import { dashboardStyles } from './DashboardStyles';

import {
	useFonts,
	OpenSans_600SemiBold,
	OpenSans_600SemiBold_Italic,
	OpenSans_700Bold,
	OpenSans_700Bold_Italic,
} from '@expo-google-fonts/open-sans';
import OwnerDashboardBottomTab from '../../../navigation/OwnerDashboardBottomTab';

const Dashboard = ({ navigation }) => {
	let [fontsLoaded] = useFonts({
		OpenSans_600SemiBold,
		OpenSans_600SemiBold_Italic,
		OpenSans_700Bold,
		OpenSans_700Bold_Italic,
	});

	if (!fontsLoaded) {
		return <ActivityIndicator color="#109FDA" size="large" />;
	} else {
		return (
			<ScrollView
				contentContainerStyle={dashboardStyles.dashBoardContainer}
			>
				<View style={{ flex: 6 }}>
					<OwnerDashboardBottomTab />
				</View>
				<StatusBar style="dark" backgroundColor="#109ED9" />
			</ScrollView>
		);
	}
};
export default Dashboard;
