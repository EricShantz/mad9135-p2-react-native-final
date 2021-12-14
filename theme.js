import { StyleSheet } from 'react-native';

const theme = StyleSheet.create({
  backgroundStyling: {
    backgroundColor: '#15002E',
  },
  avatarContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    margin: 9,
    borderRadius: 10,
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
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: '90%',
    height: '25%',
    alignSelf: 'center',
  },
});

export { theme };
