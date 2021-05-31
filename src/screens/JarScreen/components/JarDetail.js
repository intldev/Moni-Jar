import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/core';

// components
import Button from '../../../cpts/base/Button';

// constants
import colors from '../../../constants/colors';
import Hexagon from '../../../cpts/base/Hexagon';
import moment from 'moment';

const persons = ['JULIA', 'ARMONDO', 'TAYLOR', 'RACHEL', 'JULIA', 'SOMEONE'];

const singleHeight = 60;
const numberOfPersons = getPersonsLength();
const boxHeight = numberOfPersons * 40;
const borderWidth = 8;
const circleHeight = 232;

function getPersonsLength() {
    if (persons.length > 6) {
        return persons.length
    }
    else if (persons.length > 2) {
        return persons.length - 1
    }
    else return persons.length
}
export default function JarDetail() {

    const route = useRoute();

    const data = route?.params?.data || {};
    return (
        <View style={styles.parentContainer}>
            <ScrollView
                style={{
                    backgroundColor: colors.secondary.navigator
                }}
                contentContainerStyle={styles.container}
            >
                <Text style={styles.jarName}>{data?.jar?.name || ''}</Text>
                <View>
                    <View style={{
                        alignItems: 'center',
                        top: -20
                    }}>
                        <View style={{
                            zIndex: 9,
                        }}>
                            <View style={styles.currencyHexContainer}>
                                <Hexagon
                                    pathProps={{
                                        fill: colors.primary,
                                        stroke: 0
                                    }}
                                />
                                <Text style={styles.hexCenter}>$</Text>
                            </View>
                            <View style={styles.hexagonContainer}>
                                <Hexagon
                                    pathProps={{
                                        fill: colors.dark
                                    }}
                                />
                                <Amount
                                    containerStyles={styles.hexCenter}
                                    color={colors.secondary.navigator}
                                />
                            </View>
                        </View>
                        <View style={[styles.semiCricle, styles.semiUp]} />
                        <View style={styles.drum}>
                            <View style={{
                                height: boxHeight + circleHeight,
                                marginTop: -circleHeight / 2,
                                justifyContent: 'center'
                            }}>
                                {
                                    persons.map((person, index) => {
                                        return (
                                            <View style={[styles.row, {
                                                borderBottomWidth: (persons.length - 1 === index) ? 0 : borderWidth,
                                                backgroundColor: persons.length === 1 ? colors.secondary.navigator : 'transparent',
                                                width: persons.length === 1 ? '98%' : '100%',
                                                left: persons.length === 1 ? '1%' : '0%',
                                            }]} key={index}>
                                                {
                                                    (persons.length === 1) ? (
                                                        <View style={styles.hiddenContainer} />
                                                    ) : null
                                                }
                                                {
                                                    ((persons.length === 2 || persons.length === 3) && persons.length - 1 === index) ? (
                                                        <View style={styles.hiddenContainer2} />
                                                    ) : null
                                                }
                                                <Text style={styles.personName}>{person}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </View>
                        <View style={[styles.semiCricle, styles.semiDown]} />
                        <View style={styles.bottomEdge} />
                    </View>
                    <View style={styles.bottomContainer}>
                        <View style={styles.textContainer}>
                            <View style={[styles.headingContainer, {
                                justifyContent: 'flex-end'
                            }]}>
                                <Text style={styles.heading}>Goal Savings: </Text>
                                <Amount
                                    amount={`${parseInt(data?.jar?.savingsGoal).toFixed(2)}`}
                                />
                            </View>
                            <Divider />
                            <View style={styles.headingContainer}>
                                <Text style={styles.heading}>Deadline: </Text>
                                <Text style={styles.amount}>{moment(data?.jar?.deadline).format('MMM DD, YYYY')} </Text>
                            </View>
                        </View>
                        <Button
                            title="DROP SOME HONI"
                            containerStyles={styles.button}
                            textStyles={styles.buttonText}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )

    function Divider() {
        return (
            <View style={styles.divider} />
        )
    }
    function Amount(props) {
        const { color = colors.dark, containerStyles, amount = '0.00' } = props;
        const amounts = amount.split('.');
        return (
            <View style={[styles.amountContainer, containerStyles]}>
                <Text style={[styles.amount, { color }]}>{amounts[0]}</Text>
                <Text style={[styles.amount, styles.amountDecimal, { color }]}>.{amounts[1]}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 24
    },
    button: {
        backgroundColor: colors.dark,
        width: 200,
        marginTop: 35,
        alignSelf: 'center'
    },
    buttonText: {
        color: colors.secondary.navigator
    },
    drum: {
        height: boxHeight,
        width: circleHeight,
        borderWidth: borderWidth,
        borderRadius: 0,
        backgroundColor: colors.secondary.navigator,
        zIndex: 3,
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    semiCricle: {
        height: circleHeight,
        width: circleHeight,
        borderWidth: borderWidth,
        borderRadius: circleHeight / 2,
        marginBottom: -circleHeight / 2,
        backgroundColor: colors.secondary.navigator
    },
    semiDown: {
        marginTop: -circleHeight / 2,
        zIndex: 1,
    },
    semiUp: {
        zIndex: 2,
        borderBottomColor: colors.secondary.navigator,
    },
    row: {
        height: singleHeight,
        borderBottomWidth: borderWidth,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomEdge: {
        backgroundColor: colors.dark,
        height: 8,
        width: 70,
        borderRadius: 20,
        top: ((circleHeight / 2) - 3),
        marginBottom: 20
    },
    bottomContainer: {
        marginTop: 110,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    personName: {
        fontSize: 20,
        fontFamily: 'Calibre-SemiBold',
        letterSpacing: 6,
        zIndex: 2
    },
    amountContainer: {
        flexDirection: 'row'
    },
    amount: {
        fontFamily: 'Calibre-SemiBold'
    },
    amountDecimal: {
        fontSize: 11,
        bottom: 2
    },
    heading: {
        fontFamily: "Calibre"
    },
    divider: {
        height: 30,
        width: 1,
        backgroundColor: colors.dark,
        marginHorizontal: 20,
    },
    headingContainer: {
        flexDirection: 'row',
        width: '45%',
    },
    hexagonContainer: {
        height: 90,
        width: 90,
        top: 40,
        zIndex: 2,
        justifyContent: 'center',
    },
    currencyHexContainer: {
        position: 'absolute',
        height: 40,
        width: 40,
        justifyContent: 'center',
        top: 50,
        zIndex: 10
    },
    hexCenter: {
        alignSelf: 'center',
        position: 'absolute',
    },
    parentContainer: {
        flexGrow: 1
    },
    hiddenContainer: {
        position: 'absolute',
        height: 80,
        width: '102%',
        backgroundColor: colors.secondary.navigator,
        bottom: -33,
        borderRadius: 34,
        zIndex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    jarName: {
        fontFamily: 'Calibre-SemiBold',
        fontSize: 20,
        letterSpacing: 2,
        textTransform: 'uppercase'
    },
    hiddenContainer2: {
        position: 'absolute',
        height: singleHeight - 20,
        width: '98%',
        bottom: 10,
        backgroundColor: colors.secondary.navigator,
        borderRadius: 30
    }
})


//8   16  24

//65  45  25