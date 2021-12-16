import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Animated,
  Text,
  Button,
  View,
  Platform,
  Dimensions,
  SafeAreaView,
  Pressable,
} from 'react-native';
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
    <>
      {showSpin ? (
        <>
          {/* Shuffle Component */}
          <ShuffleScreen />
          <Button
            title="Next"
            onPress={() => {
              setShowSpin(false);
            }}
          ></Button>
        </>
      ) : (
        // MAIN GAME SCREEN
        <SafeAreaView edges={['left', 'right']}>
          <Text>Choose your Game!</Text>

          {/* GAME CARDS */}
          <GameCard />

          <View style={theme.nextGameBtn}>
            <Button
              title="Choose Next Game"
              onPress={() => {
                setShowSpin(true);
              }}
            ></Button>
          </View>

          <StatusBar style="auto" />
        </SafeAreaView>
      )}
    </>
  );
}

// function GameCard({ games, index, scrollX }) {
//   const doubleTapRef = useRef(null);
//   const [front, setFront] = useState(true);
//   const onDoubleTapEvent = (event) => {
//     if (event.nativeEvent.state === State.ACTIVE) {
//       setFront(!front);
//     }
//   };

//   return (
//     <TapGestureHandler
//       ref={doubleTapRef}
//       onActivated={onDoubleTapEvent}
//       numberOfTaps={2}
//     >
//       {front ? (
//         <Animated.View style={theme.gameCard}>
//           <Text style={theme.cardText}>{games.item.name}</Text>
//         </Animated.View>
//       ) : (
//         <View style={theme.gameCard}>
//           <Text style={theme.cardText}>{games.item.description}</Text>
//         </View>
//       )}
//     </TapGestureHandler>
//   );
// }

// const style = StyleSheet.create({
//   cardWrapper: {},
//   cardFront: {
//     position: 'absolute',
//   },
//   cardBack: {
//     backfaceVisibility: 'hidden',
//   },
// });
