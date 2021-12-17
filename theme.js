import { Dimensions, StyleSheet } from 'react-native';

// RASPBERRY #E30A5C

const theme = StyleSheet.create({
  font: {
    fontFamily: 'Bakbak',
  },
  backgroundStyling: {
    // blue
    backgroundColor: '#30d5c8',
  },
  //purple
  splashBackground: {
    backgroundColor: '#3C006F',
  },
  backgroundStylingGameScreen: {
    // Orange
    backgroundColor: '#FF9E3F',
  },
  backgroundStylingGameScreenWhite: {
    // white
    backgroundColor: '#FFF',
  },
  tab: {
    backgroundColor: '#30d5c8',
  },
  avatarContainer: {
    // change the margin, border and padding to make all 12 icons fit the screen
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    margin: 8,
    padding: 5,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    // ==============================Here's the thing thats hiding the top flatlist on the home page
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
    marginTop: 20,
    textAlign: 'center',
  },
  listTitle: {
    alignSelf: 'flex-start',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },

  modal: {
    backgroundColor: '#30d5c8',
  },
  playerInput: {
    width: '85%',
    height: '7%',
    borderRadius: 40,
    alignSelf: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  inputElement: {
    paddingTop: 8,
    fontSize: 25,
    textAlignVertical: 'bottom',
  },
  bigOlIcon: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
    marginVertical: 20,
  },
  playerContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 15,
    marginVertical: 20,
  },

  playerContainerButton: {
    borderRadius: 80,
    borderColor: 'black',
    borderWidth: 2,
    width: 23,
    marginLeft: 30,
  },

  cancelButton: {
    marginLeft: 75,
    marginTop: 15,
  },

  cancelButtonText: {
    fontSize: 20,
  },

  playerItem: {
    textAlign: 'center',
  },

  playersListContainer: {
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '90%',
    height: '20%',
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
    shadowColor: '#410000',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    marginHorizontal: 5,
    backgroundColor: '#720202',
    borderRadius: 20,
    textAlign: 'center',
    marginBottom: 8,
  },
  gameCardBack: {
    marginTop: 100,
    height: 300,
    width: 200,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginHorizontal: 5,
    backgroundColor: '#FFF',
    borderRadius: 20,
    textAlign: 'center',
    marginBottom: 8,
  },

  cardText: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 25,
    color: 'white',
    paddingHorizontal: 10,
  },
  cardTextBack: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    paddingVertical: 20,
    paddingHorizontal: 10,
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

  // CARD
  cardContainer: {
    transform: [
      { perspective: 1000 },
      { rotateX: '30deg' },
      { rotateZ: '-9deg' },
      { scale: 1.1 },
    ],
  },
  keyboardContainer: {
    flex: 1,
  },

  gamesInstructions: {
    marginVertical: 50,
    textAlign: 'center',
    paddingHorizontal: 15,
  },

  playerSpinner: {
    // height: 200,
  },

  playerSpinnerImage: {
    width: 100,
    height: 100,
    marginVertical: 8,
    alignSelf: 'center',
  },
  playerSpinnerImageDefault: {
    width: 65,
    height: 56,
    marginVertical: 8,
    alignSelf: 'center',
  },
  textAlign: {
    textAlign: 'center',
    fontSize: 20,
  },
  nextGameBtnShuffle: {
    alignSelf: 'center',
    marginLeft: Dimensions.get('screen').width / 3.5,
    marginBottom: 500,
    backgroundColor: 'white',
    width: 500,
    paddingBottom: 500,
  },
  nextGameBtn: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    paddingTop: 10,
  },
  nextGameText: {
    color: 'black',
    fontFamily: 'Bakbak',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 50,
  },

  imageCircle: {
    backgroundColor: 'white',
    borderRadius: 100,
    width: 120,
    alignSelf: 'center',
    marginTop: 10,
  },

  bodyText: {
    fontSize: 14,
  },

  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallButton: {
    alignItems: 'center',
    backgroundColor: '#FF9E3F',
    borderRadius: 10,
    flexWrap: 'wrap',
    padding: 8,
    marginLeft: 15,
    alignSelf: 'baseline',
  },
});

export { theme };
