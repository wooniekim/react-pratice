// import Nav from './components/nav';
// import Footer from './components/footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Register from "./pages/registerPage/Register";
import Login from "./pages/loginPage/Login";

function App() {
  return (
    <Router>
        <Route path="/auth">
          <Register />
        </Route>
        <Route path="/">
          <Login />
        </Route>
    </Router>
  );
}

export default App;