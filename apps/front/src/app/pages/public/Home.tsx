import Page from '../../components/Page';
import { ApolloProvider } from '@apollo/react-hooks';
import client from '../../../graphql/client';
import {Repository} from '../../../graphql/Repository';

const Home = () => {
  return (
    <ApolloProvider client={client}>
      <Page>
        <Repository />
      </Page>
    </ApolloProvider>
  );
};

export default Home;
