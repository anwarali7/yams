import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Results from './pages/Results';
import Rules from './pages/Rules';
import Dashboard from './pages/Dashboard'
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
          <Route path="rules" element={<Rules />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<LogIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
