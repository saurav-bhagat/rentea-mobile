import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
import { otpStyles } from './otpStyles';

const CustomKeyboard = ({ setOtpValues, otpValues }) => {
	const keyValues = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'',
		'0',
		'-1',
	];
	const setValueInOtpTxt = (value) => {
		otpValues.length !== 4 &&
			value !== '-1' &&
			value !== '' &&
			setOtpValues([...otpValues, value]);
		if (value === '-1') {
			const newOtpValues = [...otpValues];
			newOtpValues.pop();
			setOtpValues(newOtpValues);
		}
	};
	return (
		<View style={otpStyles.otpKeyPadContainer}>
			{keyValues.map((key, index) => {
				return (
					<View
						key={index}
						style={[
							otpStyles.numpadChild,
							index >= 0 && index <= 2
								? otpStyles.numpadTopBorder
								: null,
						]}
					>
						<TouchableOpacity
							onPress={() => {
								setValueInOtpTxt(key);
							}}
							style={otpStyles.keyBoardRow}
						>
							<Text style={otpStyles.key}>
								{key === '-1' ? (
									<FontAwesomeIcons
										name="backspace"
										style={otpStyles.backSpaceIcon}
									/>
								) : (
									key
								)}
							</Text>
						</TouchableOpacity>
					</View>
				);
			})}
		</View>
	);
};

export default CustomKeyboard;
