import { Card, Body, CardItem } from 'native-base';
import React from 'react';
import { View, Text } from 'react-native';

import { paymentHisStyles } from './paymentHisStyles';

const TransactionCard = () => {
	return (
		<Card>
			<CardItem>
				<Body>
					<View style={{ width: '100%' }}>
						<View style={paymentHisStyles.transactionCard_row1}>
							<Text>05 July, 2021</Text>
							<Text>
								Amount:{' '}
								<Text style={paymentHisStyles.boldValue}>
									10,000
								</Text>
							</Text>
						</View>
						<View style={paymentHisStyles.transactionCard_row2}>
							<Text>
								Paid Through:{' '}
								<Text style={paymentHisStyles.boldValue}></Text>
								UPI(PhonePe)
							</Text>
						</View>
					</View>
				</Body>
			</CardItem>
		</Card>
	);
};

export default TransactionCard;
