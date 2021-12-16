import React from 'react'
import {Text, Image, ActivityIndicator, ImageBackground, View, Button} from 'react-native'
import { StyleSheet} from 'react-native';
import {useState, useEffect} from 'react'
import { usePlayersContext } from '../Context/AppContext';
import { Audio } from 'expo-av';



export default function ShuffleScreen() {
  const { players, setPlayers } = usePlayersContext();
  const [player, setPlayer] = useState()
  const [sound, setSound] = useState()


async function playSound(){
  console.log("loading Sound")
  const {sound} = await Audio.Sound.createAsync(
    require('../assets/lotto.mp3')
  )
  setSound(sound)

  console.log("playing sound")
  await sound.playAsync()
}

useEffect(() => {
  return sound
    ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync(); }
    : undefined;
}, [sound]);




let shufflePlayers =()=>{
  console.log("shuffling")
  let  playerSpin = setInterval(function(){
    let passes = Math.floor(Math.random() * players.length);
    players.map((item, index)=>{
      if(passes == index){
        setPlayer(item.name)
      }
    })
  },110)

  setTimeout(function(){
    clearInterval(playerSpin)
  }, 3500)
  
  setTimeout(function(){
    playSound()  
  }, 2300)

}

  return (
    <View>
      <Text>To start, shake your phone! this will generate a random player.</Text>
      <Text>Whoever's name shows up on screen will be the first person to choose a game</Text>
      <Text>Click next when you're done!</Text>
      <Text>Player: {player}</Text>
      <Button title = "Shuffle Players!" onPress={()=>{shufflePlayers()}}></Button>
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