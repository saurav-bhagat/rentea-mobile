import React, { ReactElement, useState } from 'react';
import {
	View,
	SafeAreaView,
	Text,
	TextInput,
	StyleSheet,
	Button,
	Modal,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { API_URL } from '@env';
import { useSelector } from 'react-redux';

const FormScreen = () => {
	const [formModalVisible, setFormModalVisible] = useState(true);
	const [acknowldgement, setAcknowldgement] = useState('');
	const [webViewFlag, setWebViewFlag] = useState(false);
	const [name, setName] = useState('');
	const [amount, setAmount] = useState('');
	const userId = useSelector((state) => state.auth.userInfo.userDetails._id);

	const handlePaynow = () => {
		console.log(name, amount);
		setFormModalVisible(false);
		setWebViewFlag(true);
	};

	const handleResponse = (title) => {
		if (title == true) {
			setWebViewFlag(false);
			setAcknowldgement('Transaction successfull');
		} else if (title == false) {
			setWebViewFlag(false);
			setAcknowldgement('Opps something went wrong');
		}
	};
	return (
		<View style={styles.container}>
			<Modal visible={formModalVisible}>
				<SafeAreaView>
					<TextInput
						style={styles.input}
						onChangeText={setName}
						placeholder="enter name"
						value={name}
					/>
					<TextInput
						style={styles.input}
						onChangeText={setAmount}
						value={amount}
						placeholder="enter amount"
						keyboardType="numeric"
					/>
					<Button
						onPress={handlePaynow}
						title="Paynow"
						color="#841584"
					/>
				</SafeAreaView>
			</Modal>
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
						body: `name=${name}&amount=${amount}&orderId=${userId}`,
					}}
					onNavigationStateChange={(data) =>
						handleResponse(data.title)
					}
				/>
			</Modal>
			<Text>{acknowldgement}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 40,
		padding: 10,
	},
	input: {
		borderWidth: 1,
		borderColor: '#dddd',
		padding: 10,
		fontSize: 18,
		borderRadius: 6,
		margin: 10,
	},
});

export default FormScreen;
