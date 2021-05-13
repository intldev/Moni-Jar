import React from 'react';
import Button from '../../../cpts/base/Button';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';

export default function Footer() {
    return (
        <View style={styles.container}>
            <Button
                title="DROP SOME HONI"
                containerStyles={styles.buttonContainer}
            />
            <Image
                source={require('../../../assets/images/drop.png')}
                style={styles.drop}
            />
            <LinearGradient
                colors={["transparent", colors.secondary.darkGradient]}
                style={[styles.linearGradient]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        paddingTop: 37
    },
    buttonContainer: {
        width: '50%',
    },
    drop: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        position: 'absolute',
        top: -15
    },
    linearGradient: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        bottom: 0
    }
})