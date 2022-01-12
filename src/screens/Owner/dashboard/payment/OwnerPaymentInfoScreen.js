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
	const { ownerDashboardResult } = useSelector(
		(state) => state.ownerDashbhoard.properties
	);
	const ownerBuilding = ownerDashboardResult
		? ownerDashboardResult.buildings
		: null;
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
			const { rooms, name: buildingName } = building;
			if (rooms && rooms.length) {
				for (let roomIndex = 0; roomIndex < rooms.length; roomIndex++) {
					const { tenants, rent, roomNo, isMultipleTenant } =
						rooms[roomIndex];
					tenantPlusRentContainer.push({
						tenants,
						rent,
						roomNo,
						buildingName,
						isMultipleTenant,
					});
				}
			}
		}

		if (tenantPlusRentContainer.length) {
			for (let i = 0; i < tenantPlusRentContainer.length; i++) {
				let { rent, tenants, roomNo, buildingName, isMultipleTenant } =
					tenantPlusRentContainer[i];
				if (tenants && tenants.length) {
					for (
						let tenantIndex = 0;
						tenantIndex < tenants.length;
						tenantIndex++
					) {
						const {
							paymentDetails,
							rentDueDate,
							name: tenantName,
							rent: tenantRent,
						} = tenants[tenantIndex];
						paymentDetails &&
							paymentDetails.length &&
							paymentDetailsContainer.push({
								paymentDetails,
								tenantName,
								roomNo,
								buildingName,
							});

						pendingPaymentData.push({
							txnAmount: isMultipleTenant ? tenantRent : rent,
							txnDate: rentDueDate,
							tenantName,
							roomNo,
							buildingName,
						});
						upcomingPaymentData.push({
							txnAmount: isMultipleTenant ? tenantRent : rent,
							txnDate: rentDueDate,
							tenantName,
							roomNo,
							buildingName,
						});
					}
				}
			}
		}

		if (paymentDetailsContainer.length) {
			for (let i = 0; i < paymentDetailsContainer.length; i++) {
				const { paymentDetails, tenantName, roomNo, buildingName } =
					paymentDetailsContainer[i];
				if (paymentDetails && paymentDetails.length) {
					for (
						let paymentDetailIndex = 0;
						paymentDetailIndex < paymentDetails.length;
						paymentDetailIndex++
					) {
						completedPaymentData.push({
							...paymentDetails[paymentDetailIndex],
							tenantName,
							roomNo,
							buildingName,
						});
					}
				}
			}
		}
	}
	return (
		<View style={ownerPaymentStyles.ownerPaymentContainer}>
			<Tabs
				renderTabBar={renderTabBar}
				tabContainerStyle={ownerPaymentStyles.tabContainerStyle}
				style={ownerPaymentStyles.tabBackgroundColor}
				tabBarUnderlineStyle={{ width: 0 }}
			>
				<Tab
					heading="Pending"
					tabStyle={ownerPaymentStyles.tabStyle}
					activeTabStyle={[
						ownerPaymentStyles.activeTabStyle,
						{ marginLeft: 5 },
					]}
					textStyle={ownerPaymentStyles.textStyle}
					activeTextStyle={ownerPaymentStyles.activeTextStyle}
				>
					<PendingPayments data={pendingPaymentData} />
				</Tab>
				<Tab
					tabStyle={ownerPaymentStyles.tabStyle}
					activeTabStyle={ownerPaymentStyles.activeTabStyle}
					activeTextStyle={ownerPaymentStyles.activeTextStyle}
					textStyle={ownerPaymentStyles.textStyle}
					heading="Upcoming"
				>
					<UpcomingPayments data={upcomingPaymentData} />
				</Tab>
				<Tab
					tabStyle={ownerPaymentStyles.tabStyle}
					activeTabStyle={[
						ownerPaymentStyles.activeTabStyle,
						{ marginRight: 5 },
					]}
					textStyle={ownerPaymentStyles.textStyle}
					activeTextStyle={ownerPaymentStyles.activeTextStyle}
					heading="Completed"
				>
					<CompletedPayments data={completedPaymentData} />
				</Tab>
			</Tabs>
		</View>
	);
};

export default OwnerPaymentInfoScreen;
