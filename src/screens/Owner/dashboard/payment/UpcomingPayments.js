import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { compareAsc } from 'date-fns';
import TransactionCard from '../../../Tenant/payments/TransactionCard';

const UpcomingPayments = ({ data }) => {
	const upComingPaymentData =
		data && data.length ? (
			data.map((payment, i) => {
				const result = compareAsc(
					new Date(payment.txnDate),
					new Date()
				);
				if (result === 1) {
					return (
						<View key={i}>
							<TransactionCard data={payment} />
						</View>
					);
				}
			})
		) : (
			<View>
				<Text>No upcoming payment yet</Text>
			</View>
		);
	return <ScrollView>{upComingPaymentData}</ScrollView>;
};
export default UpcomingPayments;
