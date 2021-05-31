import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../../../constants/colors';
import moment from 'moment';

import DatePickerNative from 'react-native-date-picker';
import PickerModal from './PickerModal';

export default function DatePicker(props) {

    const {
        containerStyles,

        datePickerProps,
        datePlaceholderValue,

        label = "Label",
        labelStyles,
        error,
        placeholder
    } = props;

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style={[styles.container, containerStyles]}>
            <Text style={[styles.label, labelStyles, error ? styles.error : null]}>
                {label}
                {error ? "*" : ""}
            </Text>
            <TouchableOpacity
                style={[styles.textField]}
                onPress={() => {
                    setModalOpen(true);
                }}
            >
                <Text style={[styles.placeholder, datePlaceholderValue ? styles.selected : null]}>
                    {
                        datePlaceholderValue
                            ? moment(datePlaceholderValue).format('MM/DD/YY')
                            : placeholder
                    }
                </Text>
            </TouchableOpacity>
            <PickerModal
                modalVisible={modalOpen}
                setModalVisible={setModalOpen}
                renderPicker={renderDatePicker}
            />
        </View>
    )


    function renderDatePicker() {
        return (
            <DatePickerNative
                mode="date"
                {...datePickerProps}
            />
        )
    }
}


const styles = StyleSheet.create({
    textField: {
        borderBottomColor: colors.light,
        borderBottomWidth: 1,
        paddingBottom: 8,
        paddingTop: 11,
    },
    label: {
        color: colors.light,
        fontFamily: "Calibre",
    },
    container: {
        marginBottom: 30,
    },
    error: {
        color: colors.secondary.danger,
    },
    placeholder: {
        color: colors.secondary.placeholder,
        fontFamily: "Calibre-SemiBold",
        fontSize: 15,
    },
    selected: {
        color: colors.light
    }
});
