import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Tab, Tabs, DefaultTabBar } from 'native-base';
import { useSelector } from 'react-redux';
import PendingPayments from './PendingPayments';
import UpcomingPayments from './UpcomingPayments';
import CompletedPayments from './CompletedPayments';
import { ownerPaymentStyles } from './OwnerPaymentStyles';
import { useNavigation } from '@react-navigation/native';
import DashboardHeader from '../../owner-dashboard/DashboardHeader';

const renderTabBar = (props) => {
	props.tabStyle = Object.create(props.tabStyle);
	return <DefaultTabBar {...props} />;
};

const OwnerPaymentInfoScreen = () => {
	const navigation = useNavigation();
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
	let pendingAndUpcomingPaymentDataContainer = [];
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
						pendingAndUpcomingPaymentDataContainer.push({
							txnAmount: tenantRent,
							txnDate: rentDueDate,
							tenantName,
							roomNo,
							buildingName,
						});
					}
				}
			}
		}
		if (pendingAndUpcomingPaymentDataContainer.length) {
			for (
				let i = 0;
				i < pendingAndUpcomingPaymentDataContainer.length;
				i++
			) {
				const {
					txnAmount: rent,
					txnDate,
					tenantName,
					roomNo,
					buildingName,
				} = pendingAndUpcomingPaymentDataContainer[i];
				for (let j = 0; j < rent.length; j++) {
					if (!rent[j].isPaid) {
						pendingPaymentData.push({
							txnAmount: rent[j].amount,
							txnDate: rent[j].rentDueDate,
							tenantName,
							roomNo,
							buildingName,
							rentMonth: rent[j].month,
						});
						upcomingPaymentData.push({
							txnAmount: rent[j].amount,
							txnDate: rent[j].rentDueDate,
							tenantName,
							roomNo,
							buildingName,
							rentMonth: rent[j].month,
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
		<>
			<DashboardHeader usedInPaymentScreen={true} />
			<SafeAreaView style={ownerPaymentStyles.ownerPaymentContainer}>
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
			</SafeAreaView>
		</>
	);
};

export default OwnerPaymentInfoScreen;
