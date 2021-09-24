import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import _ from 'lodash';
import TransactionCard from '../../../Tenant/payments/TransactionCard';

const CompletedPayments = ({ data }) => {
	const completedPaymentData =
		data && data.length ? (
			data.map((payment) => {
				return (
					<View key={_.random(1, 100) + '04-05-2021'}>
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
