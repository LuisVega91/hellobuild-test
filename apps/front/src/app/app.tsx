import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './services/queries/apollo-config';
import Home from './pages/Home';
import Login from './pages/Login';

export function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
