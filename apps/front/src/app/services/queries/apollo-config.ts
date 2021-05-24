
// import ApolloClient from "apollo-boost";

// const graphql = new ApolloClient({
//   uri: "https://api.github.com/graphql",
//   headers: {
//     Authorization: "bearer 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"
//   }
// });

// export default graphql;

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
	uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {

	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('token');

	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

export const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});
