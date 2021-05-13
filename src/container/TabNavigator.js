import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

// constants
import colors from '../constants/colors';

// components
import MyStatusBar from '../cpts/StatusBar';
import Navbar from '../screens/HomeScreen/components/Navbar';

// screens
import HomeScreen from '../screens/HomeScreen';

export default function TabNavigator(props) {

    const [activeTab, setActiveTab] = useState(0);

    const { navigation } = props;

    const tabs = [
        {
            title: 'The Hive',
            component: HomeScreen
        },
        {
            title: 'Your Jars',
            component: HomeScreen
        }
    ];

    const Component = tabs[activeTab].component;

    return (
        <View style={{ flex: 1 }}>
            <MyStatusBar backgroundColor={colors.primary} />
            <Navbar
                navigation={navigation}
            />
            <View style={styles.tabContainer}>
                {
                    tabs.map((tab, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={[styles.tab, {
                                    borderLeftWidth: index === 1 ? 1.5 : 0,
                                }]}
                                activeOpacity={0.9}
                                onPress={() => {
                                    setActiveTab(index);
                                }}
                            >
                                {
                                    index === activeTab ? (
                                        <LinearGradient
                                            colors={["transparent", colors.secondary.darkGradient]}
                                            style={[styles.linearGradient]}
                                        />
                                    ) : null
                                }
                                <Text style={styles.tabLabel}>{tab.title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <View style={styles.componentContainer}>
                <Component />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        width: '100%',
        height: 62,
        flexDirection: 'row',
        backgroundColor: colors.secondary.navigator
    },
    tab: {
        height: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: colors.secondary.navigator,
        paddingBottom: 15
    },
    tabLabel: {
        fontFamily: 'Calibre-SemiBold',
        fontSize: 23,
        lineHeight: 27
    },
    linearGradient: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        bottom: 0
    },
    componentContainer: {
        flexGrow: 1,
        marginTop: 10
    }
})