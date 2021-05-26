import React from 'react';
import Svg, { Path } from "react-native-svg";
import colors from '../../constants/colors';

export default function Hexagon(props) {
    const { pathProps } = props;
    return (
        <Svg viewBox="0 0 256 256">
            <Path
                d="M197.928 172.13l-70.102 40.474-70.102-40.473V91.184l70.102-40.474 70.102 40.474z"
                strokeMiterlimit={20}
                strokeDasharray="none"
                stroke={colors.dark}
                fill={colors.light}
                strokeWidth={5}
                {...pathProps}
            />
        </Svg>
    )
}