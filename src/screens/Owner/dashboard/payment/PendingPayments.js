import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { compareAsc } from 'date-fns';
import TransactionCard from '../../../Tenant/payments/TransactionCard';

const PendingPayments = ({ data }) => {
	const pendingPaymentData =
		data && data.length ? (
			data.map((payment, i) => {
				const result = compareAsc(
					new Date(payment.txnDate),
					new Date()
				);
				if (result === -1) {
					return (
						<View key={i}>
							<TransactionCard data={payment} />
						</View>
					);
				}
			})
		) : (
			<View>
				<Text>No pending payment yet </Text>
			</View>
		);
	return <ScrollView>{pendingPaymentData}</ScrollView>;
};

export default PendingPayments;
