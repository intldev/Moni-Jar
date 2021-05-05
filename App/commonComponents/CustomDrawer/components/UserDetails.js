import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

export default function UserDetails() {
    return (
        <View>
            <Text style={styles.nameText}>Hi, Rachel</Text>
            <View style={styles.usernameContainer}>
                <Text style={styles.usernameText}>@Rachel-Caires</Text>
                <View style={styles.dot} />
                <Text style={styles.usernameText}>XXX Buds</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nameText: {
        fontSize: 17,
        color: colors.light,
        fontWeight: 'bold',
    },
    usernameText: {
        fontSize: 12,
        color: colors.light
    },
    usernameContainer: {
        marginTop: 10,
        flexDirection: 'row',
    },
    dot: {
        height: 3,
        width: 3,
        backgroundColor: colors.light,
        borderRadius: 1.5,
        marginHorizontal: 15,
        alignSelf: 'center',
        marginTop: 1
    }
})