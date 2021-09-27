import React from 'react';
import { StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';

export default function SnackBar({
	visible,
	onDismissSnackBar,
	onToggleSnackBar,
	text,
	bottom,
}) {
	return (
		<Snackbar
			visible={visible}
			onDismiss={onDismissSnackBar}
			action={{
				label: 'OK!',
				onPress: () => {
					onToggleSnackBar();
				},
			}}
			duration={3000}
			style={{
				backgroundColor: '#000',
				bottom: bottom || 50,
			}}
		>
			{text}
		</Snackbar>
	);
}

const styles = StyleSheet.create({});
