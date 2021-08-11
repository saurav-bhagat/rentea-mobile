import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import {
	Container,
	Button,
	Header,
	Left,
	Right,
	Body,
	Title,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CrossPlatformHeader({ title, backCallback }) {
	return (
		<Header
			transparent
			androidStatusBarColor="#109FDA"
			iosBarStyle="default"
			style={{ marginTop: 10 }}
		>
			<Left>
				{backCallback && (
					<Button transparent onPress={backCallback}>
						<Icon
							name="chevron-back-outline"
							style={{ fontSize: 22 }}
						/>
					</Button>
				)}
			</Left>
			<Body>
				<Title style={HeaderStyle.header}>{title}</Title>
			</Body>
			<Right />
		</Header>
	);
}

const HeaderStyle = StyleSheet.create({
	header: {
		color: '#000',
		fontSize: 24,
		width: 270,
		right: Platform.OS === 'ios' ? 40 : 0,
	},
});
