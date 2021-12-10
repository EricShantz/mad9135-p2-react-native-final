import React, {useState, useEffect} from 'react'
import {Text, Image, View, Pressable, ActivityIndicatorBase} from 'react-native'
import { StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput, Modal, Button } from 'react-native';
import { useContext } from 'react';

export default function HomeScreen(){
  const [players, setPlayers] = useState([])
  const [player, setPlayer]= useState({})
  const [chosenAvatar, setChosenAvatar] = useState()
  const [showModal, setShowModal] = useState(false)

  let avatars = [{image: require("../assets/avatars/Bear.png")}, {image:require("../assets/avatars/Beaver.png")},{image: require("../assets/avatars/Corgi.png")},{image: require("../assets/avatars/Duck.png")},{image: require("../assets/avatars/Elephant.png")},{image: require("../assets/avatars/Gorilla.png")},{image: require("../assets/avatars/Prawn.png")},{image: require("../assets/avatars/Snail.png")},{image: require("../assets/avatars/Stork.png")},{image: require("../assets/avatars/Turtle.png")},{image: require("../assets/avatars/Unicorn.png")},{image: require("../assets/avatars/Whale.png")}]

  function addPlayer(){
    setPlayers([...players, player])
    
  }

  return (
    <SafeAreaView edges={['left', 'right']} style={styles.container}>  
    <Text style={styles.listTitle}>List of Players</Text>
    <FlatList horizontal={true} data={players} renderItem={(item)=> <Player players={item}/>}>
    </FlatList>


{/* POPUP */}
    <Modal animationType="slide" transparent={false} visible={showModal}>
      <Text style={styles.title}>Enter Player Names</Text>
      <View style={styles.playerInput}>
        <TextInput placeholder="New Player" onChangeText={(text) => {setPlayer({name: text, id: Math.random()*1000, avatar: chosenAvatar})}}/>
      </View>
      <Pressable style={styles.addBtn} onPress={()=>{addPlayer(); setShowModal(false); setPlayer({})}}>
        <Text style={styles.addBtnText}>Add Player</Text>
      </Pressable>
    </Modal>
{/* POPUP END */}

    <View style={{marginTop: 15, marginBottom:30}}>
      <Text> Choose your character!</Text>
      <View style={styles.avatarList}>
      {avatars.map((item)=>{
        return(
          <Pressable onPress={()=>{setChosenAvatar(item); setShowModal(true)}} key={item+Date.now()+Math.random()* 21}>
            <Image source={item.image} style={{width: 90, height: 90}}/>
          </Pressable>)
      })}
      </View>
    </View>

      {players.length <2 &&
      <Button title={"Start Playing!"} disabled={true} >
      </Button>
      }
      {players.length >= 2 &&
      <Button title={"Start Playing!"} onPress={()=>{}}>
      </Button>
      }

      <StatusBar style="auto"/>
    </SafeAreaView>
  )
}

function Player({players}){
  return(
    <View style={styles.playerContainer}>
      <View style={styles.delBtn}>
        <Text onPress={deletePlayer()}>x</Text>
      </View>
      <Image source = {players.item.avatar.image} style={{width:50, height:50}}/>
      <Text style={styles.playerItem}>{players.item.name}</Text>
    </View>
  )
}

function deletePlayer(){
  console.log("DELETE")
  //TODO: add player list to context so we can delete an item
}

const styles = StyleSheet.create({
  delBtn:{
    borderWidth:1,
    width:15,
    height:15,
    textAlignVertical:'center',
    textAlign:'center',
    borderColor:"grey",
    borderRadius:20
  },
  container: {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  },
  avatarList:{
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap"
  },
  addBtn:{
    zIndex:1,
    borderColor:'black',
    borderWidth: 2,
    borderRadius: 20,
  },
  addBtnText:{
    fontSize:15,
    padding: 5,
    textAlign:'center'
  },
  title:{
    fontSize:25,
    fontWeight: 'bold',
    marginTop: 10
  },
  listTitle:{
    alignSelf:'flex-start',
    marginTop:20,
    fontSize: 20,
    fontWeight:'bold'
  },
  playerInput:{
    width:"85%"
  },
  playerContainer:{
    display:'flex',
    flexDirection:'column',
    marginHorizontal:15,
    marginVertical:20

  },
  playerItem:{
    textAlign: 'center',
  },

})


{/* <Text style={styles.title}>Enter Player Names</Text>
      <View style={styles.playerInput}>
        <TextInput placeholder="New Player" onChangeText={(text) => {setPlayer({name: text, id: text+1, avatar: chosenAvatar})}}/>
      </View>
      <Pressable style={styles.addBtn} onPress={()=>{addPlayer()}}>
      <Text style={styles.addBtnText}>Add Player</Text>
    </Pressable>  */}