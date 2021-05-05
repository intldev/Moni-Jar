import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// images
import Logo from '../../../assets/logo.png';

// constnats
import colors from '../../../constants/colors';

FontAwesome.loadFont();

export default function Navbar() {
    return (
        <View style={styles.container}>
            <Image
                source={Logo}
                resizeMode="contain"
                style={styles.logoImage}
            />
            <View style={styles.detailContainer}>
                <FontAwesome
                    name="user-circle"
                    size={22}
                    color={colors.dark}
                />
                <Text style={styles.userName}>Rachel Caires</Text>
                <FontAwesome
                    name="angle-down"
                    size={15}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.primary,
        paddingHorizontal: 24
    },
    logoImage: {
        height: 50,
        width: 130,
    },
    detailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        marginHorizontal: 12
    }
})