import * as React from "react"
import Svg, { Path } from "react-native-svg"
import colors from "../../constants/colors";

function UserProfile(props) {
  const { size = 25, color = colors.dark } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.61 22.02c2.2 1.77 4.95 2.74 7.78 2.74 2.83.01 5.57-.96 7.77-2.74.5-.4.96-.84 1.39-1.31 4.6-5.06 4.23-12.89-.83-17.49-5.06-4.6-12.9-4.23-17.5.83-4.6 5.06-4.23 12.89.83 17.49.18.17.37.33.56.48zm7.77-17.71c2.57 0 4.65 2.08 4.65 4.65 0 2.57-2.08 4.65-4.65 4.65-2.57 0-4.65-2.08-4.65-4.65 0-2.56 2.08-4.65 4.65-4.65zm-4.53 8.63c2.18 2.5 5.98 2.77 8.48.58.21-.18.4-.38.58-.58 2.44.96 4.24 2.66 4.83 4.69a10.92 10.92 0 01-2.63 3.11A10.756 10.756 0 014.43 19.6C3.88 19 3.4 18.34 3 17.63c.61-2.03 2.41-3.74 4.85-4.69z"
        fill={color}
      />
    </Svg>
  )
}

export default UserProfile;
