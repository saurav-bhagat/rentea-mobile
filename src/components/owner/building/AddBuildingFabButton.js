import React from 'react';
import { StyleSheet } from 'react-native';
import { Fab, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/core';

const AddBuildingFabButton = () => {

	const navigation = useNavigation();

	return (
		<Fab
			active={true}
			direction="up"
			containerStyle={{ }}
			style={styles.fabStyle}
			position="bottomRight"
			onPress={() => navigation.navigate('AddBuildingForm')}>
				<Icon name="add" style={{ fontSize: 40	 }} />
        </Fab>
	);
};

const styles = StyleSheet.create({
	fabStyle: {
		backgroundColor: '#109FDA', 
		width: 80, 
		height: 80, 
		borderRadius: 50
	}
});

export default AddBuildingFabButton;

