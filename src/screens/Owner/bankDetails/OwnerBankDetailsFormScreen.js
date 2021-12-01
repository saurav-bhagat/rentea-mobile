import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Clipboard from 'expo-clipboard';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { ownerBankDetailsStyles } from './ownerBankDetailsStyle';
import { isValidBankDetails } from '../../../helpers/addBuildingValidation';
import { addBankDetailsData } from '../../../redux/actions/ownerActions/addBankDetailsAction';
import { navigate } from '../../../navigation/rootNavigation';
import CrossPlatformHeader from '../../../components/common/CrossPlatformHeader';

const OwnerBankDetailsScreen = () => {
	const dispatch = useDispatch();
	const addBankDetailsState = useSelector((state) => state.addBankDetails);
	const [accountName, setAccountName] = useState('');
	const [accountNumber, setAccountNumber] = useState('');
	const [confirmAccountNumber, setConfirmAccountNumber] = useState('');
	const [ifsc, setIfsc] = useState('');
	const [bankName, setBankName] = useState('');
	const [beneficiaryName, setBeneficiaryName] = useState('');
	const isFocused = useIsFocused();

	const { firstLogin } = useSelector((state) => state.auth.userInfo);

	useEffect(() => {}, [isFocused]);
	const handleOwnerBankDetailsSubmit = () => {
		if (accountNumber === confirmAccountNumber) {
			let formData = {
				accountName,
				accountNumber,
				ifsc,
				bankName,
				beneficiaryName,
			};

			if (isValidBankDetails(formData)) {
				dispatch(addBankDetailsData(formData));
			} else {
				alert('Enter fields properly');
			}
		} else {
			alert("Both the account numbers don't match.");
		}
	};

	return (
		<View style={{ backgroundColor: '#ffffff', flex: 1 }}>
			<CrossPlatformHeader title="" profile={false} />
			<View style={ownerBankDetailsStyles.oudsContainer}>
				<View style={ownerBankDetailsStyles.oudsTextContainer}>
					<Text style={ownerBankDetailsStyles.oudsShortText}>
						Add Bank
					</Text>
					<Text style={ownerBankDetailsStyles.oudsdetailsText}>
						Enter your Bank details
					</Text>
				</View>

				<View style={ownerBankDetailsStyles.oudsFormContainer}>
					<TextInput
						style={ownerBankDetailsStyles.bankDetailsInput}
						placeholderTextColor={'#aaa'}
						placeholder="Account Name*"
						onChangeText={(val) => setAccountName(val)}
					/>
					<TextInput
						secureTextEntry={true}
						contextMenuHidden={true}
						selectTextOnFocus={false}
						onBlur={() => Clipboard.setString('')}
						onFocus={() => Clipboard.setString('')}
						onSelectionChange={() => Clipboard.setString('')}
						style={ownerBankDetailsStyles.bankDetailsInput}
						placeholderTextColor={'#aaa'}
						placeholder="Account Number*"
						onChangeText={(val) => setAccountNumber(val)}
						keyboardType="numeric"
					/>
					<TextInput
						contextMenuHidden
						selectTextOnFocus={false}
						onBlur={() => Clipboard.setString('')}
						onFocus={() => Clipboard.setString('')}
						onSelectionChange={() => Clipboard.setString('')}
						style={ownerBankDetailsStyles.bankDetailsInput}
						placeholderTextColor={'#aaa'}
						placeholder="Confirm Account Number*"
						onChangeText={(val) => setConfirmAccountNumber(val)}
						keyboardType="numeric"
					/>
					<TextInput
						style={ownerBankDetailsStyles.bankDetailsInput}
						placeholderTextColor={'#aaa'}
						placeholder="IFSC*"
						onChangeText={(val) => setIfsc(val)}
					/>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<TouchableOpacity
							style={ownerBankDetailsStyles.oudsContinueButton}
							onPress={() =>
								firstLogin
									? navigate('AddBuildingForm')
									: navigate('ownerDashboard')
							}
						>
							<Text
								style={[
									ownerBankDetailsStyles.oudsContinueButton_text,
									{ color: '#acadae' },
								]}
							>
								Skip
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={ownerBankDetailsStyles.oudsContinueButton}
							onPress={() => handleOwnerBankDetailsSubmit()}
						>
							{addBankDetailsState.loading ? (
								<ActivityIndicator
									color="#ffffff"
									size="large"
								/>
							) : (
								<Text
									style={
										ownerBankDetailsStyles.oudsContinueButton_text
									}
								>
									Continue
								</Text>
							)}
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default OwnerBankDetailsScreen;
