import { Card, Body, CardItem } from 'native-base';
import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import * as Print from 'expo-print';
import * as MediaLibrary from 'expo-media-library';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

import { tenantReceiptStyles } from './TenantReceiptStyles';

const htmlContent = `
	<h1>This is Receipt from Rentea</h1>
	<P> You have paid 10000 INR to owner for August </p>
`;

const ReceiptCard = () => {
	const handleReceiptClick = async () => {
		console.log('Going to download pdf now');
		try {
			const { uri } = await Print.printToFileAsync({
				html: htmlContent,
			});
			// console.log(uri);
			console.log('Printing doc:', FileSystem.documentDirectory);
			// const pdfName = `${uri.slice(
			// 	0,
			// 	uri.lastIndexOf('/') + 1
			// )}-receipt.pdf`;
			// console.log(uri);
			// console.log(pdfName);

			// if (Platform.OS === "ios") {
			// 	await Sharing.shareAsync(uri);
			// } else {
			// 	const permission = await MediaLibrary.requestPermissionsAsync();

			// 	if (permission.granted) {
			// 		// await MediaLibrary.createAssetAsync(uri); -> this will just download
			// 		await Print.printAsync({uri}); // this opens the pdf that can either be save or print
			// 	} else {
			// 		alert('Permission Deneid!');
			// 	}
			// }
		} catch (err) {
			console.error('Error in processing pdf: ', err);
		}
	};

	return (
		<TouchableOpacity onPress={handleReceiptClick}>
			<Card>
				<CardItem>
					<Body>
						<View style={{ width: '100%' }}>
							<View style={tenantReceiptStyles.receiptCard_row1}>
								<Text>For Month: July</Text>
								<Text>
									Amount Paid:{' '}
									<Text style={tenantReceiptStyles.boldValue}>
										10,000
									</Text>
								</Text>
							</View>
							<View style={tenantReceiptStyles.receiptCard_row2}>
								<Text>
									Paid Through:{' '}
									<Text
										style={tenantReceiptStyles.boldValue}
									></Text>
									UPI(PhonePe)
								</Text>
							</View>
						</View>
					</Body>
				</CardItem>
			</Card>
		</TouchableOpacity>
	);
};

export default ReceiptCard;
