import React from 'react';
import { View, Text } from 'react-native';
import { Tab, Tabs } from 'native-base';

import PendingPayments from './PendingPayments';
import UpcomingPayments from './UpcomingPayments';
import CompletedPayments from './CompletedPayments';

import { ownerPaymentStyles } from './OwnerPaymentStyles';

const OwnerPaymentInfoScreen = () => {
	return (
		<View style={ownerPaymentStyles.ownerPaymentContainer}>
			<Tabs>
				<Tab
					tabStyle={{ backgroundColor: '#109FDA' }}
					activeTabStyle={{ backgroundColor: '#109FDA' }}
					heading="Pending"
				>
					<PendingPayments />
				</Tab>
				<Tab
					tabStyle={{ backgroundColor: '#109FDA' }}
					activeTabStyle={{ backgroundColor: '#109FDA' }}
					heading="Upcoming"
				>
					<UpcomingPayments />
				</Tab>
				<Tab
					tabStyle={{ backgroundColor: '#109FDA' }}
					activeTabStyle={{ backgroundColor: '#109FDA' }}
					heading="Completed"
				>
					<CompletedPayments />
				</Tab>
			</Tabs>
		</View>
	);
};

export default OwnerPaymentInfoScreen;
