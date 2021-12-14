import React from 'react';
import {
  Text,
  Button,
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
import { useState, useEffect } from 'react';

export default function GameScreen() {
  const { players, setPlayers } = usePlayersContext();
  const [showSpin, setShowSpin] = useState(true)
  console.log(players);
  return (
    <SafeAreaView edges={['left', 'right']}>
      <Text>You've reached the Game Screen</Text>

      {showSpin &&
      <ShuffleScreen />
      }

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
