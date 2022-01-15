import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Checkout from './components/pages/Checkout';
import Main from './components/pages/Main';
import Shop from './components/pages/Shop';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Shop />} />
            <Route path="checkout" element={<Checkout />}/>
            <Route path="register" element={<Register />}/>
            <Route path="login" element={<Login />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
