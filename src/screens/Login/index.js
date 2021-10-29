import React, { useEffect } from 'react';
import {
	View,
	Text,
	Image,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
	BackHandler,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import LoginComponent from './LoginComponent';
import { loginStyles } from './loginStyles';

const LoginScreen = () => {
	const navigation = useNavigation();
	const sheetRef = React.useRef(null);
	const fall = new Animated.Value(1);

	useEffect(() => {
		navigation.addListener('focus', () => {
			console.log('Inside useEffect of LoginScreen');
		});
	}, []);

	// To disable hardware back press once user reaches login screen
	useEffect(() => {
		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			() => true
		);
		return () => backHandler.remove();
	}, []);

	const renderHeader = () => (
		<View style={loginStyles.header}>
			<View style={loginStyles.panelHeader}>
				<View style={loginStyles.panelHandle} />
			</View>
		</View>
	);

	return (
		<TouchableWithoutFeedback
			onPress={Keyboard.dismiss}
			style={{ flex: 1 }}
		>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				keyboardVerticalOffset={-150}
				style={{ flex: 1 }}
			>
				<View style={loginStyles.loginContainer}>
					<View style={loginStyles.login_logo}>
						<Image
							source={require('../../images/rentea-logo.png')}
							style={{
								width: '80%',
								height: 140,
							}}
						/>
						<Text>Now, Manage your Property over a cup of Tea</Text>
					</View>
					<View style={loginStyles.sheetContainer}>
						<BottomSheet
							ref={sheetRef}
							snapPoints={['50%', 0]}
							initialSnap={0}
							borderRadius={10}
							callbackNode={fall}
							enableGestureInteraction={false}
							enabledHeaderGestureInteraction={false}
							enabledContentGestureInteraction={false}
							enabledManualSnapping={false}
							enabledBottomInitialAnimation={true}
							renderHeader={renderHeader}
							renderContent={() => (
								<LoginComponent navigation={navigation} />
							)}
						/>
					</View>
				</View>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
};

export default LoginScreen;
