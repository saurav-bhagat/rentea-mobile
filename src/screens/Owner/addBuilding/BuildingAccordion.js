import React from 'react';
import { View, Text } from 'react-native';
import { Accordion } from 'native-base';

import BuildingAccordionContent from '../../../components/owner/building/BuildingAccordionContent';
import BuildingAccordionHeader from '../../../components/owner/building/BuildingAccordionHeader';

const BuildingAccordion = ({ buildingDetails }) => {
	const dataArray = buildingDetails.map((detail) => {
		return {
			title: detail.buildingName,
			content: <BuildingAccordionContent detail={detail} />,
		};
	});

	const renderHeader = (item, expanded) => (
		<BuildingAccordionHeader item={item} expanded={expanded} />
	);
	const renderContent = (item) => item.content;

	return (
		<View>
			{buildingDetails.length > 0 ? (
				<Accordion
					dataArray={dataArray}
					animation={true}
					expanded={[]}
					renderHeader={(item, expanded) =>
						renderHeader(item, expanded)
					}
					renderContent={(e) => renderContent(e)}
					onAccordionOpen={(item, index) => console.log(item, index)}
					onAccordionClose={(item, index) => console.log(item, index)}
					style={{ backgroundColor: 'white' }}
				/>
			) : (
				<Text>
					{' '}
					Click on the add button below to add building details
				</Text>
			)}
		</View>
	);
};

export default BuildingAccordion;
