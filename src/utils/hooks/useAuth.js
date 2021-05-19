import { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";

const useAuth = () => {
  // Set an initializing state whilst Firebase connects
  const [isInitializing, setIsInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      setUser(user);
      if (isInitializing) setIsInitializing(false);
    });

    /** The onAuthStateChanged method also returns an unsubscriber function which allows us to
     * stop listening for events whenever the hook is no longer in use. */
    return subscriber;
  }, [isInitializing]);

  return [isInitializing, user];
};

export default useAuth;
