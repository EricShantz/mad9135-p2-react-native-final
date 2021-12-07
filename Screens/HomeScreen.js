import React, {useState, useEffect} from 'react'
import {Text, Image, View, Pressable, ActivityIndicatorBase} from 'react-native'
import { StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native';
let isHidden = "none"

export default function HomeScreen(){
  const [players, setPlayers] = useState([])
  const [player, setPlayer]= useState({})
  const [chosenAvatar, setChosenAvatar] = useState()

  let avatars = [{image: require("../assets/avatars/Bear.png")}, {image:require("../assets/avatars/Beaver.png")},{image: require("../assets/avatars/Corgi.png")},{image: require("../assets/avatars/Duck.png")},{image: require("../assets/avatars/Elephant.png")},{image: require("../assets/avatars/Gorilla.png")},{image: require("../assets/avatars/Prawn.png")},{image: require("../assets/avatars/Snail.png")},{image: require("../assets/avatars/Stork.png")},{image: require("../assets/avatars/Turtle.png")},{image: require("../assets/avatars/Unicorn.png")},{image: require("../assets/avatars/Whale.png")}]

  function addPlayer(){
    setPlayers([...players, player])
    isHidden = "none"
    console.log("CCLICKED")
  }

  return (
    <SafeAreaView edges={['left', 'right']} style={styles.container}>  
    <Text style={styles.listTitle}>List of Players</Text>
    <FlatList data={players} renderItem={(item)=> <Player players={item} />}>
    </FlatList>

    <View style={{display: isHidden}}>
    <Text style={styles.title}>Enter Player Names</Text>
      <View style={styles.playerInput}>
        <TextInput placeholder="New Player" onChangeText={(text) => {setPlayer({name: text, id: text+Date.now(), avatar: chosenAvatar})}}/>
      </View>
      <Pressable style={styles.addBtn} onPress={()=>{addPlayer()}}>
      <Text style={styles.addBtnText}>Add Player</Text>
    </Pressable>
    </View>

    <View style={{marginTop: 20}}>
      <Text> Choose your character!</Text>
      <View style={styles.avatarList}>
      {avatars.map((item)=>{
        return(
          <Pressable onPress={()=>{setChosenAvatar(item); buildNameModal()}} key={item+Date.now()+Math.random()* 21}>
            <Image source={item.image} style={{width: 90, height: 90}}/>
          </Pressable>)
      })}
      </View>
    </View>
      <StatusBar style="auto"/>
    </SafeAreaView>
  )
}

function Player({players}){
  return(
    <View style={styles.playerContainer}>
      <Text style={styles.playerItem}>{players.item.name}</Text>
    </View>
  )
}

function buildNameModal(){
  isHidden = "flex"
    return(
      <View>
      <Text style={styles.title}>Enter Player Names</Text>
      <View style={styles.playerInput}>
        <TextInput placeholder="New Player" onChangeText={(text) => {setPlayer({name: text, id: text+1, avatar: chosenAvatar})}}/>
      </View>
      <Pressable style={styles.addBtn} onPress={()=>{addPlayer()}}>
      <Text style={styles.addBtnText}>Add Player</Text>
    </Pressable> 
    </View>
    )
}

const styles = StyleSheet.create({
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
    padding: 5
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
    //make it look nice
  },
  playerItem:{
    //make it look nice
  },

})


{/* <Text style={styles.title}>Enter Player Names</Text>
      <View style={styles.playerInput}>
        <TextInput placeholder="New Player" onChangeText={(text) => {setPlayer({name: text, id: text+1, avatar: chosenAvatar})}}/>
      </View>
      <Pressable style={styles.addBtn} onPress={()=>{addPlayer()}}>
      <Text style={styles.addBtnText}>Add Player</Text>
    </Pressable>  */}