import React, { useState, useRef } from 'react';
import {
  Animated,
  Text,
  View,
  Platform,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { ScrollView, State } from 'react-native-gesture-handler';
import { TapGestureHandler } from 'react-native-gesture-handler';
import data from '../data';

const { width, height } = Dimensions.get('window');
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const BACKDROP_HEIGHT = height * 0.65;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;
let globalGamesArray = [];
let globalScrollX;

export default function GameCard({ games }) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  globalScrollX = scrollX;

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
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_SIZE}
        decelerationRate={0}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { x: scrollX } },
            },
          ],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={8}
        renderItem={({ item, index }) => <Card games={item} index={index} />}
      ></Animated.FlatList>
    </View>
  );
}

function Card({ games, index }) {
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
              borderRadius: 34,
              height: ITEM_SIZE * 1.2,
              borderWidth: 20,
              backgroundColor: '#128594',
              borderColor: 'white',
            }}
          >
            <ImageBackground
              style={{
                flex: 1,
                justifyContent: 'center',
                width: ITEM_SIZE - 60,
              }}
              source={require('../assets/card_pattern.png')}
            >
              <Text
                style={{
                  fontSize: 24,
                  textAlign: 'center',
                  backgroundColor: '#E30A5C',
                  padding: 5,
                  fontFamily: 'Bakbak',
                  color: 'white',
                }}
                numberOfLines={3}
              >
                {games.name}
              </Text>
            </ImageBackground>
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
            <ScrollView
              contentContainerStyle={{ paddingTop: 5, paddingBottom: 25 }}
            >
              <Text
                style={{
                  fontSize: 22,
                  textAlign: 'center',
                  padding: 5,
                  fontFamily: 'Bakbak',
                  color: 'black',
                }}
              >
                {games.name}
              </Text>
              <Text style={{ fontSize: 16 }}>{games.description}</Text>
            </ScrollView>
          </Animated.View>
        )}
      </TapGestureHandler>
    </View>
  );
}
