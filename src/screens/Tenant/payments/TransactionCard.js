import { Card, Body, CardItem } from 'native-base';
import React from 'react';
import { View, Text } from 'react-native';
import { format } from 'date-fns';
import { paymentHisStyles } from './paymentHisStyles';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { transactionCardStyles } from './TransactionCardStyles';

const TransactionCard = ({ data, color }) => {
	const navigation = useNavigation();
	let time;
	if (color) {
		data['color'] = color;
	}
	if (data._id) {
		//  extracting date+time from incoming mongodb id
		time = new Date(
			parseInt(data._id.toString().substring(0, 8), 16) * 1000
		);
		time = format(new Date(time), 'dd MMM yyyy ,hh:mm a');
	}
	return (
		<Card style={transactionCardStyles.cardContainer} noShadow>
			<CardItem
				onPress={() =>
					navigation.navigate('TransactionScreen', { data })
				}
				style={[
					transactionCardStyles.cardItem,
					{ backgroundColor: color },
				]}
			>
				<Body>
					<View style={transactionCardStyles.cardBodyView}>
						<FaIcon name="user-circle" size={45} color="#4c4c4c" />
						<View style={transactionCardStyles.cardTextContainer}>
							<View>
								<Text
									style={
										transactionCardStyles.tenantTextStyle
									}
								>
									{data.tenantName}
								</Text>
							</View>
							<View>
								<Text
									style={transactionCardStyles.dateTextStyle}
								>
									Due :{' '}
									{format(
										new Date(data.txnDate),
										'dd MMM, yyyy'
									)}
								</Text>
							</View>
						</View>
					</View>
				</Body>
			</CardItem>
		</Card>
	);
};

export default TransactionCard;
