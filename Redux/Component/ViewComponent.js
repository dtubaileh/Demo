import React from 'react';
import {StyleSheet, View, TouchableHighlight,FlatList} from 'react-native';
import {connect} from 'react-redux';
import {Add,Delete} from '../action';
import {Text, FAB, List} from 'react-native-paper';
import {ContextSrore} from '../store';


const ViewComponent = ({stateStore,Delete,Add,navigation}) => {
  // console.log('ViewComponent props ', props);
  return (
    <>
     
      <View style={styles.container}>
      <FlatList
            data={stateStore}
            renderItem={({item}) => (
              <List.Item
                title={item.title}
                description={item.description}
                descriptionNumberOfLines={1}
                titleStyle={styles.listTitle}
                onPress={() => Delete(item.id)}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
     

        <FAB style={{backgroundColor:'red'}} small  label="show new Redux app" onPress={() =>
            navigation.navigate('NewRedux')
          } />
          <FAB style={styles.fab} small icon="plus" label="Add new note" onPress={() =>
            navigation.navigate('AddNote')
          } />
      </View>
    </>
  );
};


const mapStateToProps = (state) => {
  return {stateStore: state};
};
//
const mapDispatchToProps = (dispatch) => {
  return {Delete: (id)=>dispatch(Delete(id)),
  Add:(title,description)=>{dispatch(Add(title,description))}
  };
};

export default connect(mapStateToProps,mapDispatchToProps, null,
  { context: ContextSrore })(ViewComponent);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  title: {
    fontSize: 20,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 55,
  },
  listTitle: {
    fontSize: 20,
  },
  listDescription: {
    fontSize: 15,
  },
});