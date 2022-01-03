import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Card, Body, CardItem } from 'native-base';
import { useSelector } from 'react-redux';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import CrossPlatformHeader from '../../../components/common/CrossPlatformHeader';
import { navigate } from '../../../navigation/rootNavigation';

const OwnerBankDetailScreen = () => {
	const { accountName, accountNumber, ifsc, bankName, beneficiaryName } =
		useSelector(
			(state) => state.ownerDashbhoard.properties.ownerDashboardResult
		);

	return (
		<TouchableOpacity>
			<CrossPlatformHeader
				title="Bank Details"
				profile={false}
				backCallback={() => {
					navigate('ownerDashboard');
				}}
			/>
			<Card style={{ marginLeft: 30, marginRight: 30 }}>
				<CardItem>
					<Body>
						<FontAwesome5
							style={{
								position: 'absolute',
								right: 0,
								fontSize: 20,
								color: '#109FDA',
							}}
							name={'edit'}
						/>
						<View>
							<Text>Account name: {accountName}</Text>
							<Text>Account number: {accountNumber}</Text>
							<Text>IFSC: {ifsc}</Text>
							<Text>Bank name: {bankName}</Text>
							<Text>Beneficiary name: {beneficiaryName}</Text>
						</View>
					</Body>
				</CardItem>
			</Card>
		</TouchableOpacity>
	);
};

export default OwnerBankDetailScreen;
