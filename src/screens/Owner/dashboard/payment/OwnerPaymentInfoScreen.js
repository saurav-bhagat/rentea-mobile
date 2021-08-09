import React from 'react';
import { View, Text } from 'react-native';
import { Tab, Tabs, DefaultTabBar } from 'native-base';

import PendingPayments from './PendingPayments';
import UpcomingPayments from './UpcomingPayments';
import CompletedPayments from './CompletedPayments';

import { ownerPaymentStyles } from './OwnerPaymentStyles';

const renderTabBar = (props) => {
	props.tabStyle = Object.create(props.tabStyle);
	return <DefaultTabBar {...props} />;
};

const OwnerPaymentInfoScreen = () => {
	return (
		<View style={ownerPaymentStyles.ownerPaymentContainer}>
			<Tabs renderTabBar={renderTabBar}>
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
