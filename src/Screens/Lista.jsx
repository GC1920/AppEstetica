import React from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView, FlatList } from 'react-native';

import { useRoute } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';

import { ItemList } from './Components/ItemList';

import { doencas } from '../Data';

export function Lista() {

  const route = useRoute();

  const navigation = useNavigation();

  const DATA = doencas[route.params.ID];

  console.log(DATA)

  const renderItem = ({ item }) => (

    <ItemList 
      title={item.title}
      onPress={() => navigation.navigate('Info', { ID: item.id })}
    />
  )
  
  return (
    <>
        <SafeAreaView style={ styles.container }>
          <Text style={styles.text}>
            {DATA.type}
          </Text>

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
  text: {
    textAlign: 'center',
    color:'#fff',
    textTransform: 'uppercase',
    fontSize: 24,
    marginTop: 12,
    marginBottom: 12
  },
});
