import { Card, Body, CardItem } from 'native-base';
import React from 'react';
import { View, Text } from 'react-native';

import { tenantReceiptStyles } from './TenantReceiptStyles';

const ReceiptCard = () => {
	return (
		<Card>
			<CardItem>
				<Body>
					<View style={{ width: '100%' }}>
						<View style={tenantReceiptStyles.receiptCard_row1}>
							<Text>For Month: July</Text>
							<Text>
								Amount Paid:{' '}
								<Text style={tenantReceiptStyles.boldValue}>
									10,000
								</Text>
							</Text>
						</View>
						<View style={tenantReceiptStyles.receiptCard_row2}>
							<Text>
								Paid Through:{' '}
								<Text
									style={tenantReceiptStyles.boldValue}
								></Text>
								UPI(PhonePe)
							</Text>
						</View>
					</View>
				</Body>
			</CardItem>
		</Card>
	);
};

export default ReceiptCard;
