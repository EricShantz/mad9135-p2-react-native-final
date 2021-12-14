import React, { useState, useEffect, useContext } from 'react';
import {
  Text,
  Image,
  View,
  Pressable,
  ActivityIndicatorBase,
} from 'react-native';
import { SafeAreaView, Alert, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput, Modal, Button } from 'react-native';
import { theme } from '../theme';
import { usePlayersContext } from '../Context/AppContext';
import { useFonts } from 'expo-font';

let globalPlayers;
let globalSetPlayers;

export default function HomeScreen() {
  const { players, setPlayers } = usePlayersContext();
  globalPlayers = players;
  globalSetPlayers = setPlayers;
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

  const showAlert = () =>
    Alert.alert('Alert', 'Cannot leave input field empty', [
      {
        text: 'Dismiss',
        style: 'ok',
      },
    ]);

  return (
    <SafeAreaView
      edges={['left', 'right']}
      style={(theme.container, theme.backgroundStyling)}
    >
      {/* <Text style={theme.listTitle}>List of Players</Text> */}

      <FlatList
        horizontal={true}
        data={players}
        renderItem={(item) => <Player players={item} setPlayers={setPlayers} />}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        style={theme.playersListContainer}
        ListHeaderComponent={
          players.length === 0 && <Text>Your chosen players will go here</Text>
        }
      ></FlatList>

      {/* POPUP */}
      <Modal animationType="slide" transparent={false} visible={showModal}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={theme.title}>Enter Player Name</Text>
          <Button
            title={'X'}
            onPress={() => {
              setShowModal(false);
            }}
          ></Button>
        </View>

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
            if (player.name == undefined) {
              return showAlert();
            } else {
              setPlayers([...players, player]);
              addPlayer();
              setShowModal(false);
              setPlayer({});
            }
          }}
        >
          <Text style={theme.addBtnText}>Add Player</Text>
        </Pressable>
      </Modal>
      {/* POPUP END */}

      <View>
        {players.length < 2 && (
          <Button title={'Start Playing!'} disabled={true}></Button>
        )}
        {players.length >= 2 && (
          <Button title={'Start Playing!'} onPress={() => {}}></Button>
        )}
      </View>

      <View style={{ marginTop: 15, marginBottom: 30 }}>
        <Text
          style={{
            fontFamily: 'Bakbak',
            textAlign: 'center',
            color: 'white',
            fontSize: 20,
          }}
        >
          Choose your players!
        </Text>

        {/* AVATARS LIST */}
        <View style={theme.avatarListContainer}>
          <ScrollView
            style={theme.avatarList}
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            contentInset={{ bottom: 160 }}
          >
            <View style={theme.avatarList}>
              {avatars.map((item) => {
                return (
                  <Pressable
                    onPress={() => {
                      setChosenAvatar(item);
                      setShowModal(true);
                    }}
                    key={item + Date.now() + Math.random() * 21}
                    style={theme.avatarContainer}
                  >
                    <Image
                      source={item.image}
                      style={{ width: 90, height: 90 }}
                    />
                  </Pressable>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function Player({ players, setPlayers }) {
  let id = players.item.id;
  return (
    <View style={theme.playerContainer}>
      <Button
        onPress={() => {
          deletePlayer(id, players, setPlayers);
        }}
        title="X"
      ></Button>
      <Image
        source={players.item.avatar.image}
        style={{ width: 50, height: 50 }}
      />
      <Text style={theme.playerItem}>{players.item.name}</Text>
    </View>
  );
}

function deletePlayer(id) {
  globalSetPlayers(globalPlayers.filter((player) => player.id !== id));
}
