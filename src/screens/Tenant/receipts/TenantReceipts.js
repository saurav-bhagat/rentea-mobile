import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { useSelector } from 'react-redux';
import CrossPlatformHeader from '../../../components/common/CrossPlatformHeader';

import ReceiptCard from './ReceiptCard';
import { tenantReceiptStyles } from './TenantReceiptStyles';

const TenantReceipts = () => {
	const { receipts } = useSelector(
		(state) => state.tenantDashboard.tenantDetails
	);
	return (
		<View style={tenantReceiptStyles.receiptContainer}>
			<CrossPlatformHeader title="Tenant Recipt" />

			<Text style={tenantReceiptStyles.headText}></Text>
			<ScrollView>
				{receipts.length ? (
					receipts.map((receipt) => {
						return (
							<View key={receipt._id}>
								<ReceiptCard receiptData={receipt} />
							</View>
						);
					})
				) : (
					<View>
						<Text>You did not perform any transaction yet!</Text>
					</View>
				)}
			</ScrollView>
		</View>
	);
};

export default TenantReceipts;
