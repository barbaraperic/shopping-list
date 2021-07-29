import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';
// import Navigation from './containers/Navigation'
import History from './pages/History';
import HistoryDetails from './pages/HistoryDetails';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import HomeDescription from './pages/HomeDescription';
import "./App.css";
import Main from "./containers/Main";
import { Test } from './containers/Sidebar';
import Navigation from './containers/Navigation';

const routes = [
  { path: '/',
    exact: true,
    navigation: Navigation,
    main: Main,
    sidebar: Test
  }
]

const App = () => {
  return (
    <Router>
      <Switch>
        <Wrapper>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
            >
              {route.navigation}
            </Route>
          ))}
          <MainWrapper>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
            >
              {route.main}
            </Route>
          ))}
          </MainWrapper>
          <div>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
              >
                {route.sidebar}
              </Route>
            ))}
          </div>
        </Wrapper>
      </Switch>
    </Router>
  )
}

const Wrapper = styled.div`
  display: flex;
`

const MainWrapper = styled.div`
  flex: 1;
`

export default App