import { useEffect, useState } from "react";
import {
  Calendar as BigCalendar,
  dateFnsLocalizer,
} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import enUS from "date-fns/locale/en-US";

// Calendar date formatting setup
const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function Calendar() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/appointments/")
      .then((res) => res.json())
      .then((data) => {
        const events = data.map((appt) => ({
          id: appt.id,
          title: `Patient ${appt.patient}`,
          start: new Date(appt.start_time),
          end: new Date(
            new Date(appt.start_time).getTime() +
              appt.duration_minutes * 60 * 1000
          ),
        }));
        setAppointments(events);
      })
      .catch((err) => {
        console.error("Failed to load appointments", err);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Appointment Calendar</h1>

      <div className="bg-white p-4 rounded shadow">
        <BigCalendar
          localizer={localizer}
          events={appointments}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
}
