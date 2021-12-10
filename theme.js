import { StyleSheet } from 'react-native';

const theme = StyleSheet.create({
  delBtn: {
    borderWidth: 1,
    width: 15,
    height: 15,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderColor: 'grey',
    borderRadius: 20,
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
  },
  playerItem: {
    textAlign: 'center',
  },
});

export { theme };
