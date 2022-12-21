import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Footer() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Criado por: https://github.com/GC1920</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 12
    },
    text: {
        textAlign: 'center',
        color: '#000'
    }
  });