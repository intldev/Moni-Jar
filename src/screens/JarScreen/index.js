import React from 'react';
import { View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';

// components
import PlusIcon from '../../assets/images/plusIcon.png';
import ListItem from '../HomeScreen/components/ListItem';

export default function JarScreen() {

    const data = [
        {
            name: "The Spring Break Jar",
            isProgress: true,
            progressText: '75% SAVED',
            progress: 0.6,
            daysLeft: 45,
            timeTypeText: 'Honi Bee',
            persons: [{ name: "TS" }, { name: "CT" }, { name: "CT" }, { name: "CT" }, { name: "TS" }, { name: "PS" }, { name: "DR" }]
        },
        {
            name: "The Spring Break Jar",
            isProgress: true,
            progressText: '75% SAVED',
            progress: 0.6,
            daysLeft: 45,
            timeTypeText: 'Honi Bee',
            persons: [{ name: "TS" }, { name: "CT" }]
        },
        {
            name: "The Spring Break Jar",
            isProgress: true,
            progressText: '75% SAVED',
            progress: 0.6,
            daysLeft: 45,
            timeTypeText: 'Honi Bee',
            persons: [{ name: "TS" }, { name: "CT" }, { name: "TS" }, { name: "PS" }, { name: "DR" }]
        },
        {
            name: "The Spring Break Jar",
            isProgress: true,
            progressText: '75% SAVED',
            progress: 0.6,
            daysLeft: 45,
            timeTypeText: 'Honi Bee',
            persons: [{ name: "TS" }, { name: "CT" }, { name: "DR" }]
        },
        {
            name: "The Spring Break Jar",
            isProgress: true,
            progressText: '75% SAVED',
            progress: 0.6,
            daysLeft: 45,
            timeTypeText: 'Honi Bee',
            persons: [{ name: "TS" }, { name: "CT" }, { name: "TS" }, { name: "PS" }, { name: "DR" }]
        },
        {
            name: "The Spring Break Jar",
            isProgress: true,
            progressText: '75% SAVED',
            progress: 0.6,
            daysLeft: 45,
            timeTypeText: 'Honi Bee',
            persons: [{ name: "TS" }, { name: "CT" }, { name: "CT" }]
        },

    ];
    const renderItem = ({ item }) => <ListItem item={item} />;

    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        paddingVertical: 20,
                    }}
                />
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.plusIconContainer}>
                    <Image
                        source={PlusIcon}
                        style={styles.plusIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary.navigator
    },
    listContainer: {
        flex: 6,
    },
    footerContainer: {
        flex: 2,
    },
    plusIcon: {
        height: 40,
        width: 40,
        resizeMode: 'contain'
    },
    plusIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 24
    }
})