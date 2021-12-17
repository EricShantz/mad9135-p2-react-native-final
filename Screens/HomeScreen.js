import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Alert,
  Keyboard,
  Dimensions,
  Platform,
} from 'react-native';
import {
  Text,
  Image,
  View,
  Pressable,
  ActivityIndicatorBase,
  KeyboardAvoidingView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { TextInput, Modal, Button } from 'react-native';
import { theme } from '../theme';
import { usePlayersContext } from '../Context/AppContext';
import { createStackNavigator } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
// import * as permissions from 'react-native-permissions';
// import { request, PERMISSIONS } from 'react-native-permissions';

let globalPlayers;
let globalSetPlayers;
let globalChosenAvatar;
let globalSetChosenAvatar;
let globalImage;


export default function HomeScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const { players, setPlayers } = usePlayersContext();
  const [player, setPlayer] = useState({});
  const [chosenAvatar, setChosenAvatar] = useState();
  const [showModal, setShowModal] = useState(false);
  globalChosenAvatar = chosenAvatar
  globalSetChosenAvatar = setChosenAvatar
  globalPlayers = players;
  globalSetPlayers = setPlayers;
  globalImage = image


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

  const showAlert = () =>
    Alert.alert('Alert', 'Cannot leave input field empty', [
      {
        text: 'Dismiss',
        style: 'ok',
      },
    ]);

  useEffect(() => {
    //on load of this screen / component
    //for Android and iOS not web
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync().catch(
          console.error
        );
      if (status !== 'granted') {
        alert("Fine. Then you can't use my app.");
      }
    })();
  }, []);

  const takePic = async () => {
    //use the camera and take a picture
    globalSetChosenAvatar(null)
    let options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    };
    let result = await ImagePicker.launchCameraAsync(options).catch(
      console.error
    );
    if (!result.cancelled) {
      //setImage is our state variable to save the image source
      setImage(result.uri);
      setShowModal(true)

    }
  };

  return (
    <SafeAreaView
      edges={['left', 'right']}
      style={(theme.container, theme.backgroundStyling)}
    >

      <FlatList
        horizontal={true}
        data={players}
        renderItem={(item) => <Player players={item} setPlayers={setPlayers} />}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        style={theme.playersListContainer}
        ListHeaderComponent={
          players.length === 0 && (
            <Text
              style={{
                color: '#008D8D',
                fontFamily: 'Bakbak',
              }}
            >
              Please choose at least two players.
            </Text>
          )
        }
      ></FlatList>
      
      {/* ===============================POPUP=============================*/}
      <Modal animationType="slide" transparent={false} visible={showModal}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={theme.keyboardContainer}
          style={theme.modal}
        >
          <Pressable
            style={{ height: Dimensions.get('screen').height }}
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Text style={theme.title}>Enter Player Name</Text>
              <Pressable
                style={theme.cancelButton}
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <Text style={theme.cancelButtonText}>Cancel</Text>
              </Pressable>
            </View>

            {chosenAvatar != undefined && (
              <Image source={chosenAvatar.image} style={theme.bigOlIcon} />
              )}
              

            {image &&
            <Image source={{uri: image}} style={{width: 200, height: 200, borderRadius: 100, alignSelf:'center', marginVertical: 20}}/>
            }

            <View style={theme.playerInput}>
              <TextInput
                style={theme.inputElement}
                placeholder="New Player"
                onChangeText={(text) => {

                  if(chosenAvatar){
                    console.log("YOU USED AN ICON")
                    console.log(chosenAvatar)
                  setPlayer({
                    name: text,
                    id: Math.random() * 1000,
                    avatar: chosenAvatar,
                  });
                }else {
                  console.log("YOU USED AN IMAGE")
                  setPlayer({
                    name: text,
                    id: Math.random() * 1000,
                    avatar: image,
                  });
                }
                }}
              />
            </View>
            <Pressable
              style={theme.button}
              onPress={() => {
                if (player.name == undefined) {
                  return showAlert();
                } else {
                  setPlayers([...players, player]);
                  setShowModal(false);
                  setPlayer({});
                  setImage(image)
                }
              }}
            >
              <Text style={theme.addBtnText}>Add Player</Text>
            </Pressable>
          </Pressable>
        </KeyboardAvoidingView>
      </Modal>
      {/* ==============================POPUP END============================= */}

      <View style={theme.container}>
        {players.length >= 2 ? (
          <Pressable
            style={theme.button}
            onPress={() => {
              navigation.navigate('Games');
            }}
          >
            <Text style={theme.text}>{'Start Playing!'}</Text>
          </Pressable>
        ) : (
          <Pressable style={theme.disabledButton}>
            <Text style={theme.disabledText}>{'Start Playing!'}</Text>
          </Pressable>
        )}
      </View>

      {/* =================================AVATARS LIST=============================== */}
      <View style={{ marginTop: 15, marginBottom: 30 }}>
        <Pressable  onPress={takePic}>
          <Text>Gallery</Text>
        </Pressable>
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

        <ScrollView
          style={theme.avatarList}
          contentContainerStyle={{ flex: 1 }}
        >
          <View style={theme.avatarList}>
            {avatars.map((item) => {
              return (
                <Pressable
                  onPress={() => {
                    setChosenAvatar(item);
                    setShowModal(true);
                    setImage(null)
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

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function Player({ players, setPlayers }) {
  let id = players.item.id;

  console.log("PLAYERS", players)
  console.log("GCA",globalChosenAvatar)
  console.log("BLOBAL IMAGE", globalImage)

  return (
    <View style={theme.playerContainer}>
      <Pressable
        style={theme.playerContainerButton}
        onPress={() => {
          deletePlayer(id, players, setPlayers);
        }}
      >
        <Text style={{ textAlign: 'center' }}>X</Text>
      </Pressable>
        <Image
        source={players.item.avatar.image || {uri: players.item.avatar}}
        style={{ width: 50, height: 50, borderRadius: 50 }}
        />

      <Text style={theme.playerItem}>{players.item.name}</Text>
    </View>
  );
}

function deletePlayer(id) {
  globalSetPlayers(globalPlayers.filter((player) => player.id !== id));
}
