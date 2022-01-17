import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navigate } from '../../../../navigation/rootNavigation';
import TransactionCard from '../../../Tenant/payments/TransactionCard';
import { ownerPaymentStyles } from './OwnerPaymentStyles';

const completedColor = '#00AE0259';

const CompletedPayments = ({ data }) => {
	const completedPaymentData =
		data && data.length ? (
			data.map((payment, i) => {
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
								color={completedColor}
							/>
						</View>
					</TouchableOpacity>
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
