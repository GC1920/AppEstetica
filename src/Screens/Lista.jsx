import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, FlatList } from 'react-native';

import { useRoute } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';

import { ItemList } from './Components/ItemList';

import { doencas } from '../Data';

export function Lista() {

  const route = useRoute();

  const navigation = useNavigation();

  const DATA = doencas[route.params.ID];

  const renderItem = ({ item }) => (

    <ItemList 
      title={item.title}
      onPress={() => navigation.navigate('Info', { ID: DATA.id, ITEMID: item.id, TITLE: item.title })}
    />
  )
  
  return (
    <>
        <SafeAreaView style={ styles.container }>
            <View style={styles.titleContent}>
              <Text style={styles.text}>
                {DATA.type}
              </Text>
            </View>

            <FlatList 
              data={DATA.results}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
        </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7c8fe3',
  },
  titleContent: {
    marginTop: 40,
    marginBottom: 40
  },
  text: {
    textAlign: 'center',
    color:'#fff',
    textTransform: 'uppercase',
    fontSize: 24,
  },
});
