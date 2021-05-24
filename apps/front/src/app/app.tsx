import styles from './app.module.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import * as Pages from './pages';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './services/queries/apollo-config';

export function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Pages.Home} />
          <Route exact path="/login" component={Pages.Login} />
          <Route exact path="/register" component={Pages.Register} />
          <Route exact path="/profile" component={Pages.Profile} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
