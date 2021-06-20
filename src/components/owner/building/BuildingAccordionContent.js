import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


const BuildingAccordionContent = () => {
	return(
		<ScrollView style={styles.accordianContentContainer} nestedScrollEnabled={true}>
			<Text>Some random text</Text>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	accordianContentContainer: {
		borderWidth: 2,
		width: '90%',
		marginRight: 'auto',
		marginLeft: 'auto'
	}
});

export default BuildingAccordionContent;