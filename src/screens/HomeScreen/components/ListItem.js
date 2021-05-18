import React from 'react';
import colors from '../../../constants/colors';
import { View, Text, StyleSheet, Image } from 'react-native';
import ProgressBar from './ProgressBar';

const baseHeight = 95;

export default function ListItem(props) {
    const { item } = props;

    return (
        <>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../../assets/images/hexa.png')}
                        style={styles.hexaInner}
                    />
                    <Image
                        source={require('../../../assets/images/lightBlue.png')}
                        style={styles.hexa}
                    />
                    {
                        item.icon === 'bee' ? (
                            <Image
                                source={require('../../../assets/images/beeBadge.png')}
                                style={styles.badge}
                            />
                        ) : (
                            <Image
                                source={require('../../../assets/images/bearerBadge.png')}
                                style={styles.badge}
                            />
                        )
                    }
                </View>
                <View style={[styles.contentContainer]}>
                    <Text style={styles.title} numberOfLines={1}>
                        <Text style={styles.bold}>{item.name}</Text> {item.notification} <Text style={styles.bold}>{item.jar}</Text>
                    </Text>
                    <Text style={styles.title}>2h</Text>
                    {
                        item.isProgress ? (
                            <ProgressBar
                                progress={item.progress}
                            />
                        ) : (
                            <Text style={[styles.title, {
                                color: colors.blue,
                                marginTop: 5
                            }]}
                                numberOfLines={1}
                            >
                                <Text style={styles.bold}>"ALMOST THERE.</Text> I can't wait to get to Cancun"
                            </Text>
                        )
                    }
                    <View style={[styles.iconContainer, {
                        marginTop: 5
                    }]}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={require('../../../assets/images/likeIcon.png')}
                                style={styles.icon}
                            />
                            <Text style={styles.title}>{item.likes}</Text>
                        </View>
                        <View style={[styles.iconContainer, {
                            marginLeft: 10
                        }]}>
                            <Image
                                source={require('../../../assets/images/commentIcon.png')}
                                style={styles.icon}
                            />
                            <Text style={styles.title}>{item.comments}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: baseHeight,
        backgroundColor: colors.dark,
        alignSelf: 'center',
        borderRadius: 50,
        marginBottom: 25,
    },
    hexaInner: {
        height: baseHeight,
        width: baseHeight,
        resizeMode: 'contain',
        position: 'absolute',
    },
    hexa: {
        height: baseHeight,
        width: baseHeight,
        resizeMode: 'contain',
        position: 'absolute',
    },
    badge: {
        height: 35,
        width: 35,
        resizeMode: 'contain',
        marginLeft: 10
    },
    imageContainer: {
        marginLeft: -10,
    },
    contentContainer: {
        paddingLeft: baseHeight,
        flex: 1,
        height: '100%',
        position: 'absolute',
        width: '100%',
        paddingVertical: 5,
        paddingRight: 20,
        justifyContent: 'center'
    },
    title: {
        color: colors.light,
        fontFamily: 'Calibre',
    },
    bold: {
        fontFamily: 'Calibre-SemiBold'
    },
    icon: {
        height: 14,
        width: 14,
        resizeMode: 'contain',
        marginRight: 5
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})