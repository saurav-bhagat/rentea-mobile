import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { compareAsc } from 'date-fns';
import _ from 'lodash';
import TransactionCard from '../../../Tenant/payments/TransactionCard';

const UpcomingPayments = ({ data }) => {
	const upComingPaymentData =
		data && data.length ? (
			data.map((payment) => {
				const result = compareAsc(
					new Date(payment.txnDate),
					new Date()
				);
				if (result === 1) {
					return (
						<View key={_.random(1, 100) + '04-05-2021'}>
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
