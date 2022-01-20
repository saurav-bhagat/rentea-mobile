import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { compareAsc } from 'date-fns';
import TransactionCard from '../../../Tenant/payments/TransactionCard';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navigate } from '../../../../navigation/rootNavigation';
import { ownerPaymentStyles } from './OwnerPaymentStyles';

const pendingColor = '#FF6363';

const PendingPayments = ({ data }) => {
	const pendingPayTransactions =
		data && data.length
			? data.reduce((payData, item) => {
					const result = compareAsc(
						new Date(item.txnDate),
						new Date()
					);
					if (result === -1) {
						payData.push(item);
					}
					return payData;
			  }, [])
			: [];

	const pendingPaymentData =
		pendingPayTransactions && pendingPayTransactions.length ? (
			pendingPayTransactions.map((payment, i) => {
				return (
					<TouchableOpacity
						key={i}
						onPress={() =>
							navigate('TransactionScreen', { payment })
						}
					>
						<View
							key={i}
							style={ownerPaymentStyles.transactionCardContainer}
						>
							<TransactionCard
								data={payment}
								color={pendingColor}
							/>
						</View>
					</TouchableOpacity>
				);
			})
		) : (
			<View style={ownerPaymentStyles.noPaymentsContainer}>
				<MaterialIcons name="error" size={45} color={'#868c8b'} />
				<Text style={ownerPaymentStyles.noPaymentText}>
					No Pending Payments
				</Text>
			</View>
		);

	return <ScrollView>{pendingPaymentData}</ScrollView>;
};

export default PendingPayments;
