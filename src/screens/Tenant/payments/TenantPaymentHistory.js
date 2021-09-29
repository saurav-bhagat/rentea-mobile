import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { useSelector } from 'react-redux';
import CrossPlatformHeader from '../../../components/common/CrossPlatformHeader';

import { paymentHisStyles } from './paymentHisStyles';
import { PaymentHistoryCard } from './PaymentHistoryCard';

const TenantPaymentHistory = () => {
	const { tenantDetails } = useSelector((state) => state.tenantDashboard);
	const { tenantName, ownerName } = tenantDetails;
	const paymentHistoryData =
		tenantDetails && tenantDetails.payments.length ? (
			tenantDetails.payments.map((payment) => {
				const { _id } = payment;
				const paymentDetailResponse = {
					...payment,
					tenantName,
					ownerName,
				};
				return (
					<View key={_id} style={{ paddingHorizontal: 20 }}>
						<PaymentHistoryCard
							paymentDetailResponse={paymentDetailResponse}
						/>
					</View>
				);
			})
		) : (
			<View>
				<Text>You did not perform any transaction yet!</Text>
			</View>
		);
	return (
		<View style={paymentHisStyles.payHisContainer}>
			<CrossPlatformHeader title="Tenant Payment history" />
			<ScrollView>{paymentHistoryData}</ScrollView>
		</View>
	);
};

export default TenantPaymentHistory;
