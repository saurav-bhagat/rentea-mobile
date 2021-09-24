import React from 'react';
import { View, Text } from 'react-native';
import { Tab, Tabs, DefaultTabBar } from 'native-base';
import { useSelector } from 'react-redux';
import PendingPayments from './PendingPayments';
import UpcomingPayments from './UpcomingPayments';
import CompletedPayments from './CompletedPayments';

import { ownerPaymentStyles } from './OwnerPaymentStyles';
import CrossPlatformHeader from '../../../../components/common/CrossPlatformHeader';

const renderTabBar = (props) => {
	props.tabStyle = Object.create(props.tabStyle);
	return <DefaultTabBar {...props} />;
};

const OwnerPaymentInfoScreen = () => {
	const ownerBuilding = useSelector(
		(state) =>
			state.ownerDashbhoard.properties.ownerDashboardResult.buildings
	);
	let completedPaymentData = [];
	let pendingPaymentData = [];
	let upcomingPaymentData = [];
	let tenantPlusRentContainer = [];
	let paymentDetailsContainer = [];
	if (ownerBuilding && ownerBuilding.length) {
		for (
			let buildingIndex = 0;
			buildingIndex < ownerBuilding.length;
			buildingIndex++
		) {
			let building = ownerBuilding[buildingIndex];
			const { rooms } = building;
			if (rooms && rooms.length) {
				for (let roomIndex = 0; roomIndex < rooms.length; roomIndex++) {
					const { tenants, rent } = rooms[roomIndex];
					tenantPlusRentContainer.push({ tenants, rent });
				}
			}
		}

		if (tenantPlusRentContainer.length) {
			for (let i = 0; i < tenantPlusRentContainer.length; i++) {
				let { rent, tenants } = tenantPlusRentContainer[i];
				if (tenants && tenants.length) {
					for (
						let tenantIndex = 0;
						tenantIndex < tenants.length;
						tenantIndex++
					) {
						const { paymentDetails, rentDueDate } =
							tenants[tenantIndex];
						paymentDetails &&
							paymentDetails.length &&
							paymentDetailsContainer.push(paymentDetails);
						pendingPaymentData.push({
							txnAmount: rent,
							txnDate: rentDueDate,
						});
						upcomingPaymentData.push({
							txnAmount: rent,
							txnDate: rentDueDate,
						});
					}
				}
			}
		}

		if (paymentDetailsContainer.length) {
			for (let i = 0; i < paymentDetailsContainer.length; i++) {
				const paymentDetails = paymentDetailsContainer[i];
				if (paymentDetails && paymentDetails.length) {
					for (
						let paymentDetailIndex = 0;
						paymentDetailIndex < paymentDetails.length;
						paymentDetailIndex++
					) {
						completedPaymentData.push(
							paymentDetails[paymentDetailIndex]
						);
					}
				}
			}
		}
	}
	return (
		<View style={ownerPaymentStyles.ownerPaymentContainer}>
			<CrossPlatformHeader title="Payment Info" />
			<Tabs renderTabBar={renderTabBar}>
				<Tab
					tabStyle={{ backgroundColor: '#109FDA' }}
					activeTabStyle={{ backgroundColor: '#109FDA' }}
					heading="Pending"
				>
					<PendingPayments data={pendingPaymentData} />
				</Tab>
				<Tab
					tabStyle={{ backgroundColor: '#109FDA' }}
					activeTabStyle={{ backgroundColor: '#109FDA' }}
					heading="Upcoming"
				>
					<UpcomingPayments data={upcomingPaymentData} />
				</Tab>
				<Tab
					tabStyle={{ backgroundColor: '#109FDA' }}
					activeTabStyle={{ backgroundColor: '#109FDA' }}
					heading="Completed"
				>
					<CompletedPayments data={completedPaymentData} />
				</Tab>
			</Tabs>
		</View>
	);
};

export default OwnerPaymentInfoScreen;
