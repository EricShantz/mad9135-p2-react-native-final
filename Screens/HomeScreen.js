import React, { useState, useEffect } from 'react';
import {
  Text,
  Image,
  View,
  Pressable,
  ActivityIndicatorBase,
} from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput, Modal, Button } from 'react-native';
import { useContext } from 'react';
import { theme } from '../theme';

export default function HomeScreen() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({});
  const [chosenAvatar, setChosenAvatar] = useState();
  const [showModal, setShowModal] = useState(false);

  let avatars = [
    { image: require('../assets/avatars/Bear.png') },
    { image: require('../assets/avatars/Beaver.png') },
    { image: require('../assets/avatars/Corgi.png') },
    { image: require('../assets/avatars/Duck.png') },
    { image: require('../assets/avatars/Elephant.png') },
    { image: require('../assets/avatars/Gorilla.png') },
    { image: require('../assets/avatars/Prawn.png') },
    { image: require('../assets/avatars/Snail.png') },
    { image: require('../assets/avatars/Stork.png') },
    { image: require('../assets/avatars/Turtle.png') },
    { image: require('../assets/avatars/Unicorn.png') },
    { image: require('../assets/avatars/Whale.png') },
  ];

  function addPlayer() {
    setPlayers([...players, player]);
  }

  return (
    <SafeAreaView edges={['left', 'right']} style={theme.container}>
      <Text style={theme.listTitle}>List of Players</Text>
      <FlatList
        horizontal={true}
        data={players}
        renderItem={(item) => <Player players={item} />}
      ></FlatList>

      {/* POPUP */}
      <Modal animationType="slide" transparent={false} visible={showModal}>
        <Text style={theme.title}>Enter Player Names</Text>
        <View style={theme.playerInput}>
          <TextInput
            placeholder="New Player"
            onChangeText={(text) => {
              setPlayer({
                name: text,
                id: Math.random() * 1000,
                avatar: chosenAvatar,
              });
            }}
          />
        </View>
        <Pressable
          style={theme.addBtn}
          onPress={() => {
            addPlayer();
            setShowModal(false);
            setPlayer({});
          }}
        >
          <Text style={theme.addBtnText}>Add Player</Text>
        </Pressable>
      </Modal>
      {/* POPUP END */}

      <View style={{ marginTop: 15, marginBottom: 30 }}>
        <Text> Choose your character!</Text>
        <View style={theme.avatarList}>
          {avatars.map((item) => {
            return (
              <Pressable
                onPress={() => {
                  setChosenAvatar(item);
                  setShowModal(true);
                }}
                key={item + Date.now() + Math.random() * 21}
              >
                <Image source={item.image} style={{ width: 90, height: 90 }} />
              </Pressable>
            );
          })}
        </View>
      </View>

      {players.length < 2 && (
        <Button title={'Start Playing!'} disabled={true}></Button>
      )}
      {players.length >= 2 && (
        <Button title={'Start Playing!'} onPress={() => {}}></Button>
      )}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function Player({ players }) {
  return (
    <View style={theme.playerContainer}>
      <View style={theme.delBtn}>
        <Text onPress={deletePlayer()}>x</Text>
      </View>
      <Image
        source={players.item.avatar.image}
        style={{ width: 50, height: 50 }}
      />
      <Text style={theme.playerItem}>{players.item.name}</Text>
    </View>
  );
}

function deletePlayer() {
  console.log('DELETE');
  //TODO: add player list to context so we can delete an item
}

{
  /* <Text style={theme.title}>Enter Player Names</Text>
      <View style={theme.playerInput}>
        <TextInput placeholder="New Player" onChangeText={(text) => {setPlayer({name: text, id: text+1, avatar: chosenAvatar})}}/>
      </View>
      <Pressable style={theme.addBtn} onPress={()=>{addPlayer()}}>
      <Text style={theme.addBtnText}>Add Player</Text>
    </Pressable>  */
}
