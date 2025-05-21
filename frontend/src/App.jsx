import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './components/Dashboard';
import Calendar from './components/Calendar';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/book" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
