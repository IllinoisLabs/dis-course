import './App.css';

// internal imports
import Nav from './components/Nav';
import GlobalStyles, { theme } from './utils/GlobalStyles';

// external imports
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Nav />
        <Route exact path="/">
          Hello world!
        </Route>
        <Route exact path="/about">
          Page 2
        </Route>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
