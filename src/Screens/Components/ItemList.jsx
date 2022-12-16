import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function ItemList({ title, onPress }) {

    return (
        <View>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 4,
        padding: 12,
        margin: 4
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: '#fff'
      },
})