import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TenantDashboard from '../screens/Tenant/dashboard/TenantDashboard';
import TenantPaymentHistory from '../screens/Tenant/payments/TenantPaymentHistory';
import TenantReceipts from '../screens/Tenant/receipts/TenantReceipts';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from '../screens/payment/FormScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TenantDashboardStack = () => (
	<Stack.Navigator
		screenOptions={({ route, navigation }) => ({
			headerShown: true,
			gestureEnabled: true,
		})}
	>
		<Stack.Screen name="TenantDashboard" component={TenantDashboard} />
		<Stack.Screen name="Payment" component={FormScreen} />
	</Stack.Navigator>
);

export default TenantDashboardBottomTab = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'Home') {
						iconName = focused ? 'home-sharp' : 'home-outline';
					} else if (route.name === 'Payment History') {
						iconName = focused ? 'cash-sharp' : 'cash-outline';
					} else if (route.name === 'Receipts') {
						iconName = focused
							? 'receipt-sharp'
							: 'receipt-outline';
					}

					// You can return any component that you like here!
					return (
						<Ionicons name={iconName} size={size} color={color} />
					);
				},
			})}
			tabBarOptions={{
				activeTintColor: '#109FDA',
				inactiveTintColor: 'gray',
			}}
		>
			<Tab.Screen name="Home" component={TenantDashboardStack} />
			<Tab.Screen
				name="Payment History"
				component={TenantPaymentHistory}
			/>
			<Tab.Screen name="Receipts" component={TenantReceipts} />
		</Tab.Navigator>
	);
};
