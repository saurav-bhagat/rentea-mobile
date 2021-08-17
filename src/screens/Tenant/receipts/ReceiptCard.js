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
	const handleReceiptView = async () => {
		try {
			const { uri } = await Print.printToFileAsync({
				html: htmlContent,
				base64: true,
			});
			if (Platform.OS === 'ios') {
				await Print.PrintAsync({ uri });
			} else {
				await Print.printAsync({ uri }); // this opens the pdf that can either be save or print
			}
		} catch (err) {
			console.log('Error while viewing pdf', err);
		}
	};

	const handleReceiptShare = async () => {
		try {
			const { uri } = await Print.printToFileAsync({
				html: htmlContent,
			});
			if (Platform.OS === 'ios') {
				await Sharing.shareAsync(uri);
			} else {
				await Sharing.shareAsync(uri);
			}
		} catch (err) {
			console.log('Error while sharing pdf', err);
		}
	};

	return (
		<TouchableOpacity>
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
								<View
									style={
										tenantReceiptStyles.actionButtonContainer
									}
								>
									<TouchableOpacity
										style={tenantReceiptStyles.actionButton}
										onPress={handleReceiptView}
									>
										<Text
											style={
												tenantReceiptStyles.actionButton_text
											}
										>
											View
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={tenantReceiptStyles.actionButton}
										onPress={handleReceiptShare}
									>
										<Text
											style={
												tenantReceiptStyles.actionButton_text
											}
										>
											Share
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</Body>
				</CardItem>
			</Card>
		</TouchableOpacity>
	);
};

export default ReceiptCard;
