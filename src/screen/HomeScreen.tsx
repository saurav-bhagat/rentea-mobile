import React, { ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
=======
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
>>>>>>> cad2246fe8d364177b10e07597895b1183f05f15
});

export default HomeScreen;
