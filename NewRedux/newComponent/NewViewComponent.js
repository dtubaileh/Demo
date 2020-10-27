import React from 'react';
import {StyleSheet, View,FlatList,TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {Text, FAB, List} from 'react-native-paper';



const NewViewComponent = ({stateStore,navigation}) => {
  console.log("stateStore",stateStore);
  return (
    <>
     
      <View style={styles.container}>
      <Text>my new state list:</Text>
      <FlatList
            data={stateStore}
            renderItem={({item}) => (
              <List.Item
                title={item.name}
                description={item.price}
                descriptionNumberOfLines={1}
                titleStyle={styles.listTitle}
                
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
      

        
      </View>
    </>
  );
};


const mapStateToProps = (state) => {
  return {stateStore: state};
};


export default connect(mapStateToProps)(NewViewComponent);


const styles = StyleSheet.create({
  container: {
    flex: 1,
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