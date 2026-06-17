 import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  updateDoc,
  doc
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase";
function AdminDashboard() {
  const navigate = useNavigate();
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");
 useEffect(() => {
  const isLoggedIn =
    localStorage.getItem("adminLoggedIn");

  if (!isLoggedIn) {
    navigate("/admin");
    return;
  }

  const fetchAppointments = async () => {
    const snapshot = await getDocs(
      collection(db, "appointments")
    );

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setAppointments(data);
  };

  fetchAppointments();
}, [navigate]);
const updateStatus = async (id, status) => {
  await updateDoc(
    doc(db, "appointments", id),
    { status }
  );

  setAppointments(
    appointments.map((item) =>
      item.id === id
        ? { ...item, status }
        : item
    )
  );
};
  return (
    <div className="dashboard">

      <h1>Admin Dashboard</h1>
      <button
  onClick={() => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin");
  }}
>
  Logout
</button>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h2>125</h2>
          <p>Medicine Orders</p>
        </div>

        <div className="dashboard-card">
          <h2>{appointments.length}</h2>
          <p>Appointments</p>
        </div>
<h2 style={{ marginTop: "40px" }}>
  Appointment Requests
</h2>
<input
  type="text"
  placeholder="Search by Name or Phone..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="search-input"
/>
<table className="appointment-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Phone</th>
      <th>City</th>
      <th>Specialist</th>
      <th>Hospital</th>
      <th>Symptoms</th>
      <th>Date</th>
      <th>Action</th>
      <th>Status</th>
    </tr>
  </thead>

  <tbody>
    {appointments
  .filter(
    (item) =>
      item.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      item.phone
        ?.includes(search)
  )
  .map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.phone}</td>
        <td>{item.city}</td>
        <td>{item.specialist}</td>
        <td>{item.hospital}</td>
        <td>{item.symptoms}</td>
        <td>{item.date}</td>

<td>
  <select
    value={item.status || "Pending"}
    onChange={(e) =>
      updateStatus(item.id, e.target.value)
    }
  >
    <option>Pending</option>
    <option>Confirmed</option>
    <option>Completed</option>
    <option>Cancelled</option>
  </select>
</td>

<td>
  <button
    className="view-btn"
    onClick={() => setSelectedAppointment(item)}
  >
    View
  </button>
</td>
      </tr>
    ))}
  </tbody>
</table>
{selectedAppointment && (
  <div
    className="popup-overlay"
    onClick={() => setSelectedAppointment(null)}
  >
    <div
      className="popup"
      onClick={(e) => e.stopPropagation()}
    >
      <h2>Appointment Details</h2>

      <p><strong>Name:</strong> {selectedAppointment.name}</p>
      <p><strong>Phone:</strong> {selectedAppointment.phone}</p>
      <p><strong>Age:</strong> {selectedAppointment.age}</p>
      <p><strong>Gender:</strong> {selectedAppointment.gender}</p>
      <p><strong>City:</strong> {selectedAppointment.city}</p>
      <p><strong>Specialist:</strong> {selectedAppointment.specialist}</p>
      <p><strong>Hospital:</strong> {selectedAppointment.hospital}</p>
      <p><strong>Date:</strong> {selectedAppointment.date}</p>
      <p><strong>Symptoms:</strong> {selectedAppointment.symptoms}</p>

      <button
        className="close-btn"
        onClick={() => setSelectedAppointment(null)}
      >
        Close
      </button>
    </div>
  </div>
)}
        <div className="dashboard-card">
          <h2>32</h2>
          <p>Hospital Requests</p>
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;