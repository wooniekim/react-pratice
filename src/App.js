// import Nav from './components/nav';
// import Footer from './components/footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

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