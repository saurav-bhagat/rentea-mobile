import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import TransactionCard from '../../../Tenant/payments/TransactionCard';

const CompletedPayments = ({ data }) => {
	const completedPaymentData =
		data && data.length ? (
			data.map((payment, i) => {
				return (
					<View key={i}>
						<TransactionCard data={payment} />
					</View>
				);
			})
		) : (
			<View>
				<Text>No completed payment yet</Text>
			</View>
		);
	return <ScrollView>{completedPaymentData}</ScrollView>;
};

export default CompletedPayments;
