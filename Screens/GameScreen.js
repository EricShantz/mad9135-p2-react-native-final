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
import data from '../data'
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export default function GameScreen() {
  const { players, setPlayers } = usePlayersContext();
  const [showSpin, setShowSpin] = useState(true)
  console.log(players);
  return (
    <SafeAreaView edges={['left', 'right']}>
      <Text>Choose your Game!</Text>
      <Text></Text>

      {showSpin &&
      <ShuffleScreen />
      }

      {/* <View style={theme.gameCards}>
      {data.map((item)=>{
        return(
            <View key={item.id}>
              <Text>{item.name}, </Text>
            </View>
        )
      })
      }
      </View> */}
      <FlatList 
      horizontal={true}
      data={data}
      renderItem={(item)=><Games games={item}/>}
      ></FlatList>

      <View style={theme.nextGameBtn}>
        <Button title="Choose Next Game" ></Button>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function Games({games}){

  return(
    <View style={theme.gameCard}>
      <Text style={theme.cardText}>{games.item.name} </Text>
    </View>
  )
}
