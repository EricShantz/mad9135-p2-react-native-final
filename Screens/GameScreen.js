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
import { usePlayersContext } from '../Context/AppContext';
import {
  FlatList,
  State,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { TapGestureHandler } from 'react-native-gesture-handler';
// import GestureFlipView from 'react-native-gesture-flip-card';
import CardFlip from 'react-native-card-flip';
import GameCard from '../Components/GameCard';

export default function GameScreen() {
  const { players, setPlayers } = usePlayersContext();
  const [showSpin, setShowSpin] = useState(true);
  // console.log(players);

  return (
    <View style={theme.backgroundStylingGameScreen}>
      {showSpin ? (
        <>
          <ShuffleScreen />
          <Pressable onPress={()=>{setShowSpin(false)}}
        style={theme.nextGameBtnShuffle}>
          <Text style={theme.nextGameText}>Pick Game 
          <Ionicons name="arrow-forward-outline" style={{fontSize: 25}}></Ionicons>          </Text>
        </Pressable> 
        </>
      ) : (
        // MAIN GAME SCREEN
        <SafeAreaView edges={['left', 'right']}>
          <Text style={theme.text}>Choose your Game!</Text>

          {/* GAME CARDS */}
          <GameCard />

            <View style={theme.nextGameBtn}>
        <Pressable onPress={()=>{setShowSpin(true)}} style={theme.button} >
          <Text style={theme.text}>Next Round</Text>
        </Pressable>
      </View>

          <StatusBar style="auto" />
        </SafeAreaView>
      )}
    </View>
  );
}



