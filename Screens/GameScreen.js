import React from 'react';
import {
  Text,
  Button,
  Image,
  ActivityIndicator,
  ImageBackground,
  View,
  Pressable,
} from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ShuffleScreen from '../Components/Shuffle';
import { theme } from '../theme';
import { usePlayersContext } from '../Context/AppContext';
import { useState, useEffect } from 'react';
import data from '../data';
import {
  FlatList,
  ScrollView,
  State,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { useRef } from 'react';
import GestureFlipView from 'react-native-gesture-flip-card';

export default function GameScreen() {
  const { players, setPlayers } = usePlayersContext();
  const [showSpin, setShowSpin] = useState(true);
  console.log(players);
  return (

    <>
      {showSpin ?
      <>
        <ShuffleScreen/>
        <Button title="Next" onPress={()=>{setShowSpin(false)}}></Button> 
        </>
      :
        <SafeAreaView edges={['left', 'right']}>
        <Text>Choose your Game!</Text>
        <Text></Text>
    <FlatList 
      horizontal={true}
      data={data}
      renderItem={(item)=><Games games={item}/>}
      ></FlatList>

      <View style={theme.nextGameBtn}>
        <Button title="Choose Next Game" onPress={(()=>{setShowSpin(true)})}></Button>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  }
    </>
  );
}

function Games({ games }) {
  const doubleTapRef = useRef(null);
  const [front, setFront] = useState(true);
  const onDoubleTapEvent = (event) => {
    if(event.nativeEvent.state === State.ACTIVE){
        setFront(!front)
      }
  }

  return(
  <TapGestureHandler
    ref={doubleTapRef}
    onActivated={onDoubleTapEvent}
    numberOfTaps={2}
    > 

    {front ? 
  <View style={theme.gameCard}>
  <Text style={theme.cardText}>{games.item.name}</Text>
</View>
:
<View style={theme.gameCard}>
  <Text style={theme.cardText}>{games.item.description}</Text>
</View>
  } 
  
</TapGestureHandler> 
  )

  return (
    <TapGestureHandler
      ref={doubleTapRef}
      onActivated={onDoubleTapEvent}
      numberOfTaps={2}
    >
      {front ? (
        <View style={theme.gameCard}>
          <Text style={theme.cardText}>{games.item.name}</Text>
        </View>
      ) : (
        <View style={theme.gameCard}>
          <Text style={theme.cardText}>{games.item.description}</Text>
        </View>
      )}
    </TapGestureHandler>
  );
}
