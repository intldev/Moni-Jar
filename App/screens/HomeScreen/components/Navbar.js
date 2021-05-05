import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// svgs
import UserProfile from '../../../commonComponents/svgs/UserProfile';
import AngleDown from '../../../commonComponents/svgs/AngleDown';

// images
import Logo from '../../../assets/logo.png';

// constnats
import colors from '../../../constants/colors';

export default function Navbar() {
    return (
        <View style={styles.container}>
            <Image
                source={Logo}
                resizeMode="contain"
                style={styles.logoImage}
            />
            <View style={styles.detailContainer}>
                <UserProfile />
                <Text style={styles.userName}>Rachel Caires</Text>
                <AngleDown
                    size={15}
                    color={colors.black}
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
        fontSize: 19,
        marginHorizontal: 12,
        fontFamily: 'Calibre-SemiBold'
    }
})