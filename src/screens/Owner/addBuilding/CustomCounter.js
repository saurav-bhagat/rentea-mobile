import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';

import { useSelector } from 'react-redux';
import { customCounterStyles } from './customCounterStyles';

const CustomCounter = ({ count, setCounter, setModalVisible }) => {
	const { roomDetails } = useSelector((state) => state.addRoomDetails);
	useEffect(() => {
		setCounter(roomDetails.length);
	}, [roomDetails.length]);
	return (
		<View style={customCounterStyles.counterContainer}>
			<Button
				title={'-'}
				titleStyle={{ color: '#109ED9' }}
				buttonStyle={customCounterStyles.counterBtn}
				onPress={() => setCounter((prev) => prev - 1)}
				disabled={true}
				containerStyle={{ opacity: 0.2 }}
				disabledStyle={{ color: '#109ED9' }}
			/>
			<View style={customCounterStyles.counterTxtCont}>
				<Text style={customCounterStyles.counterTxt}>{count}</Text>
			</View>
			<Button
				title={'+'}
				titleStyle={{ color: '#109ED9' }}
				buttonStyle={customCounterStyles.counterBtn}
				onPress={() => {
					setCounter((prev) => prev + 1);
					setModalVisible(true);
				}}
			/>
		</View>
	);
};

export default CustomCounter;
