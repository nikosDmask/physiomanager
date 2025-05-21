export default function Dashboard() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="text-lg">Appointments Today</h2>
          <p className="text-2xl font-bold">8</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="text-lg">Gaps in Schedule</h2>
          <p className="text-2xl font-bold">3</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="text-lg">Cancelled</h2>
          <p className="text-2xl font-bold">1</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h2 className="text-lg">Utilization</h2>
          <p className="text-2xl font-bold">85%</p>
        </div>
      </div>
    </div>
  );
}
