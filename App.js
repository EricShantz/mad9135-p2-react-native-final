import React, { useEffect, useState } from 'react';
import { Image } from 'react-native-elements';
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
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  //Fonts:
  let [fontsLoaded] = useFonts({
    Bakbak: require('./assets/fonts/Bakbak_One/BakbakOne-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  setTimeout(function () {
    setShowSplashScreen(false);
  }, 3000);

  return (
    <PlayersProvider>
      {showSplashScreen ? (
        <View style={(styles.container, styles.backgroundStyling)}>
          <Text style={styles.splashScreenText}> Welcome to</Text>
          <Image
            source={require('./assets/avatars/GoobieIcon2.png')}
            style={styles.goobie}
          ></Image>
        </View>
      ) : (
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, size }) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline';
                } else {
                  iconName = focused ? 'apps' : 'apps-outline';
                }
                return (
                  <Ionicons name={iconName} color={'#81FFFA'} size={size} />
                );
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
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  color: 'black',
                  fontSize: 20,
                },
                tabBarActiveBackgroundColor: '#414141',
                tabBarInactiveBackgroundColor: '#121212',
                tabBarLabelStyle: {
                  color: 'white',
                  fontSize: 14,
                },
                tabBarStyle: {
                  height: Dimensions.get('screen').height / 14,
                  borderTopColor: '#C6EB27',
                },
              }}
            />
            <Tab.Screen
              name="Games"
              component={GameScreen}
              options={{
                headerStyle: {
                  backgroundColor: '#FF9E3F',
                  shadowColor: 'transparent',
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  color: 'black',
                  fontSize: 20,
                },
                tabBarActiveBackgroundColor: '#414141',
                tabBarInactiveBackgroundColor: '#121212',
                tabBarLabelStyle: {
                  color: 'white',
                  fontSize: 14,
                },
                tabBarStyle: {
                  borderTopColor: '#BE0000',
                  height: Dimensions.get('screen').height / 14,
                },
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </PlayersProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  backgroundStyling: {
    backgroundColor: '#3C006F',
    height: Dimensions.get('screen').height,
  },

  splashScreenText: {
    marginTop: Dimensions.get('screen').height / 3,
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    fontFamily: 'Bakbak',
  },
  goobie: {
    marginHorizontal: Dimensions.get('screen').width / 12,
    width: 300,
    height: 200,
    zIndex: 10,
  },
});
