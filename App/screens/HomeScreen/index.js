import React from 'react';
import { View } from 'react-native';

// components
import MyStatusBar from '../../commonComponents/StatusBar';
import Navbar from './components/Navbar';

// constants
import colors from '../../constants/colors';

export default function HomeScreen() {
    return (
        <View>
            <MyStatusBar backgroundColor={colors.primary} />
            <Navbar />
        </View>
    )
}