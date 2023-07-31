import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/signup" element={< Signup />} />
          <Route path="/login" element={< Login />} />
        </Routes>
    </Router>
    </div>
  )
}