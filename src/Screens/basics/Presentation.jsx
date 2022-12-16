import React from 'react';
import { View, SafeAreaView, ScrollView, Text, Image, StyleSheet } from 'react-native';

import { useRoute } from '@react-navigation/native';

import { doencas } from '../../Data';

export function Presentation() {

  const route = useRoute();

  const DATA = doencas[route.params.ID].results[route.params.ITEMID];

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.titleContent}>
            <Text style={styles.title}>
              {route.params.TITLE}
            </Text>
          </View>
          
          <View style={styles.imageContainer}>
            <Image source={{uri: DATA.imagem}} style={styles.image}/>
          </View>

          <View>
            <Text style={styles.text}>
              {DATA.apresentacao}
            </Text>

            <Text style={styles.src}>
              FONTE: {DATA.src}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titleContent: {
    marginBottom: 12
  },
  title: {
    textAlign: 'center',
    color:'#7c8fe3',
    fontSize: 24,
    marginTop: 12,
    marginBottom: 12
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
      textAlign: 'center',
      fontSize: 16,
      color: '#7c8fe3',
      padding: 20,
      letterSpacing: 0.2,
      textAlignVertical : 'center'
  },
  src: {
    textAlign: 'center',
    color: '#7c8fe3',
    fontSize: 12,
    letterSpacing: 0.2,
    padding: 12,
    textAlignVertical : 'center'
  }
})