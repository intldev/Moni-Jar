/** The reason this is a hook is because the returned client will
 * change when the user auth state changes */

import { cache } from "../../cache";
import { typeDefs } from "../../constants/typedefs";
import { GRAPHQL_ENDPOINT } from "@env";
import { ApolloClient, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useEffect, useState } from "react";

// Create an Apollo Link that passes ID token (if it exists) to Authorization header
const getAuthLink = token =>
  setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

const httpLink = createHttpLink({
  uri: GRAPHQL_ENDPOINT,
});

const useApolloClient = user => {
  const [token, setToken] = useState(null);

  // Update `token` when `user` changes
  useEffect(() => {
    if (!user) {
      setToken(null);
      return;
    }

    user
      .getIdToken()
      .then(setToken)
      .catch(() => setToken(null));
  }, [user]);

  return new ApolloClient({
    cache,
    link: getAuthLink(token).concat(httpLink),
    typeDefs,
  });
};

export default useApolloClient;
