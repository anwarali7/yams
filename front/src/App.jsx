import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Results from './pages/Results';
import LogIn from './pages/LogIn';
import SharedLayout from './components/SharedLayout';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="results" element={<Results />} />
          <Route path="login" element={<LogIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
