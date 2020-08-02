/* eslint-disable no-case-declarations */
import React, {
  useEffect,
  useReducer,
  useState,
} from 'react';
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';
import appReducer from './reducers';
import { ThemeContext } from './themeContext';
import { StateContext } from './stateContext';
import HeaderBar from './pages/headerBar';
import PostPage from './pages/postPage';
import HomePage from './pages/homePage';
import FooterBar from './pages/footerBar';

const routes = mount({
  '/': route({ view: <HomePage /> }),
  '/view/:id': route((req) => ({
    view: <PostPage id={req.params.id} />,
  })),
});

function App() {
  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral',
  });

  const [state, dispatch] = useReducer(appReducer, {
    user: '',
    posts: [],
    error: '',
  });
  const { user } = state;

  useEffect(() => {
    if (user) {
      document.title = `${user} - React Hooks Blog`;
    } else {
      document.title = 'React Hooks Blog';
    }
  }, [user]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={theme}>
        <Router routes={routes}>
          <div style={{ padding: 8 }}>
            <HeaderBar setTheme={setTheme} />
            <hr />
            <View />
            <FooterBar />
          </div>
        </Router>
      </ThemeContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
