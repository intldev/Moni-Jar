import auth from "@react-native-firebase/auth";

export async function logout(navigation, clearStore) {
  return auth()
    .signOut()
    .then(() => {
      clearStore();
      navigation.navigate("Auth");
    })
    .catch(error => {
      console.log(error);
    });
}
