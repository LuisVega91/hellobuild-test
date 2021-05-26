import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { requireLogin } from './midlewares/requireLogin';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './services/queries/apollo-config';
import Home from './pages/Home';
import Login from './pages/Login';

export function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <GuardProvider guards={[requireLogin]}>
        <BrowserRouter>
          <Switch>

            <Route exact path="/login" component={Login} />

            <GuardedRoute exact path="/home" meta={{ auth: true }} component={Home} />
            <Redirect to="/login" />
          </Switch>
        </BrowserRouter>
      </GuardProvider>
    </ApolloProvider>
  );
}

export default App;
