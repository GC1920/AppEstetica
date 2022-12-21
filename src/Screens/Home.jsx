import React from 'react';
import { View, Image, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';

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
        
          <Image
            style={styles.image}
            source={require('../../assets/icon.png')}
          />

          <Text style={styles.title}>Dysfunction Assistent</Text>

          <Text style={styles.text}>Por favor escolha uma disfunção</Text>
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
    alignItems: 'center',
    marginBottom: 40
  },
  image: {
    width: 420,
    height: 200,
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color:'#7c8fe3',
    fontSize: 24,
    marginBottom: 24
  },
  text: {
      textAlign: 'center',
      fontSize: 16,
      marginBottom: 12,
      color: '#7c8fe3'
  }
});