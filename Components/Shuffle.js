import React from 'react'
import {Text, Image, ActivityIndicator, ImageBackground, View} from 'react-native'
import { StyleSheet} from 'react-native';

export default function ShuffleScreen() {
  return (
    <View>
      <Text>You've reached the Shuffle Screen</Text>
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