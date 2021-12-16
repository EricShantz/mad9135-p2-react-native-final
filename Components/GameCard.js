import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Animated,
  Text,
  View,
  Platform,
  Dimensions,
} from 'react-native';
import { State } from 'react-native-gesture-handler';
import { TapGestureHandler } from 'react-native-gesture-handler';
// import GestureFlipView from 'react-native-gesture-flip-card';
import CardFlip from 'react-native-card-flip';
import data from '../data';

const { width, height } = Dimensions.get('window');
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const BACKDROP_HEIGHT = height * 50;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;
let globalGamesArray = [];
let globalScrollX;

export default function GameCard({ games }) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  globalScrollX = scrollX;

  //CARD ANIMATION
  const flipAnimation = useRef(new Animated.Value(0)).current;
  let flipRotation = 0;
  flipAnimation.addListener(({ value }) => (flipRotation = value));
  const flipToFrontStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
  };
  const flipToBackStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg'],
        }),
      },
    ],
  };

  const flipToFront = () => {
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const flipToBack = () => {
    Animated.timing(flipAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      style={{
        height: BACKDROP_HEIGHT,
        width,
      }}
    >
      <Animated.FlatList
        style={{ paddingLeft: 50, paddingRight: 50 }}
        contentContainerStyle={{ justifyContent: 'center' }}
        horizontal={true}
        data={data}
        snapToInterval={ITEM_SIZE}
        bounces={false}
        decelerationRate={0}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { x: scrollX } },
            },
          ],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => <Card games={item} index={index} />}
      ></Animated.FlatList>
    </View>
  );
}

function Card({ games, index }) {
  console.log(games);
  console.log('LOOOO', index.item);
  const inputRange = [
    (index - 1) * ITEM_SIZE,
    index * ITEM_SIZE,
    (index + 1) * ITEM_SIZE,
  ];

  const translateY = globalScrollX.interpolate({
    inputRange,
    outputRange: [100, 50, 100],
    extrapolate: 'clamp',
  });

  //DOUBLE TAP
  const doubleTapRef = useRef(null);
  const [front, setFront] = useState(true);
  const onDoubleTapEvent = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      setFront(!front);
    }
  };

  console.log('SNISS');

  return (
    <View style={{ width: ITEM_SIZE }}>
      <TapGestureHandler
        style={{ width: ITEM_SIZE }}
        ref={doubleTapRef}
        onActivated={onDoubleTapEvent}
        numberOfTaps={2}
      >
        {front ? (
          <Animated.View
            style={{
              marginHorizontal: SPACING,
              padding: SPACING * 2,
              alignItems: 'center',
              transform: [{ translateY }],
              backgroundColor: 'pink',
              borderRadius: 34,
              height: ITEM_SIZE * 1.2,
              borderWidth: 20,
              borderColor: 'white',
            }}
          >
            <Text style={{ fontSize: 24 }} numberOfLines={1}>
              {games.name}
            </Text>
          </Animated.View>
        ) : (
          <Animated.View
            style={{
              marginHorizontal: SPACING,
              padding: SPACING * 2,
              alignItems: 'center',
              transform: [{ translateY }],
              backgroundColor: 'white',
              borderRadius: 34,
              height: ITEM_SIZE * 1.2,
            }}
          >
            <Text style={{ fontSize: 12 }} numberOfLines={5}>
              {games.description}
            </Text>
          </Animated.View>
        )}
      </TapGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const style = StyleSheet.create({
  cardWrapper: {},
  cardFront: {
    position: 'absolute',
  },
  cardBack: {
    backfaceVisibility: 'hidden',
  },
});
