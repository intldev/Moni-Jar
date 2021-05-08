import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import colors from '../constants/colors';

export default function AppCheckbox(props) {

    const {
        showText = true,
        text,
        textStyles,

        containerStyles,

        checkBoxProps,

        value = false,
        onValueChange
    } = props;
    return (
        <View style={[styles.container, containerStyles]}>
            <CheckBox
                disabled={false}
                value={value}
                boxType="square"
                onAnimationType="one-stroke"
                offAnimationType="one-stroke"
                onValueChange={onValueChange}
                onCheckColor={colors.blue}
                onFillColor={colors.secondary.grey}
                onTintColor={colors.secondary.grey}
                {...checkBoxProps}
            />
            {
                showText ? (
                    <Text style={[styles.checkText, textStyles]}>{text}</Text>
                ) : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkText: {
        color: colors.light,
        lineHeight: 19,
        marginHorizontal: 15,
        fontSize: 15,
        fontFamily: 'Calibre',
    }
})