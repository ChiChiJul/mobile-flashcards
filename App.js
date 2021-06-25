import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Flatlist, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' // ios
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs' // Android
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native'
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
import reducer from './reducers'
import { setData, setMyDeckData } from './utils/_calendar'

console.log('reducer: ', reducer)

const Tab = Platform.OS === 'ios'
	? createBottomTabNavigator()
	: createMaterialTopTabNavigator() 

const Stack = createStackNavigator()

export function getHeaderTitle(route) {
	const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
	
	switch (routeName) {
		case 'DeckList' :
			return 'DeckList'
		case 'NewDeck' :
			return 'NewDeck';
		default	:
			return null;
		}
}

function HomeTabs() {
	return (
		<Tab.Navigator
			/*initialRouteName='DeckList'*/
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
				options={({ route }) => ({
					headerTitle: getHeaderTitle(route),
				})}
			/>
			<Tab.Screen 
				name='NewDeck' 
				component={NewDeck}
				options={({ route }) => ({
					headerTitle: getHeaderTitle(route),
				})} 
			/>
		</Tab.Navigator>
	)
}

export default class App extends Component {
	componentDidMount() {
		console.log('in App. componentDidMount()')
		setMyDeckData()
	}
	render() {
		const store = createStore(reducer)
		console.log('this.props.navigation: ', this.props.navigation)
	    return (
	      <SafeAreaView style={styles.container}>
			{/*<Flatlist
				//data={DATA}
				//renderItem={renderItem}
				//keyExtractor={item => item.id}
			/>*/}
			<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name='Home'
						component={HomeTabs}
						options={({ route }) => ({
							headerTitle: getHeaderTitle(route),
						})}
					/>
					{/*<Stack.Screen name='Deck' component={Deck} />*/}
				</Stack.Navigator>
			</NavigationContainer>
	        <StatusBar style="auto" />
			</Provider>
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