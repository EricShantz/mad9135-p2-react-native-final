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
  addBtn: {
    zIndex: 1,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
  },
  addBtnText: {
    fontSize: 15,
    padding: 5,
    textAlign: 'center',
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
  playerInput: {
    width: '85%',
  },
  playerContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 15,
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#fff',
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
});

export { theme };
