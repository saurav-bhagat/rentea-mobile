import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { Card, CardItem, Body } from 'native-base';
import { format } from 'date-fns';
import CrossPlatformHeader from '../../../components/common/CrossPlatformHeader';

import { paymentHisStyles } from './paymentHisStyles';

const TenantPaymentHistory = () => {
	const { tenantDetails } = useSelector((state) => state.tenantDashboard);
	const { tenantName, ownerName } = tenantDetails;
	const paymentHistoryData =
		tenantDetails && tenantDetails.payments.length ? (
			tenantDetails.payments.map((payment) => {
				const { _id, respCode, txnAmount, txnDate, paymentMode } =
					payment;
				let txnDateInPaymentFailedCase = _id.toString().substring(0, 8);
				txnDateInPaymentFailedCase = new Date(
					parseInt(txnDateInPaymentFailedCase, 16) * 1000
				);
				return (
					<Card key={_id}>
						<CardItem>
							<Body>
								<View>
									<Text>From : {tenantName}</Text>
								</View>
								<View>
									<Text>To : {ownerName}</Text>
								</View>
								<View>
									<Text>Amount : {txnAmount}</Text>
								</View>
								<View>
									<Text>
										Date :{' '}
										{txnDate
											? format(
													new Date(txnDate),
													'dd MMM, yyyy'
											  )
											: format(
													new Date(
														txnDateInPaymentFailedCase
													),
													'dd MMM, yyyy'
											  )}
									</Text>
								</View>
								<View>
									<Text>
										Status :{' '}
										{respCode === '01'
											? 'Success'
											: 'Failed'}
									</Text>
								</View>
								{paymentMode && (
									<View>
										<Text>Mode : {paymentMode}</Text>
									</View>
								)}
							</Body>
						</CardItem>
					</Card>
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
