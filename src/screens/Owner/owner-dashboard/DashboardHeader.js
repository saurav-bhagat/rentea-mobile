import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/Entypo';
import { dashboardStyles } from './DashboardStyles';
import { useNavigation } from '@react-navigation/native';

const DashboardHeader = ({ usedInPaymentScreen }) => {
	const navigation = useNavigation();

	return (
		<View
			style={
				usedInPaymentScreen
					? dashboardStyles.topViewForPayment
					: dashboardStyles.topView
			}
		>
			<View style={dashboardStyles.topContentContainer}>
				<View style={{ flex: 0.5 }}>
					<Button
						type="solid"
						containerStyle={dashboardStyles.leftNavButton}
						icon={<Icon name="menu" size={25} color="black" />}
						onPress={() => navigation.openDrawer()}
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
							containerStyle={dashboardStyles.walletButton}
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
	);
};

export default DashboardHeader;
