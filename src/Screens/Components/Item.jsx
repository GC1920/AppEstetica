import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function Item({ type, onPress }) {

    return (
        <View>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.text}>{type}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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
      },
})