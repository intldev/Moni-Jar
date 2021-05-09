import React from 'react';
import { StatusBar, Text, StyleSheet, Image, ScrollView } from 'react-native';

// constants
import colors from '../../../constants/colors';

// logo
import Logo from '../../../assets/images/logoLight.png';

// components
import Background from './Background';
import Button from '../../../commonComponents/Button';

export default function SignupOptions(props) {

    const { navigation, route } = props;
    const signin = route?.params?.signin || false;

    return (
        <>
            <StatusBar backgroundColor={'transparent'} translucent />
            <Background
                backgroundColor={colors.dark}
            />
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Image
                    source={Logo}
                    style={styles.logo}
                />
                <Text style={styles.text}>HOW WOULD YOU LIKE TO SIGN UP?</Text>
                <Button
                    title={`SIGN ${signin?'IN':'UP'} WITH EMAIL`}
                    containerStyles={[styles.button, { marginTop: 38 }]}
                    onPress={() => {
                        navigation.navigate('SignupEmail')
                    }}
                />
                <Button
                    title={`SIGN ${signin?'IN':'UP'} WITH FACEBOOK`}
                    containerStyles={[styles.button, styles.facebookButton,]}
                    textStyles={styles.lightText}
                />
                <Button
                    title={`SIGN ${signin?'IN':'UP'} WITH GOOGLE`}
                    containerStyles={[styles.button, styles.googleButton,]}
                />
                <Button
                    title={`SIGN ${signin?'IN':'UP'} WITH APPLE`}
                    containerStyles={[styles.button, styles.appleButton,]}
                    textStyles={styles.lightText}
                />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '70%',
        resizeMode: 'contain',
        maxHeight: 100
    },
    text: {
        marginTop: 30,
        letterSpacing: 3,
        textAlign: 'center',
        paddingHorizontal: '25%',
        color: colors.light,
        fontFamily: 'Calibre-SemiBold'
    },
    signupButton: {
        backgroundColor: colors.dark,
        marginTop: 18
    },
    signupButtonText: {
        color: colors.primary
    },
    button: {
        marginTop: 14,
        backgroundColor: colors.primary,
        width: '65%',
        height: 43
    },
    facebookButton: {
        backgroundColor: colors.fbBlue,
        borderColor: colors.fbBlue
    },
    googleButton: {
        backgroundColor: colors.light,
        borderColor: colors.light
    },
    appleButton: {
        backgroundColor: colors.dark,
        borderColor: colors.light
    },
    lightText: {
        color: colors.light
    }
})