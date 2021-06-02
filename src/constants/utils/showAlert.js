import { Alert } from "react-native";
import messages from '../messages';

export default function showAlert(message) {
    Alert.alert(
        messages.common,
        messages[message],
        [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "OK", onPress: () => null }
        ]
    );
}