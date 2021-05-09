import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// constants
import colors from '../../../constants/colors';

// components
import AppCheckbox from '../../../commonComponents/Checkbox';
import TextField from '../../../commonComponents/TextField';
import Button from '../../../commonComponents/Button';

export default function SignupEmail(props) {

    const {navigation} = props;
    
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.row}>
                    <TextField
                        label="First Name"
                        textInputStyles={styles.rowTextInput}
                    />
                    <TextField
                        label="Last Name"
                        textInputStyles={styles.rowTextInput}
                    />
                </View>
                <TextField
                    label="Email"
                    textInputProps={{
                        placeholder: "Xxxxxx@xxx.com",
                        keyboardType: 'email-address',
                        autoCapitalize: 'none'
                    }}
                />
                <TextField
                    label="Phone"
                    textInputProps={{
                        placeholder: "(XXX) XXX-XXXX",
                        keyboardType: 'phone-pad'
                    }}
                />
                <TextField
                    label="Password"
                    textInputProps={{
                        placeholder: "Xxxxxx",
                        secureTextEntry: true
                    }}
                />
                <View>
                    <AppCheckbox
                        text="I agree to the Consent to Receive Electronic Disclosure and understand that we'll send account notices to the email address you provided."
                    />
                    <AppCheckbox
                        text="I have read and agree to Venmo's User Agreement and Privacy Policy."
                        containerStyles={{
                            marginTop: 15
                        }}
                    />
                    <TouchableOpacity style={styles.linkButtonContainer}>
                        <Text style={styles.helpfulInformation}>Helpful Information</Text>
                    </TouchableOpacity>

                    <Button
                        title="SIGN UP"
                        containerStyles={styles.button}
                        textStyles={styles.buttonText}
                        onPress={()=>{
                            navigation.navigate('Drawer');
                        }}
                    />
                    <Text style={styles.reviewText}>By submitting, you confirm that you are authorized to use the number entered andagree to receive SMS texts to verify you own the number. Carrier fees may apply.</Text>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 30
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowTextInput: {
        minWidth: '45%'
    },
    container: {
        backgroundColor: colors.dark,
        flexGrow: 1
    },
    helpfulInformation: {
        padding: 10,
        paddingLeft: 0,
        color: colors.blue
    },
    button: {
        borderColor: colors.light,
        width: 100,
        alignSelf: 'center',
        marginTop: 20,
        borderWidth: 1,
        backgroundColor: colors.secondary.grey
    },
    buttonText: {
        color: colors.blue,
        fontWeight: 'bold'
    },
    reviewText: {
        color: colors.light,
        marginTop: 30,
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Calibre'
    },
    linkButtonContainer: {
        marginTop: 25,
    }
})