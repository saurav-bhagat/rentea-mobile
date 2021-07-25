import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions/counterActions';

const CounterScreen = () => {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	console.log('Counter is: ', counter.count);

	return (
		<View>
			<Text>Counter Screen</Text>

			<View>
				<Button
					title="Increment"
					onPress={() => dispatch(increment())}
				/>
				<Text>Count is: {counter.count}</Text>
				<Button
					title="Decrement"
					onPress={() => dispatch(decrement())}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	counter_container: {
		flex: 1,
		backgroundColor: '#f2f2f2',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CounterScreen;
