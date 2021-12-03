import React, {useState, useEffect} from 'react'
import {Text, Image, View, Pressable} from 'react-native'
import { StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default function HomeScreen(){
  const [players, setPlayers] = useState([])

  function addPlayer(){
    console.log("IVE BEEN ATTACKED")
    return(
      <Text>Hey</Text>
    )
    
  }

  return (
    <SafeAreaView edges={['left', 'right']} style={styles.container}>  
    <Pressable style={styles.addBtn} onPress={()=>{addPlayer()}}>
      <Text style={styles.addBtnText}>Add Player</Text>
    </Pressable>  
      <Text style={styles.title}>Enter Player Names</Text>
      <View style={styles.playerInput}>
        <Input placeholder="New Player" leftIcon={<Icon name='user' size={20} color='black'/>}/>
      </View>
    <FlatList data={players} renderItem={(item)=> <Player players={item} />}>
    </FlatList>
      <StatusBar style="auto"/>
    </SafeAreaView>
  )
}

function Player({players}){
  return(
    <View style={styles.playerContainer}>
      <Text style={styles.playerItem}>{players.item.joke}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  addBtn:{
    position:'absolute',
    top:-40,
    right:10,
    zIndex:1,
  },
  addBtnText:{
    color: 'white',
    fontSize:15,

  },
  container: {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  },
  title:{
    fontSize:25,
    fontWeight: 'bold',
    marginTop: 10
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