import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import colors from '../constants/colors';

export default function TextField(props) {

    const {
        containerStyles,

        textInputProps,
        textInputStyles,

        label = "Label",
        labelStyles
    } = props;

    return (
        <View style={[styles.container, containerStyles]}>
            <Text style={[styles.label, labelStyles]}>{label}</Text>
            <TextInput
                style={[styles.textField, textInputStyles]}
                placeholder="Xxxxxxx"
                placeholderTextColor={colors.blue}
                {...textInputProps}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textField: {
        borderBottomColor: colors.light,
        borderBottomWidth: 1,
        fontWeight: '600',
        paddingBottom: 8,
        paddingTop: 11,
        color: colors.light
    },
    label: {
        color: colors.light
    },
    container: {
        marginBottom: 30,
    }
})