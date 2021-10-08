import React, { useRef } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';

import { sliderStyles } from './sliderStyles';

const slides = [
	{
		key: 1,
		title: 'Manage all your properties at one go',
		text: 'Landloards can easily manage thier\nproperties in one app',
		image: require('./../../images/intro/manage-rent.png'),
	},
	{
		key: 2,
		title: 'Find Properties to Rent',
		text: 'Enable location to search.\nRentable Properties nearby',
		image: require('./../../images/intro/find-rent.png'),
	},
	{
		key: 3,
		title: 'Make Payments within the app',
		text: 'Tenants can pay their rent through\n the app itself',
		image: require('./../../images/intro/make-payments.png'),
	},
];

export const IntroSlider = () => {
	const navigation = useNavigation();
	const sliderRef = useRef();

	const renderItem = ({ item }) => {
		return (
			<View style={sliderStyles.introContainer}>
				<Image
					style={sliderStyles.logo}
					source={require('./../../images/intro/rentea-logo.png')}
				/>
				<Image source={item.image} />
				<View style={sliderStyles.textContainer}>
					<Text style={sliderStyles.title}>{item.title}</Text>
					<Text style={sliderStyles.description}>{item.text}</Text>
					{item.key < 3 && (
						<View style={sliderStyles.nextButton}>
							<Button
								title="Next"
								type="clear"
								onPress={() =>
									sliderRef.current.goToSlide(item.key, true)
								}
							/>
						</View>
					)}
				</View>
			</View>
		);
	};

	const renderDone = () => (
		<View style={sliderStyles.nextButton}>
			<Button title="Done" type="clear" onPress={onDone} />
		</View>
	);

	const onDone = () => {
		navigation.navigate('Login');
	};
	return (
		<View style={{ flex: 1 }}>
			<StatusBar translucent backgroundColor="transparent" />
			<AppIntroSlider
				keyExtractor={(item) => item.title}
				data={slides}
				onDone={onDone}
				renderItem={renderItem}
				renderDoneButton={renderDone}
				showNextButton={false}
				activeDotStyle={sliderStyles.activeDot}
				dotStyle={sliderStyles.dotStyle}
				ref={(ref) => (sliderRef.current = ref)}
			/>
		</View>
	);
};
