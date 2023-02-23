import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Grid, Layout } from './components';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Grid />
      </Layout>
    </ApolloProvider>
  );
};
export default App;
