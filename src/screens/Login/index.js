import React, { useEffect, createRef } from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	Image, 
	KeyboardAvoidingView, 
	SafeAreaView,
	Keyboard,
	TouchableWithoutFeedback
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import LoginComponent from './LoginComponent';
import { Header } from '@react-navigation/stack';

const LoginScreen = () => {
	const navigation = useNavigation();
	const sheetRef = React.useRef(null);
	const fall = new Animated.Value(1);

	useEffect(() => {
		navigation.addListener('focus', () => {
			console.log('Inside useEffect of LoginScreen');
		});
		
	}, []);

	const renderHeader = () => (
		<View style={styles.header}>
			<View style={styles.panelHeader}>
				<View style={styles.panelHandle} />
		  	</View>
		</View>
	);

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex:1}}>
					
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				keyboardVerticalOffset={-80}
				style={{flex:1}}
			>
				
				<View style={styles.loginContainer}>
					<View style={styles.login_logo}>
						<Image 
							source={require('../../images/rentea-logo.png')} 
							style={{
								width: '80%',
								height: 120
							}}
						/>
						<Text>Now, Manage your Property over a cup of Tea</Text>
					</View>
					<View style={styles.sheetContainer}>
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
							renderContent={() => <LoginComponent navigation={navigation} />}
						/>
					</View>
				</View>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	loginContainer: {
		flex : 1,
		backgroundColor: '#fff',
	},
	login_logo: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		shadowColor: '#000000',
		borderColor: '#f2f2f2',
		borderTopWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		paddingTop: 20,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	panelHeader: {
		alignItems: 'center',
	},
	panelHandle: {
		width: 40,
		height: 8,
		borderRadius: 4,
		backgroundColor: '#00000040',
		marginBottom: 10,
	},
	sheetContainer: {
		flex:1,
		shadowColor: '#000000',
    	shadowOffset: { width: 0, height: 0 },
    	shadowRadius: 5,
    	shadowOpacity: 0.5
	}
});

export default LoginScreen;