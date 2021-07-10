import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, List,ListItem,Left} from 'native-base';

const BuildingAccordionContent = () => {
	return(
		<ScrollView style={styles.accordianContentContainer} nestedScrollEnabled={true}>
		<Card style={styles.buildingDetailCard}>
		<List>
			<ListItem>
				<Left>
				   <Text style={{ fontSize: 13 }}>Number of Rooms : 5</Text>
				</Left>
			</ListItem>
			<ListItem>
				<Left>
				   <Text style={{ fontSize: 13 }}>Number of Floors : 2</Text>
				</Left>
			</ListItem>
			<ListItem>
				<Left>
				   <Text style={{ fontSize: 13 }}>Maintainer : Mr. Ramesh kumar yadav (1472583690)</Text>
				</Left>
			</ListItem>
			<ListItem>
				<Left>
				   <Text style={{ fontSize: 13 }}>Address :  #582 Street no-3 Azad Nagar Yamuna Nagar Haryan 135001</Text>
				</Left>

			</ListItem>
		</List>
		</Card>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	accordianContentContainer: {
	//	borderWidth: 2,
		width: '90%',
		marginRight: 'auto',
		marginLeft: 'auto'
	},
	buildingDetailCard:{
		width: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
	}
});

export default BuildingAccordionContent;