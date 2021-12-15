import React from 'react'
import {Text, Image, ActivityIndicator, ImageBackground, View} from 'react-native'
import { StyleSheet} from 'react-native';

export default function ShuffleScreen() {
  return (
    <View>
      <Text>To start, shake your phone! this will generate a random player.</Text>
      <Text>Whoever's name shows up on screen will be the first person to choose a game</Text>
      <Text>Click next when you're done!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  }
})