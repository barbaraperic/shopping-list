import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Navigation from './containers/Navigation'
import History from './pages/History';
import HistoryDetails from './pages/HistoryDetails';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import HomeDescription from './pages/HomeDescription';
import "./App.css";

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/history',
    exact: true,
    component: History,
  },
  {
    path: '/history/:id',
    component: HistoryDetails,
  },
  {
    path: '/statistics',
    component: Statistics,
  },
  {
    path: '/:cardId',
    exact: true,
    component: HomeDescription
  },
]

const App = () => {
  return (
  <Router>
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
  </Router>
  )
}

export default App