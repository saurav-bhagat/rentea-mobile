import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Accordion } from 'native-base';
import BuildingAccordionContent from '../../../components/owner/building/BuildingAccordionContent';
import BuildingAccordionHeader from '../../../components/owner/building/BuildingAccordionHeader';

const BuildingAccordion = ({ buildingDetails }) => {
	const dataArray = [
		{ title: 'Building 1', content: <BuildingAccordionContent /> },
		{ title: 'Building 2', content: <BuildingAccordionContent /> },
		{ title: 'Buildiing 3', content: <BuildingAccordionContent /> },
	];
	const renderHeader = (item, expanded) => (
		<BuildingAccordionHeader item={item} expanded={expanded} />
	);
	const renderContent = (item) => item.content;

	return (
		<View style={styles.accordianContainer}>
			<Accordion
				dataArray={dataArray}
				animation={true}
				expanded={[]}
				renderHeader={(item, expanded) => renderHeader(item, expanded)}
				renderContent={(e) => renderContent(e)}
				onAccordionOpen={(item, index) => console.log(item, index)}
				onAccordionClose={(item, index) => console.log(item, index)}
				style={{ backgroundColor: 'white' }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	accordianContainer: {
		// flex:1,
		// borderWidth:1,
		// height: 400
	},
});

export default BuildingAccordion;
