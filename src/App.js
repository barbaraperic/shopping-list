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
import { PreviewSidebar, AddItemSidebar } from './containers/Sidebar';
import Navigation from './containers/Navigation';

const routes = [
  { 
    path: '/',
    exact: true,
    main: () => <Main />,
    // sidebar: () => <PreviewSidebar />,
  },
  { 
    path: '/items',
    main: () => <Main />,
    sidebar: () => <AddItemSidebar />,
  },
  { 
    path: '/history',
    main: () => <History />,
    sidebar: () => <AddItemSidebar />,
  },
  { 
    path: '/statistics',
    main: () => <Statistics />,
    sidebar: () => <AddItemSidebar />,
  },
]

const App = () => {
  return (
    <Router>
      <Switch>
        <Wrapper>
          <Navigation />
          <MainWrapper>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
            >
              <route.main />
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
                <route.sidebar />
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