import React,{useState,useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {MyContextApp} from './MyContextApp';
import {TextInput, FAB} from 'react-native-paper';



export const AddStateContextComponent = ({navigation}) => {
 
    const [stateStore, setStateStore] = useContext(MyContextApp);

    
    const [noteTitle, setNoteTitle] = useState('');
    const [noteValue, setNoteValue] = useState('');

    
    const save = ()=>{
        console.log("save");
        const newState = [...stateStore,{id:stateStore.length +1,title:noteTitle,description:noteValue}];
        setStateStore(newState);
        navigation.goBack()
    }

  return (
    <>
      <View style={styles.container}>
        <TextInput
          label="Add Title Here"
          value={noteTitle}
          mode="outlined"
          onChangeText={setNoteTitle}
          style={styles.title}
        />
        <TextInput
          label="Add Note Here"
          value={noteValue}
          onChangeText={setNoteValue}
          mode="flat"
          multiline={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyType="done"
          blurOnSubmit={true}
        />
        <FAB
          style={styles.fab}
          small
          icon="check"
          disabled={noteTitle == '' ? true : false}
          onPress={() => save()}
        />
      </View>
    </>
  );
};







const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    iconButton: {
      backgroundColor: 'rgba(46, 113, 102, 0.8)',
      position: 'absolute',
      right: 0,
      top: 40,
      margin: 10,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    text: {
      height: 300,
      fontSize: 16,
    },
    fab: {
      position: 'absolute',
      margin: 20,
      right: 0,
      bottom: 0,
    },
  });