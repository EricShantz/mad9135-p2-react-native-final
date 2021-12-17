import React from 'react';
import {
  Text,
  Image,
  ActivityIndicator,
  ImageBackground,
  View,
  Button,
  Dimensions,
  Pressable,
} from 'react-native';
import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import { usePlayersContext } from '../Context/AppContext';
import { Audio } from 'expo-av';
import { theme } from '../theme';

export default function ShuffleScreen() {
  const { players, setPlayers } = usePlayersContext();
  const [player, setPlayer] = useState();
  const [playerIcon, setPlayerIcon] = useState();
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/lotto.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  let shufflePlayers = () => {
    let playerSpin = setInterval(function () {
      let passes = Math.floor(Math.random() * players.length);
      players.map((item, index) => {
        if (passes == index) {
          setPlayer(item.name);
          setPlayerIcon(item.avatar);
        }
      });
    }, 70);

    setTimeout(function () {
      clearInterval(playerSpin);
    }, 3500);

    setTimeout(function () {
      playSound();
    }, 2300);
  };

  return (
    <>
      <View style={theme.backgroundStylingGameScreenWhite}>
        <View style={theme.gamesInstructions}>
          <Text style={theme.textAlign}>
            Press "Shuffle". If your name shows up you pick the game!
          </Text>
        </View>

        <View
          style={
            (theme.playerSpinner,
            {
              backgroundColor: 'pink',
              width: '90%',
              alignSelf: 'center',
              borderRadius: 10,
              padding: 20,
              justifyContent: 'center',
            })
          }
        >
          <Text style={theme.textAlign}>{player}</Text>
          {playerIcon ? (
            <View >
              <Image source={playerIcon.image || {uri: playerIcon}} style={{height: 100, width: 100, borderRadius:50, alignSelf:'center'}}></Image>
            </View>
          ) : (
            <View>
              <Image
                source={require('../assets/avatars/shuffle.png')}
                style={theme.playerSpinnerImageDefault}
              ></Image>
            </View>
          )}

          <Pressable
            style={theme.button}
            onPress={() => {
              shufflePlayers();
            }}
          >
            <Text style={theme.text}>Shuffle</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
