import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { compareAsc } from 'date-fns';
import TransactionCard from '../../../Tenant/payments/TransactionCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navigate } from '../../../../navigation/rootNavigation';
import { ownerPaymentStyles } from './OwnerPaymentStyles';

const pendingColor = '#FF6363';

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
						<TouchableOpacity
							key={i}
							onPress={() =>
								navigate('TransactionScreen', { payment })
							}
						>
							<View
								key={i}
								style={
									ownerPaymentStyles.transactionCardContainer
								}
							>
								<TransactionCard
									data={payment}
									color={pendingColor}
								/>
							</View>
						</TouchableOpacity>
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
