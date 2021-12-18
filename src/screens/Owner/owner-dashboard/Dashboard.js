import React from 'react';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { View, Text, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
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

const Dashboard = () => {
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
				<View style={dashboardStyles.topView}>
					<View style={dashboardStyles.topContentContainer}>
						<View style={{ flex: 0.5 }}>
							<Button
								type="solid"
								containerStyle={dashboardStyles.leftNavButton}
								icon={
									<Icon name="menu" size={25} color="black" />
								}
							></Button>
						</View>
						<View
							style={{
								flex: 0.5,
							}}
						>
							<Text style={dashboardStyles.revenueText}>
								Total Revenue
							</Text>
							<View
								style={{
									flexDirection: 'row',
									alignSelf: 'flex-end',
									flexWrap: 'wrap',
								}}
							>
								<Button
									type="solid"
									containerStyle={
										dashboardStyles.walletButton
									}
									icon={
										<Fontisto
											name="wallet"
											size={25}
											color="#fff"
										/>
									}
								></Button>
								<View style={{ flexDirection: 'column' }}>
									<Text style={dashboardStyles.inInrText}>
										In INR
									</Text>
									<Text style={dashboardStyles.amountText}>
										5,000
									</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View style={{ flex: 6 }}>
					<OwnerDashboardBottomTab />
				</View>
				<StatusBar style="dark" backgroundColor="#109ED9" />
			</ScrollView>
		);
	}
};
export default Dashboard;
