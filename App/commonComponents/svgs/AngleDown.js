import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AngleDown(props) {
    const { size = 25, color = colors.dark } = props;
    return (
        <Svg
            width={size}
            height={size / 2}
            viewBox="0 0 15 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M1.21 1.21L7.2 7.07l5.72-5.73"
                stroke={color}
                strokeWidth={2.425}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default AngleDown
