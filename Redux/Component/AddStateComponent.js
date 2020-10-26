import React,{useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {Add,Delete} from '../action';
import {TextInput, FAB} from 'react-native-paper';



const AddStateComponent = ({Add,navigation}) => {
 
    const [noteTitle, setNoteTitle] = useState('');
    const [noteValue, setNoteValue] = useState('');

    const save = ()=>{
        console.log("save");
        Add(noteTitle,noteValue);
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




const mapDispatchToProps = (dispatch) => {
  return {
  Add:(title,description)=>{dispatch(Add(title,description))}
  };
};

export default connect(null,mapDispatchToProps)(AddStateComponent);


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