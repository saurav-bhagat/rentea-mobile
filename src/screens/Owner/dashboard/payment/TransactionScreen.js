import React from 'react';
import { View, Text } from 'react-native';
import CrossPlatformHeader from '../../../../components/common/CrossPlatformHeader';
import { navigate } from '../../../../navigation/rootNavigation';
import { format } from 'date-fns';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import { ownerPaymentStyles } from './OwnerPaymentStyles';

const completedColor = '#00AE0259';
const pendingColor = '#FF6363';
const upcomingColor = '#96E0FF';

const TransactionScreen = ({ route }) => {
	const { payment: data } = route.params;
	let iconColor, iconName;
	if (data.color === upcomingColor) {
		iconColor = '#109ED9';
		iconName = 'check-circle';
	}
	if (data.color === completedColor) {
		iconColor = '#65C466';
		iconName = 'check-circle';
	}
	if (data.color === pendingColor) {
		iconColor = '#F78585';
		iconName = 'exclamation-circle';
	}
	return (
		<View style={ownerPaymentStyles.transactionScreenContainer}>
			<CrossPlatformHeader
				profile={false}
				backCallback={() => navigate('ownerDashboard')}
			/>
			<View style={ownerPaymentStyles.transactionSlipContainer}>
				<View style={ownerPaymentStyles.transactionDataContainer}>
					<FaIcon
						name={iconName}
						size={110}
						style={ownerPaymentStyles.iconStyle}
						color={iconColor}
					/>
					<Text style={ownerPaymentStyles.paymentTextStyle}>
						Payment Total
					</Text>
					<Text style={ownerPaymentStyles.transactionAmountTextStyle}>
						{data.txnAmount}
					</Text>
					<View style={ownerPaymentStyles.dataFieldContainer}>
						<Text
							style={
								ownerPaymentStyles.leftSideTransactionTextStyle
							}
						>
							{data.paymentMode ? 'Paid on ' : 'Due date '}
						</Text>
						<Text
							style={
								ownerPaymentStyles.rightSideTransactionTextStyle
							}
						>
							{format(new Date(data.txnDate), 'dd MMM, yyyy')}
						</Text>
					</View>
					<View
						style={[
							ownerPaymentStyles.dataFieldContainer,
							{
								marginTop: 10,
							},
						]}
					>
						<Text
							style={
								ownerPaymentStyles.leftSideTransactionTextStyle
							}
						>
							Room
						</Text>
						<Text
							style={
								ownerPaymentStyles.rightSideTransactionTextStyle
							}
						>
							{data.roomNo}
						</Text>
					</View>
					<View
						style={[
							ownerPaymentStyles.dataFieldContainer,
							{ marginTop: 10 },
						]}
					>
						<Text
							style={
								ownerPaymentStyles.leftSideTransactionTextStyle
							}
						>
							Building
						</Text>
						<Text
							style={
								ownerPaymentStyles.rightSideTransactionTextStyle
							}
						>
							{data.buildingName}{' '}
						</Text>
					</View>
					<View
						style={[
							ownerPaymentStyles.dataFieldContainer,
							{ marginTop: 10 },
						]}
					>
						<Text
							style={
								ownerPaymentStyles.leftSideTransactionTextStyle
							}
						>
							rentMonth
						</Text>
						<Text
							style={
								ownerPaymentStyles.rightSideTransactionTextStyle
							}
						>
							{data.rentMonth}{' '}
						</Text>
					</View>
					<View style={ownerPaymentStyles.horizontalRow}></View>
					<View
						style={[
							ownerPaymentStyles.dataFieldContainer,
							{ marginTop: 10 },
						]}
					>
						<Text
							style={
								ownerPaymentStyles.leftSideTransactionTextStyle
							}
						>
							Total Payment
						</Text>
						<Text
							style={
								ownerPaymentStyles.rightSideTransactionTextStyle
							}
						>
							{data.txnAmount}
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default TransactionScreen;
