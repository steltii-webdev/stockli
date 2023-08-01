import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={< Login />} />
          <Route path="/dashboard" element={< Dashboard />} />
        </Routes>
    </Router>
    </div>
  )
}