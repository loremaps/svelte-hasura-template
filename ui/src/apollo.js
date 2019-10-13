import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
    uri: 'http://localhost:8080/v1/graphql',
    request: (operation) => {
        operation.setContext({
            headers: {
                'x-hasura-admin-secret': 'myadminsecretkey'
            }
        })
    }
})