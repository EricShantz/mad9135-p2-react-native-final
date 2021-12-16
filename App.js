import React, { useEffect, useState } from 'react';
import {Image } from "react-native-elements"
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import GameScreen from './Screens/GameScreen';
import HomeScreen from './Screens/HomeScreen';
import { usePlayersContext, PlayersProvider } from './Context/AppContext';
import { useFonts } from 'expo-font';
import { theme } from './theme';

const Tab = createBottomTabNavigator();

export default function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true)
  //Fonts:
  let [fontsLoaded] = useFonts({
    Bakbak: require('./assets/fonts/Bakbak_One/BakbakOne-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  setTimeout(function(){
    setShowSplashScreen(false)
  }, 3000)

  return (
    <PlayersProvider>
      {showSplashScreen ?
        <View style={styles.container, styles.backgroundStyling}>
          <Text style={styles.splashScreenText}> Welcome to</Text>
          <Image source={require('./assets/avatars/GoobieIcon2.png')} style={styles.goobie}></Image>
      </View>
      :
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
                backgroundColor: '#30d5c8',
              },
              headerTitleStyle: {
                color: 'black',
                fontSize: 25,
              },
              tabBarActiveBackgroundColor: '#fff',
              // tabBarInactiveBackgroundColor: '#',
              tabBarLabelStyle: {
                color: 'black',
                fontSize: 14,
              },
              tabBarStyle: {
                borderTopColor: '#C6EB27',
              },
            }}
          />
          <Tab.Screen
            name="Games"
            component={GameScreen}
            options={{
              headerStyle: {
                backgroundColor: '#30d5c8',
                shadowColor: 'transparent',
              },
              headerTitleStyle: {
                color: 'black',
                fontSize: 25,
              },
              tabBarActiveBackgroundColor: '#fff',
              // tabBarInactiveBackgroundColor: '#BE0000',
              tabBarLabelStyle: {
                color: 'black',
                fontSize: 14,
              },
              tabBarStyle: {
                borderTopColor: '#BE0000',
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    }
    </PlayersProvider>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },

  backgroundStyling:{
    backgroundColor: '#30d5c8',
    height: Dimensions.get('screen').height
  },

  splashScreenText:{
    marginTop: Dimensions.get("screen").height/3,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Bakbak',
  },
  goobie:{
    marginHorizontal: Dimensions.get('screen').width/12,
    width: 300,
    height: 200,
    zIndex: 10
  }

})
