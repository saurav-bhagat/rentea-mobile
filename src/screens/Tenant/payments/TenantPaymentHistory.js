import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, CardItem, Body } from 'native-base';

import { paymentHisStyles } from './paymentHisStyles';
import TransactionCard from './TransactionCard';

const TenantPaymentHistory = () => {
	return (
		<View style={paymentHisStyles.payHisContainer}>
			<Text style={paymentHisStyles.headText}>
				Tenant Payment history(use common header)
			</Text>
			<ScrollView>
				<TransactionCard />
				<TransactionCard />
				<TransactionCard />
				<TransactionCard />
				<TransactionCard />
				<TransactionCard />
				<TransactionCard />
				<TransactionCard />
				<TransactionCard />
				<TransactionCard />
				<TransactionCard />
			</ScrollView>
		</View>
	);
};

export default TenantPaymentHistory;
