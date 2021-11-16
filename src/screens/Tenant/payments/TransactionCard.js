import { Card, Body, CardItem } from 'native-base';
import React from 'react';
import { View, Text } from 'react-native';
import { format } from 'date-fns';
import { paymentHisStyles } from './paymentHisStyles';

const TransactionCard = ({ data }) => {
	let time;
	if (data._id) {
		//  extracting date+time from incoming mongodb id
		time = new Date(
			parseInt(data._id.toString().substring(0, 8), 16) * 1000
		);
		time = format(new Date(time), 'dd MMM yyyy ,hh:mm a');
	}
	return (
		<Card>
			<CardItem>
				<Body>
					<View style={{ width: '100%' }}>
						<View>
							<Text>Building Name : {data.buildingName}</Text>
						</View>
						<View>
							<Text>Room Number : {data.roomNo}</Text>
						</View>
						<View>
							<Text>Tenant Name : {data.tenantName}</Text>
						</View>
						<View>
							<Text>
								Date :{' '}
								{format(new Date(data.txnDate), 'dd MMM, yyyy')}
							</Text>
						</View>
						<View>
							<Text>
								Amount:{' '}
								<Text style={paymentHisStyles.boldValue}>
									{data.txnAmount}
								</Text>
							</Text>
						</View>
						{data.paymentMode && (
							<View>
								<Text>
									Paid Through:{' '}
									<Text
										style={paymentHisStyles.boldValue}
									></Text>
									{data.paymentMode}
								</Text>
							</View>
						)}
						{data._id && (
							<View>
								<Text>Time : {time}</Text>
							</View>
						)}
					</View>
				</Body>
			</CardItem>
		</Card>
	);
};

export default TransactionCard;
