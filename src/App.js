import Mainpage from './pages/Mainpage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Mainpage />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
  );
}

export default App;
