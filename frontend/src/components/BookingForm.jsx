import { useState, useEffect } from "react";

export default function BookingForm() {
  const [physios, setPhysios] = useState([]);
  const [formData, setFormData] = useState({
    physiotherapist: "",
    date: "",
    time: "",
    duration: 30,
    name: "",
    email: "",
  });
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/physiotherapists/")
      .then((res) => res.json())
      .then((data) => setPhysios(data))
      .catch((err) => console.error("Failed to load physios", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      // Temporary patient ID (you'll replace this later)
      patient: 1,
      physiotherapist: formData.physiotherapist,
      start_time: `${formData.date}T${formData.time}`,
      duration_minutes: formData.duration,
      notes: `Guest booking by ${formData.name} (${formData.email})`,
    };

    fetch("http://localhost:8000/api/appointments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to book");
        return res.json();
      })
      .then((data) => {
        setSuccessMsg("Appointment booked successfully!");
        setErrorMsg("");
        console.log("Created:", data);
      })
      .catch((err) => {
        setErrorMsg("Something went wrong. Please try again.");
        setSuccessMsg("");
        console.error("Booking error:", err);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 border rounded shadow bg-white"
    >
      <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>

      {successMsg && (
        <p className="mb-4 text-green-600 font-semibold">{successMsg}</p>
      )}
      {errorMsg && (
        <p className="mb-4 text-red-600 font-semibold">{errorMsg}</p>
      )}

      <label className="block mb-2">Your Name</label>
      <input
        name="name"
        type="text"
        required
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded mb-4"
      />

      <label className="block mb-2">Email</label>
      <input
        name="email"
        type="email"
        required
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded mb-4"
      />

      <label className="block mb-2">Physiotherapist</label>
      <select
        name="physiotherapist"
        required
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded mb-4"
      >
        <option value="">Select</option>
        {physios.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>

      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label>Date</label>
          <input
            name="date"
            type="date"
            required
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div className="flex-1">
          <label>Time</label>
          <input
            name="time"
            type="time"
            required
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      </div>

      <label className="block mb-2">Duration (min)</label>
      <input
        name="duration"
        type="number"
        min="15"
        max="90"
        step="15"
        required
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded mb-4"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Book Now
      </button>
    </form>
  );
}
