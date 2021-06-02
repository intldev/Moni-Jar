import auth from "@react-native-firebase/auth";
import showAlert from "./showAlert";

export async function logout(navigation) {
  auth()
    .signOut()
    .then(() => {
      navigation.navigate("Auth");
    })
    .catch(error => {
      showAlert('tryAgain');
    });
}
