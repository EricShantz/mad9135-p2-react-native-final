import { StyleSheet } from 'react-native';

const theme = StyleSheet.create({
  font: {
    fontFamily: 'Bakbak',
  },
  backgroundStyling: {
    backgroundColor: '#30d5c8',
  },
  tab: {
    backgroundColor: '#30d5c8',
  },
  avatarContainer: {
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    margin: 9,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'center',
    alignSelf: 'center',
  },
  addBtnText: {
    fontFamily: 'Bakbak',
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  listTitle: {
    alignSelf: 'flex-start',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },

  modal:{
    backgroundColor: "#30d5c8"
  },
  playerInput: {
    width: '85%',
    height: '7%',
    borderColor: 'black',
    borderRadius: 40,
    borderWidth: 1,
    alignSelf:'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  inputElement:{
    paddingTop: 8,
    fontSize:25,
    textAlignVertical: 'bottom',
  },
  bigOlIcon:{
    marginTop: 50,
    width: 175,
    height: 175,
    alignSelf:'center'

  },
  playerContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 15,
    marginVertical: 20,
  },

  playerContainerButton:{
    borderRadius: 80,
    borderColor: "black",
    borderWidth: 2,
    width: 23,
    marginLeft:30
  },

  cancelButton:{
    marginLeft: 75,
    marginTop: 15
  },

  cancelButtonText:{
    fontSize: 20
  },


  playerItem: {
    textAlign: 'center',
  },

  playersListContainer: {
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '90%',
    height: '25%',
    alignSelf: 'center',
    textAlign: 'center',
  },

  button: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#6700D0',
    borderRadius: 10,
    flexWrap: 'wrap',
    margin: 15,
    alignSelf: 'center',
  },
  disabledButton: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#909090',
    borderRadius: 10,
    flexWrap: 'wrap',
    margin: 15,
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'Bakbak',
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
  },
  disabledText: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Bakbak',
    color: '#555555',
  },

  gameCard: {
    marginTop: 100,
    height: 300,
    width: 200,
    borderColor: 'black',
    borderWidth: 2,
    marginHorizontal: 5,
    borderRadius: 20,
    textAlign: 'center',
  },

  cardText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 25,
    paddingHorizontal: 10,
  },

  nextGameBtn: {
    marginTop: 50,
  },

  flipCard: {
    fontSize: 16,
  },
  flipCardFront: {
    backgroundColor: 'red',
  },
  flipCardBack: {
    backgroundColor: 'blue',
  },

  keyboardContainer:{
    flex: 1
  },

  gamesInstructions:{
    marginVertical: 50,
    textAlign:'center',
    paddingHorizontal: 15
  },

  playerSpinner:{
    // height: 200,
  },

  playerSpinnerImage:{
    width: 100,
    height: 100,
    marginVertical: 8,
    alignSelf: 'center'
  },
  textAlign:{
    textAlign:'center',
    fontSize: 20
  },
  nextGameBtn:{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginLeft: 80,
    marginBottom: 500
  },
  nextGameText:{
    color: 'black',
    fontFamily: 'Bakbak',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 70
  },

  imageCircle:{
    backgroundColor: 'white',
    borderRadius: 100,
    width: 120,
    alignSelf: 'center',
    marginTop: 10,

  }

  
});

export { theme };
