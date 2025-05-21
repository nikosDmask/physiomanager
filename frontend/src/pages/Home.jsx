import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Welcome to PhysioManager</h1>
      <div className="flex gap-4">
        <Link to="/book" className="bg-blue-600 text-white px-4 py-2 rounded">Book Appointment</Link>
        <Link to="/dashboard" className="bg-gray-800 text-white px-4 py-2 rounded">Admin Dashboard</Link>
        <Link to="/calendar" className="bg-green-600 text-white px-4 py-2 rounded">Calendar</Link>
      </div>
    </div>
  );
}
