import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Flatlist, SafeAreaView } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


export default class App extends Component {
	render() {
	    return (
	      <SafeAreaView style={styles.container}>
			{/*<Flatlist
				//data={DATA}
				//renderItem={renderItem}
				//keyExtractor={item => item.id}
			/>*/}
	        <Text>Open up App.js to start working on your app!</Text>
	        <StatusBar style="auto" />
	      </SafeAreaView>
	    );
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
