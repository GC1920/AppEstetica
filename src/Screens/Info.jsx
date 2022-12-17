import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { useRoute } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';

import { doencas } from '../Data';

export function Info() {

  const route = useRoute();

  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContent}>
          <Text style={styles.title}>
            {route.params.TITLE}
          </Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Definition', { ID: route.params.ID, ITEMID: route.params.ITEMID, TITLE: route.params.TITLE })}>
            <Text style={styles.text}>Definição</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Presentation', { ID: route.params.ID, ITEMID: route.params.ITEMID, TITLE: route.params.TITLE })}>
            <Text style={styles.text}>Como se apresenta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tretment', { ID: route.params.ID, ITEMID: route.params.ITEMID, TITLE: route.params.TITLE })}>
            <Text style={styles.text}>Tratamento</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Prevent', { ID: route.params.ID, ITEMID: route.params.ITEMID, TITLE: route.params.TITLE })}>
            <Text style={styles.text}>Prevenção</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: 40
  },
  title: {
    textAlign: 'center',
    color:'#7c8fe3',
    fontSize: 24,
    marginTop: 12,
    marginBottom: 12
  },
  button: {
    borderColor: '#7c8fe3',
    borderWidth: 2,
    borderRadius: 4,
    padding: 12,
    margin: 4
  },
  text: {
      textAlign: 'center',
      fontSize: 16,
      color: '#7c8fe3'
  }
})