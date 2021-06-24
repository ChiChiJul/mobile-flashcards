import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Flatlist, SafeAreaView } from 'react-native';
//import { createBottomTabNavigator } from 'react-native'
//import { NavigationContainer } from '@react-navigation/native'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' // ios
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs' // Android
import { NavigationContainer } from '@react-navigation/native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'
import { withNavigation } from 'react-navigation'

import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'
import AddCard from './components/AddCard'
import Question from './components/Question'
import NewQuestion from './components/NewQuestion'
import Answer from './components/Answer'
import Score from './components/Score'

import { purple, white, pink } from './utils/colors'

const Tab = Platform.OS === 'ios'
	? createBottomTabNavigator()
	: createMaterialTopTabNavigator() 

const Stack = createStackNavigator()

export default class App extends Component {
	render() {
		//const store = createStore(reducer)
		console.log('this.props.navigation: ', this.props.navigation)
	    return (
	      <SafeAreaView style={styles.container}>
			{/*<Flatlist
				//data={DATA}
				//renderItem={renderItem}
				//keyExtractor={item => item.id}
			/>*/}
			{/*<Provider store={store}>*/}
			<NavigationContainer>
				<Tab.Navigator
					initialRouteName='DeckList'
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							if (route.name === 'DeckList') {
								return (
									<Ionicons
										name={
											focused
												? 'ios-file-tray-stacked'
												: 'ios-file-tray-stacked-outline'
										}
										size={size}
										color={color}
									/>
								)
							}
							else if (route.name === 'NewDeck') {
								return (
									<Ionicons 
										name={focused ? 'ios-add-circle' : 'ios-add-circle-outline'}
										size={size}
										color={color}
									/>
								)
							}
						},
					})} // end of screenOptions
					tabBarOptions={{
						activeTintColor: 'tomato',
						inactiveTintColor: 'gray',
					}}
				>
					<Tab.Screen 
						name='DeckList' 
						component={DeckList} 
					/>
					<Tab.Screen 
						name='NewDeck' 
						component={NewDeck} 
					/>
				</Tab.Navigator>
						
				{/*<Stack.Navigator>
					<Stack.Screen name="Deck" component={Deck} />
					<Stack.Screen name="AddCard" component={AddCard} />
					<Stack.Screen name="Question" component={Question} />
					<Stack.Screen name="NewQuestion" component={NewQuestion} />
					<Stack.Screen name="Answer" component={Answer} />
					<Stack.Screen name="Score" component={Score} />
				</Stack.Navigator>*/}
						
						
				{/*<Tab.Navigator {...TabNavigatorConfig}>
					<Tab.Screen 
						//style={[styles.text, styles.bkColor]}
						name="DeckList"
						{...RouteConfigs['DeckList']} 
						component={DeckList} />
					<Tab.Screen
						name="NewDeck"
						{...RouteConfigs['NewDeck']}
						component={NewDeck} 
						/> 
				</Tab.Navigator>*/}
			</NavigationContainer>
	        <StatusBar style="auto" />
					{/*</Provider> */}
	      </SafeAreaView>
	    );
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    /*alignItems: 'center',*/
    justifyContent: 'center',
  },
  text: {
	  color: white
  },
  backgroundColor: {
	  backgroundColor: pink
  },
  width: {
	  flex: 1
  }
});



/*const RouteConfigs = {
	DeckList: {
		name: 'DeckList',
		component: DeckList,
		options: {
			title: 'DeckList',
			tabBarIcon: 
				({tintColor }) => 
					<Ionicons 
						name='bookmarks' 
						size={30} 
						color={tintColor} />
		}
	},
	NewDeck: {
		name: 'NewDeck',
		component: NewDeck,
		options: {
			title: 'Add New Deck',
			tabBarIcon: 
				({ tintColor }) => 
					<FontAwesome 
						name='plus-square' 
						size={30} 
						color={tintColor} />
		}
	}
}

const TabNavigatorConfig = {
	navigationOptions: {
		header: null
	},
	tabBarOptions: {
		activeTintColor: Platform.OS === 'ios' ? purple : pink,
		style: {
			height: 56,
			backgroundColor: Platform.OS === 'ios' ? pink : white,
			shadowColor: 'rgba(0, 0, 0, 0.24)',
			shadowOffset: {
				width: 0,
				height: 3
			},
			shadowRadius: 6,
			shadowOpacity: 1
		}
	}
}*/
