import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {Text, FAB, List} from 'react-native-paper';
import Header from './Common/Header';
const ViewComponent = (props) => {
  console.log('ViewComponent props ', props.stateStore.length);
  return (
    <>
      <Header
        titleText="Simple Note Taker"
        headerStyle={{backgroundColor: '#60DBC5'}}
      />
      <View style={styles.container}>
        {props.stateStore.map((store) => {
          return (
            <View style={styles.titleContainer}>
              <Text style={styles.listTitle}>{store.title}</Text>
              <Text style={styles.listDescription}>{store.description}</Text>
            </View>
          );
        })}

        <FAB style={styles.fab} small icon="plus" label="Add new note" />
      </View>
    </>
  );
};


const mapStateToProps = (state) => {
  return {stateStore: state};
};

export default connect(mapStateToProps)(ViewComponent);


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
    bottom: 10,
  },
  listTitle: {
    fontSize: 20,
  },
  listDescription: {
    fontSize: 15,
  },
});