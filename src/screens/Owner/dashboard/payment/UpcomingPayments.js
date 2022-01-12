import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { compareAsc } from 'date-fns';
import TransactionCard from '../../../Tenant/payments/TransactionCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navigate } from '../../../../navigation/rootNavigation';
import { ownerPaymentStyles } from './OwnerPaymentStyles';

const upcomingColor = '#96E0FF';

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
									color={upcomingColor}
								/>
							</View>
						</TouchableOpacity>
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
