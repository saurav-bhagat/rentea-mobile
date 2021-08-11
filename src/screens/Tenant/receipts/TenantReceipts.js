import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import ReceiptCard from './ReceiptCard';

import { tenantReceiptStyles } from './TenantReceiptStyles';

const TenantReceipts = () => {
	return (
		<View style={tenantReceiptStyles.receiptContainer}>
			<Text style={tenantReceiptStyles.headText}>
				Tenant Receipt (use common Header)
			</Text>
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
