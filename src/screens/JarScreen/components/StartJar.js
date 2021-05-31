import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';

// constants
import colors from '../../../constants/colors';
import cuid from 'cuid';
import auth from "@react-native-firebase/auth";

// components
import Button from '../../../cpts/base/Button';
import TextField from '../../../cpts/base/TextField';
import DatePicker from '../../../cpts/base/DatePicker';

// graphql
import { CREATE_JAR, CREATE_JAR_MEMBERSHIP } from '../../../constants/mutations';
import { useMutation } from '@apollo/client';

const initialData = {
    name: '',
    savingsGoal: '',
    date: ''
}

export default function StartJar() {

    const [createJar, { data: responseJar, loading }] = useMutation(CREATE_JAR);
    const [createJarMembership, { data: response, loading: loadingMembership, error }] = useMutation(CREATE_JAR_MEMBERSHIP);

    const navigation = useNavigation();

    const [data, setData] = useState({
        ...initialData
    });
    const [errors, setErrors] = useState({
        ...initialData
    });
    const [id, setId] = useState(cuid());
    const [isValidationFired, setIsValidationFired] = useState(false);

    useEffect(() => {
        if (isValidationFired)
            validate();
    }, [data]);

    useEffect(() => {
        if (response?.createJarMembership) {
            navigation.dispatch(
                StackActions.replace('JarDetail', {
                    data: response?.createJarMembership
                })
            );
        }
        else if (error) {
            alert("Something went wrong while create a Jar, Please try again later.")
        }
    }, [response, error]);

    useEffect(() => {
        if (responseJar?.createJar) {
            createJarMembership({
                variables: {
                    input: {
                        jarMembership: {
                            isAdmin: true,
                            jarId: id,
                            userId: auth()?.currentUser?.uid
                        }
                    }
                }
            })
        }
    }, [responseJar]);
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <TextField
                label="Name your Jar"
                textInputProps={{
                    placeholder: 'The Spring Break Jar',
                    placeholderTextColor: colors.secondary.placeholder,
                    onChangeText: (text) => {
                        handleData('name', text)
                    },
                    value: data.name
                }}
                error={errors.name}
            />
            <TextField
                label="What's your saving goal?"
                textInputProps={{
                    placeholder: '$0.00',
                    placeholderTextColor: colors.secondary.placeholder,
                    keyboardType: 'number-pad',
                    onChangeText: (text) => {
                        handleData('savingsGoal', text)
                    },
                    value: data.savingsGoal
                }}
                error={errors.savingsGoal}
            />
            <DatePicker
                label="When is your deadline?"
                placeholder="03/05/21"
                datePickerProps={{
                    minimumDate: new Date(),
                    onDateChange: (date) => {
                        handleData('date', date)
                    },
                    date: data.date
                }}
                error={errors.date}
            />
            <Button
                title="START JAR"
                containerStyles={styles.button}
                onPress={submit}
                isLoading={loading || loadingMembership}
            />
        </View>
    )

    function validate(isLocal) {
        let validated = true;
        const errors = {
            ...initialData
        };
        Object.keys(data).forEach((field) => {
            if (data[field] === '') {
                validated = false;
                errors[field] = `${field} is Required`;
            }
        })
        if (!isLocal)
            setErrors(errors);
        return validated;
    }
    function submit() {
        const validated = validate();
        setIsValidationFired(true);
        if (validated) {
            createJar({
                variables: {
                    input: {
                        jar: {
                            id,
                            deadline: data?.date,
                            savingsGoal: joinRemoveCurrency(data?.savingsGoal, 'remove')
                        }
                    }
                }
            });
        }
    }

    function handleData(type, value) {
        setData({
            ...data,
            [type]: type === 'savingsGoal' ? joinRemoveCurrency(value, 'join') : value
        })
    }
    function joinRemoveCurrency(value, type) {
        if (type === 'join') {
            if (value.includes('$')) {
                return value;
            }
            else return `$${value}`
        }
        else if (type === 'remove') {
            return value.replace('$', '');
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: colors.dark,
        paddingHorizontal: 24
    },
    button: {
        backgroundColor: colors.blue,
        width: 205,
        alignSelf: 'center',
        marginTop: 10
    }
})