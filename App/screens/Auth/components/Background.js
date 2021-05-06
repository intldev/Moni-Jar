import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

// images
import SlideBackImage from '../../../assets/images/slideBack.png';

// constantss
import colors from '../../../constants/colors';

export default function Background(props) {
    const { backgroundColor = colors.primary } = props;
    return (
        <View style={[styles.background, {
            backgroundColor
        }]}>
            <Image
                source={SlideBackImage}
                style={styles.sideImage1}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: colors.primary
    },
    sideImage1: {
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    sideImage2: {
        height: 200,
        resizeMode: 'contain',
        position: 'absolute',
        right: 0,
        width: 140,
        top: 100
    }
})