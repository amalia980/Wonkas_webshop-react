import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/pages/Main';
import Shop from './components/pages/Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Shop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
