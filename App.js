import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import GameScreen from './Screens/GameScreen';
import HomeScreen from './Screens/HomeScreen';
import { usePlayersContext, PlayersProvider } from './Context/AppContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PlayersProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="HomeScreen"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'HomeScreen') {
                iconName = focused ? 'home' : 'home-outline';
              } else {
                iconName = focused ? 'apps' : 'apps-outline';
              }
              return <Ionicons name={iconName} color={color} size={size} />;
            },
          })}
        >
          <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerStyle: {
                backgroundColor: '#BE0000',
              },
              headerTitleStyle: {
                color: 'white',
                fontSize: 25,
              },
              tabBarActiveBackgroundColor: '#610000',
              tabBarInactiveBackgroundColor: '#BE0000',
              tabBarLabelStyle: {
                color: 'white',
                fontSize: 14,
              },
              tabBarStyle: {
                borderTopColor: '#BE0000',
              },
            }}
          />
          <Tab.Screen
            name="Games"
            component={GameScreen}
            options={{
              headerStyle: {
                backgroundColor: '#BE0000',
                shadowColor: 'transparent',
              },
              headerTitleStyle: {
                color: 'white',
                fontSize: 25,
              },
              tabBarActiveBackgroundColor: '#610000',
              tabBarInactiveBackgroundColor: '#BE0000',
              tabBarLabelStyle: {
                color: 'white',
                fontSize: 14,
              },
              tabBarStyle: {
                borderTopColor: '#BE0000',
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PlayersProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
