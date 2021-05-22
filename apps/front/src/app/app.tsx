import styles from './app.module.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import * as Pages from './pages'

export function App() {

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={ Pages.Home } />
				<Route exact path='/login' component={ Pages.Login } />
				<Route exact path='/register' component={ Pages.Register } />
				<Route exact path='/profile' component={ Pages.Profile } />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
