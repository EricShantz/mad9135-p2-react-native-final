import React from 'react';
import {
  Text,
  Image,
  ActivityIndicator,
  ImageBackground,
  View,
} from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ShuffleScreen from '../Components/Shuffle';
import { theme } from '../theme';
import { usePlayersContext } from '../Context/AppContext';

export default function GameScreen() {
  const { players, setPlayers } = usePlayersContext();
  console.log(players);
  return (
    <SafeAreaView edges={['left', 'right']}>
      <Text>You've reached the Game Screen</Text>
      <ShuffleScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
