import { Card, Body, CardItem } from 'native-base';
import React from 'react';
import { View, Text } from 'react-native';
import { format } from 'date-fns';

import { paymentHisStyles } from './paymentHisStyles';

const TransactionCard = ({ data }) => {
	return (
		<Card>
			<CardItem>
				<Body>
					<View style={{ width: '100%' }}>
						<View style={paymentHisStyles.transactionCard_row1}>
							<Text>
								{format(new Date(data.txnDate), 'dd MMM, yyyy')}
							</Text>
							<Text>
								Amount:{' '}
								<Text style={paymentHisStyles.boldValue}>
									{data.txnAmount}
								</Text>
							</Text>
						</View>
						{data.paymentMode && (
							<View style={paymentHisStyles.transactionCard_row2}>
								<Text>
									Paid Through:{' '}
									<Text
										style={paymentHisStyles.boldValue}
									></Text>
									{data.paymentMode}
								</Text>
							</View>
						)}
					</View>
				</Body>
			</CardItem>
		</Card>
	);
};

export default TransactionCard;
