import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Item } from './Components/Item';

import { doencas } from '../Data';

export function Home() {

  const navigation = useNavigation();

  const renderItem = ({ item }) => (

    <Item 
      type={item.type}
      onPress={() => navigation.navigate('Lista', { ID: item.id })}
    />
  )

  return (
    <>
      <SafeAreaView style={ styles.container }>
        <View style={styles.content}>
          <Text style={styles.text}>
            LOGO
          </Text>

          <FlatList 
            data={doencas}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    paddingBottom: 12,
    textTransform: 'uppercase',
    fontSize: 24,
    color: '#7c8fe3'
  },
});