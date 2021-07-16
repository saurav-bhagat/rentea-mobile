import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Card, List, ListItem, Left } from 'native-base';

import { buildingAccordianStyles } from './buildindAccordianStyles';

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
			style={buildingAccordianStyles.accordianContentContainer}
			nestedScrollEnabled={true}
		>
			<Card style={buildingAccordianStyles.buildingDetailCard}>
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
								Maintainer : {maintainerName} ({maintainerPhone}
								)
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

export default BuildingAccordionContent;
