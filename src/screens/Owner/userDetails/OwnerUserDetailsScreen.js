import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import { Button } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { userDetailsStyles } from './userDetailsStyles';
import { isValidUserDetails } from '../../../helpers/addBuildingValidation';
import { addUserDetail } from '../../../redux/actions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useNotification from '../../../components/common/useNotification';
import SelectDropdown from 'react-native-select-dropdown';
import {
	fetchStates,
	fetchCities,
	defaultStatesList
} from '../../../redux/actions/getCityStateData';

const OwnerUserDetailsScreen = () => {
	const dispatch = useDispatch();
	const addUserState = useSelector((state) => state.userDetail);
	const [fName, setFName] = useState('');
	const [lName, setLName] = useState('');
	const [email, setEmail] = useState('');
	const [address1, setAddress1] = useState('');
	const [address2, setAddress2] = useState('');
	const [stat, setStat] = useState('');
	const [city, setCity] = useState('');
	const [pincode, setPincode] = useState('');
	const [stateArray, setStateArray] = useState([]);
	const [citiesArray, setCitiesArray] = useState([]);
	const cityDropDownRef = useRef();

	const { expoPushToken } = useNotification();

	const handleUserDetailsSubmit = () => {

		let formData = {
			fName,
			lName: fName,
			email,
			address1,
			address2,
			stat,
			city,
			pincode,
			expoPushToken,
		};
		if (isValidUserDetails(formData)) {
			// dispatch SaveUserDetails Action, remove console.log
			dispatch(addUserDetail(formData));
		} else {
			alert('Enter fields properly');
		}
	};

	const fetchStatesData = () => {
		fetchStates().then((result) => {
			setStateArray(result);
			console.log(result);
		});
	}

	const updateCitySelect = (stateName) => {
		console.log('State', stateName);
		const stateForCity = stateArray.filter(
			(state) => state.name === stateName.name
		);
		fetchCities(stateForCity[0].iso2)
			.then((response) => {
				setCitiesArray(response);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		fetchStatesData();
	}, []);

	return (
		<KeyboardAwareScrollView>
			<View style={userDetailsStyles.oudsContainer}>
				<View style={userDetailsStyles.oudsTextContainer}>
					<Text style={userDetailsStyles.oudsWelcomeText}>
						Get Started
					</Text>
					<Text style={userDetailsStyles.oudsShortText}>
						Enter your details
					</Text>
					{/* <Text style={userDetailsStyles.oudsAsteriskText}>
						* Mandatory field.
					</Text> */}
				</View>

				<View style={userDetailsStyles.oudsFormContainer}>
					<TextInput
						style={userDetailsStyles.oudsPhoneInputBox}
						placeholderTextColor={'#aaa'}
						placeholder="Full Name*"
						onChangeText={(val) => setFName(val)}
					/>
					<TextInput
						style={userDetailsStyles.oudsPhoneInputBox}
						placeholderTextColor={'#aaa'}
						placeholder="Email ID*"
						onChangeText={(val) => setEmail(val)}
					/>
				</View>
				<View style={userDetailsStyles.oudsTextContainer}>
					<Text style={userDetailsStyles.oudsShortText2}>
						Enter your personal address
					</Text>
				</View>
				<View style={userDetailsStyles.oudsFormContainer}>
					<TextInput
						value={address1}
						style={userDetailsStyles.oudsPhoneInputBox}
						placeholderTextColor={'#aaa'}
						placeholder="Address Line 1"
						onChangeText={(val) => setAddress1(val)}
					/>
					<TextInput
						value={address2}
						style={userDetailsStyles.oudsPhoneInputBox}
						placeholderTextColor={'#aaa'}
						placeholder="Address Line 2"
						onChangeText={(val) => setAddress2(val)}
					/>
				</View>
				<View style={userDetailsStyles.oudsRegionContainer}>
					<View style={userDetailsStyles.dropdownsRow}>
						{stateArray?.length >= 0 &&
							<SelectDropdown
								data={stateArray}
								onSelect={(selectedItem, index) => {
									console.log(selectedItem, index);
									setStat(selectedItem.name);
									setCity('');
									cityDropDownRef.current.reset();
									updateCitySelect(selectedItem);
								}}
								buttonTextAfterSelection={(selectedItem, index) => {
									// text represented after item is selected
									// if data array is an array of objects then return selectedItem.property to render after item is selected
									return selectedItem.name;
								}}
								rowTextForSelection={(item, index) => {
									// text represented for each item in dropdown
									// if data array is an array of objects then return item.property to represent item in dropdown
									return item.name;
								}}
								buttonStyle={userDetailsStyles.dropdownBtnStyle}
								buttonTextStyle={stat ? userDetailsStyles.dropdownBtnTxtStyleActive : userDetailsStyles.dropdownBtnTxtStyleInactive}
								rowStyle={userDetailsStyles.dropdownRowStyle}
								rowTextStyle={userDetailsStyles.dropdownRowTxtStyle}
								defaultButtonText="Select your state"
							/>
						}
						<View style={{ width: 12 }} />
						{citiesArray?.length >= 0 &&
							<SelectDropdown
								ref={cityDropDownRef}
								data={citiesArray}
								disabled={!stat}
								onSelect={(selectedItem, index) => {
									console.log(selectedItem, index);
									setCity(selectedItem.name);
								}}
								buttonTextAfterSelection={(selectedItem, index) => {
									// text represented after item is selected
									// if data array is an array of objects then return selectedItem.property to render after item is selected
									return selectedItem.name;
								}}
								rowTextForSelection={(item, index) => {
									// text represented for each item in dropdown
									// if data array is an array of objects then return item.property to represent item in dropdown
									return item.name;
								}}
								buttonStyle={stat ? userDetailsStyles.dropdownBtnStyle : userDetailsStyles.dropdownBtnStyleDisabled}
								buttonTextStyle={city ? userDetailsStyles.dropdownBtnTxtStyleActive : userDetailsStyles.dropdownBtnTxtStyleInactive}
								rowStyle={userDetailsStyles.dropdownRowStyle}
								rowTextStyle={userDetailsStyles.dropdownRowTxtStyle}
								defaultButtonText="Select your city"
							/>
						}
					</View>
					<View style={userDetailsStyles.oudsFormContainer}>
						<TextInput
							value={pincode}
							style={userDetailsStyles.oudsPhoneInputBox}
							placeholderTextColor={'#aaa'}
							placeholder="Pincode"
							onChangeText={(val) => setPincode(val)}
						/>

						<Button
							// rounded
							transparent
							style={userDetailsStyles.oudsContinueButton}
							onPress={() => handleUserDetailsSubmit()}
						>
							{addUserState.loading ? (
								<ActivityIndicator color="#ffffff" size="large" />
							) : (
								<Text
									style={
										userDetailsStyles.oudsContinueButton_text
									}
								>
									Continue
								</Text>
							)}
						</Button>
					</View>
				</View>
			</View>
		</KeyboardAwareScrollView>
	);
};

export default OwnerUserDetailsScreen;
