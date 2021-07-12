import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { Card, List, ListItem, Left } from 'native-base';

const BuildingAccordionContent = ({ detail }) => {
	const {
		floorCount,
		roomCount,
		pinCode,
		stateAddress,
		street,
		district,
		maintainerName,
		maintainerPhone,
	} = detail;
	return (
		<ScrollView
			style={styles.accordianContentContainer}
			nestedScrollEnabled={true}
		>
			<Card style={styles.buildingDetailCard}>
				<List>
					<ListItem>
						<Left>
							<Text style={{ fontSize: 13 }}>
								Number of Rooms : {roomCount}
							</Text>
						</Left>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ fontSize: 13 }}>
								Number of Floors : {floorCount}
							</Text>
						</Left>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ fontSize: 13 }}>
								Maintainer : Mr. {maintainerName} (
								{maintainerPhone})
							</Text>
						</Left>
					</ListItem>
					<ListItem>
						<Left>
							<Text style={{ fontSize: 13 }}>
								Address : Street no - {street} {district}{' '}
								{stateAddress} {pinCode}{' '}
							</Text>
						</Left>
					</ListItem>
				</List>
			</Card>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	accordianContentContainer: {
		width: '90%',
		marginRight: 'auto',
		marginLeft: 'auto',
	},
	buildingDetailCard: {
		width: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
});

export default BuildingAccordionContent;
