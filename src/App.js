import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Navigation from './containers/Navigation'
import History from './pages/History';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import "./App.css";

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/history',
    component: History,
  },
  {
    path: '/statistics',
    component: Statistics,
  },
]

const App = () => {
  return (
  <Router>
    <div id="root">
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
          >
            <route.component />
          </Route>
        ))}
      </Switch>
    </div>
  </Router>
  )
}

export default App