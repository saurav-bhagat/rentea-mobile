import React, { useState } from 'react';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import { Button } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { ownerBankDetailsStyles } from './ownerBankDetailsStyle';
import { isValidBankDetails } from '../../../helpers/addBuildingValidation';
import { addBankDetailsData } from '../../../redux/actions/ownerActions/addBankDetailsAction';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { navigate } from '../../../navigation/rootNavigation';
import CrossPlatformHeader from '../../../components/common/CrossPlatformHeader';

const OwnerBankDetailsScreen = () => {
	const dispatch = useDispatch();
	const addBankDetailsState = useSelector((state) => state.addBankDetails);
	const [accountName, setAccountName] = useState('');
	const [accountNumber, setAccountNumber] = useState('');
	const [ifsc, setIfsc] = useState('');
	const [bankName, setBankName] = useState('');
	const [beneficiaryName, setBeneficiaryName] = useState('');

	const handleOwnerBankDetailsSubmit = () => {
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
	};

	return (
		<KeyboardAwareScrollView>
			<CrossPlatformHeader title="Bank Details" profile={false} />
			<View style={ownerBankDetailsStyles.oudsContainer}>
				<View style={ownerBankDetailsStyles.oudsTextContainer}>
					<Text style={ownerBankDetailsStyles.oudsShortText}>
						Enter your bank details below.
					</Text>
					<Text style={ownerBankDetailsStyles.oudsAsteriskText}>
						* Mandatory field.
					</Text>
				</View>

				<View style={ownerBankDetailsStyles.oudsFormContainer}>
					<TextInput
						style={ownerBankDetailsStyles.oudsPhoneInputBox}
						placeholderTextColor={'#aaa'}
						placeholder="Account Name*"
						onChangeText={(val) => setAccountName(val)}
					/>
					<TextInput
						style={ownerBankDetailsStyles.oudsPhoneInputBox}
						placeholderTextColor={'#aaa'}
						placeholder="Account Number*"
						onChangeText={(val) => setAccountNumber(val)}
						keyboardType="numeric"
					/>
					<TextInput
						style={ownerBankDetailsStyles.oudsPhoneInputBox}
						placeholderTextColor={'#aaa'}
						placeholder="IFSC*"
						onChangeText={(val) => setIfsc(val)}
					/>
					<TextInput
						style={ownerBankDetailsStyles.oudsPhoneInputBox}
						placeholderTextColor={'#aaa'}
						placeholder="Bank Name*"
						onChangeText={(val) => setBankName(val)}
					/>
					<TextInput
						style={ownerBankDetailsStyles.oudsPhoneInputBox}
						placeholderTextColor={'#aaa'}
						placeholder="Beneficiary Name"
						onChangeText={(val) => setBeneficiaryName(val)}
					/>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<Button
							rounded
							transparent
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
						</Button>
						<Button
							rounded
							transparent
							style={ownerBankDetailsStyles.oudsContinueButton}
							onPress={() => navigate('AddBuildingForm')}
						>
							<Text
								style={
									ownerBankDetailsStyles.oudsContinueButton_text
								}
							>
								skip
							</Text>
						</Button>
					</View>
				</View>
			</View>
		</KeyboardAwareScrollView>
	);
};

export default OwnerBankDetailsScreen;
