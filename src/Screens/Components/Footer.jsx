import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Footer() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Criado por: Gabriel Caike M. da Silva; https://github.com/GC1920</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        color: '#000'
    }
  });