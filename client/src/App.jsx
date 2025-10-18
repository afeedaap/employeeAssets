import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import SignUp from './SignUp';
import Login from './Login';
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAssets from './CreateAssets';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
         <Route path="/home" element={<HomePage/>} />
          {/* <Route path="/create" element={<CreateAssets/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
