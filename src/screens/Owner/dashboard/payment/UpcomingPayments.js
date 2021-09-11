import React from 'react';
import { ScrollView } from 'react-native';
import TransactionCard from '../../../Tenant/payments/TransactionCard';

const UpcomingPayments = () => {
	return (
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
	);
};

export default UpcomingPayments;
