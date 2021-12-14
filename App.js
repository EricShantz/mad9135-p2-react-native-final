import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import GameScreen from './Screens/GameScreen';
import HomeScreen from './Screens/HomeScreen';
import { usePlayersContext, PlayersProvider } from './Context/AppContext';
import { useFonts } from 'expo-font';

const Tab = createBottomTabNavigator();

export default function App() {
  //Fonts:
  let [fontsLoaded] = useFonts({
    Bakbak: require('./assets/fonts/Bakbak_One/BakbakOne-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PlayersProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else {
                iconName = focused ? 'apps' : 'apps-outline';
              }
              return <Ionicons name={iconName} color={color} size={size} />;
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: {
                backgroundColor: '#15002E',
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
            name="GameScreen"
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
