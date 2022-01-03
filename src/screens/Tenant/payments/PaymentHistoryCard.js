import { Card, Body, CardItem } from 'native-base';
import React from 'react';
import { View, Text } from 'react-native';
import { format } from 'date-fns';

export const PaymentHistoryCard = ({ paymentDetailResponse }) => {
	const {
		_id,
		tenantName,
		ownerName,
		txnAmount,
		txnDate,
		respCode,
		paymentMode,
	} = paymentDetailResponse;

	let txnDateInPaymentFailedCase = _id.toString().substring(0, 8);
	txnDateInPaymentFailedCase = new Date(
		parseInt(txnDateInPaymentFailedCase, 16) * 1000
	);

	return (
		<Card style={{ paddingHorizontal: 10 }}>
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
								? format(new Date(txnDate), 'dd MMM, yyyy')
								: format(
										new Date(txnDateInPaymentFailedCase),
										'dd MMM, yyyy'
								  )}
						</Text>
					</View>
					<View>
						<Text>
							Status : {respCode === '01' ? 'Success' : 'Failed'}
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
};
