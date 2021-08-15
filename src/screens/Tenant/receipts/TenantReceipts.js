import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CrossPlatformHeader from '../../../components/common/CrossPlatformHeader';

import ReceiptCard from './ReceiptCard';

import { tenantReceiptStyles } from './TenantReceiptStyles';

const TenantReceipts = () => {
	return (
		<View style={tenantReceiptStyles.receiptContainer}>
			<CrossPlatformHeader title="Tenant Recipt" />

			<Text style={tenantReceiptStyles.headText}></Text>
			<ScrollView>
				<ReceiptCard />
				<ReceiptCard />
				<ReceiptCard />
				<ReceiptCard />
				<ReceiptCard />
				<ReceiptCard />
				<ReceiptCard />
				<ReceiptCard />
				<ReceiptCard />
			</ScrollView>
		</View>
	);
};

export default TenantReceipts;
