import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Circle, Text as SvgText, TextPath, TSpan, G, Svg }
    from 'react-native-svg';
import { useRoute } from '@react-navigation/core';

// components
import Button from '../../../cpts/base/Button';

// constants
import colors from '../../../constants/colors';
import Hexagon from '../../../cpts/base/Hexagon';
import moment from 'moment';

const persons = ['JULIA', 'ARMONDO', 'ARMONDO', 'ARMONDO', 'ARMONDO', 'ARMONDO'];

const singleHeight = 55;
const numberOfPersons = getPersonsLength();
const boxHeight = numberOfPersons * 40;
const borderWidth = 8;
const circleHeight = 150;

function getPersonsLength() {
    if (persons.length > 3) {
        return persons.length
    }
    else return 2
}

export default function JarDetail() {

    const title = "SPRING BREAK JAR";
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
                <View style={{
                    backgroundColor: '#0aa',
                    width: '100%',
                    bottom: 40,
                    left: 40
                }}>
                    <Svg position="absolute" height="300" width="300"
                        viewBox="0 0 300 300">
                        <G id="circle">
                            <Circle
                                r={100}
                                x={150}
                                y={176}
                                fill="none"
                                stroke="#fff"
                                strokeWidth={0}
                                transform={`rotate(-135)`}
                            />
                        </G>
                        <SvgText 
                            fill="#000" 
                            fontSize="20"
                            fontWeight="700"
                            fontFamily="Calibre-SemiBold"
                        >
                            <TextPath href="#circle">
                                <TSpan dx={0} dy={-18}>
                                    {title}
                                </TSpan>
                            </TextPath>
                        </SvgText>
                    </Svg>
                </View>
                <View>
                    <View style={{
                        alignItems: 'center'
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
                                                borderBottomWidth: (persons.length - 1 === index) ? 0 : borderWidth
                                            }]} key={index}>
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
        zIndex: 1,
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
        zIndex: 0,
        borderTopWidth: 0
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
        top: ((circleHeight / 2) - 3)
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
        fontSize: 12,
        fontFamily: 'Calibre-SemiBold'
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
    }
})