import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Animated,
  Text,
  Button,
  View,
  Platform,
  SafeAreaView,
  Pressable,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import ShuffleScreen from '../Components/Shuffle';
import { theme } from '../theme';
import GameCard from '../Components/GameCard';

export default function GameScreen() {
  const [showSpin, setShowSpin] = useState(true);

  return (
    <View style={theme.backgroundStylingGameScreen}>
      {showSpin ? (
        <>
          <ShuffleScreen />
          <Pressable
            onPress={() => {
              setShowSpin(false);
            }}
            style={theme.nextGameBtnShuffle}
          >
            <Text style={theme.nextGameText}>
              Pick Game
              <Ionicons
                name="arrow-forward-outline"
                style={{ fontSize: 25 }}
              ></Ionicons>{' '}
            </Text>
          </Pressable>
        </>
      ) : (
        // MAIN GAME SCREEN
        <SafeAreaView edges={['left', 'right']}>
          <Text style={theme.text}>Choose your Game!</Text>
          <Text style={{ fontSize: 17, color: 'white', textAlign: 'center' }}>
            Double-tap to see instructions
          </Text>

          {/* GAME CARDS */}
          <GameCard />

          <View
            style={
              (theme.nextGameBtnGameScreen,
              { marginTop: -50, marginBottom: 50 })
            }
          >
            <Pressable
              onPress={() => {
                setShowSpin(true);
              }}
              style={theme.button}
            >
              <Text style={theme.text}>Next Round</Text>
            </Pressable>
          </View>

          <StatusBar style="auto" />
        </SafeAreaView>
      )}
    </View>
  );
}
