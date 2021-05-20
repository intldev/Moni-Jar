import auth from "@react-native-firebase/auth";

export async function logout(navigation) {
    return auth()
        .signOut()
        .then(() => {
            navigation.navigate('Auth')
        })
        .catch((error) => {
            console.log(error)
        })
}