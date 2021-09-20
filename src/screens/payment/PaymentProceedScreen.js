import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { API_URL } from '@env';
import { useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';

import CrossPlatformHeader from '../../components/common/CrossPlatformHeader';
import { navigate } from '../../navigation/rootNavigation';
import createReceipt from '../../helpers/createReceipt';

const PaymentProceedScreen = () => {
	const [acknowldgement, setAcknowldgement] = useState('');
	const [webViewFlag, setWebViewFlag] = useState(false);
	const userDetails = useSelector((state) => state.auth.userInfo.userDetails);
	const authState = useSelector((state) => state.auth);
	const { _id: userId, ownerName, tenantName, rent } = userDetails;

	const handleResponse = (data) => {
		console.log(data);
		if (data.title[0] == '{') {
			// The data contain whole info about transaction
			data = JSON.parse(data.title);

			if (data.RESPCODE[0] == 0 && data.RESPCODE[1] == 1) {
				setWebViewFlag(false);
				createReceipt(data, authState);
				setAcknowldgement('Transaction successfull');
			} else {
				setWebViewFlag(false);
				setAcknowldgement('Opps something went wrong');
			}
		}
	};
	return (
		<View>
			<CrossPlatformHeader
				title="Pay Now"
				backCallback={() => {
					navigate('TenantDashboard');
				}}
			/>
			<View style={styles.body}>
				<View>
					<Text>Owner Name : {ownerName}</Text>
					<Text>Your Name : {tenantName}</Text>
					<Text>Amount : {rent}</Text>
				</View>

				<TouchableOpacity style={styles.proceedButton}>
					<Text
						style={styles.proceedButton_text}
						onPress={() => setWebViewFlag(true)}
					>
						Proceed
					</Text>
				</TouchableOpacity>
			</View>
			<Modal
				visible={webViewFlag}
				onRequestClose={() => {
					setWebViewFlag(false);
				}}
			>
				<WebView
					source={{
						uri: `${API_URL}/payment/initiate-payment`,
						method: 'POST',
						body: `name=${tenantName}&amount=${rent}&orderId=${userId}`,
					}}
					onNavigationStateChange={(data) => handleResponse(data)}
				/>
			</Modal>
			<Text>{acknowldgement && alert(acknowldgement)}</Text>
		</View>
	);
};

const styles = ScaledSheet.create({
	body: {
		flex: 1,
		padding: 20,
	},
	proceedButton: {
		padding: 20,
		marginTop: '100@ms',
		backgroundColor: '#109FDA',
		justifyContent: 'center',
		height: '50@ms',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		borderRadius: 35,
	},
	proceedButton_text: {
		color: '#fff',
		// fontSize: '20@ms0.3',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: 1,
		textAlign: 'center',
	},
});

export default PaymentProceedScreen;
