import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";
function AppointmentForm() {
  const [form, setForm] = useState({
  name: "",
  phone: "",
  age: "",
  gender: "",
  city: "",
  specialist: "",
  hospital: "",
  symptoms: "",
  date: "",
});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
try {
  await addDoc(collection(db, "appointments"), {
  ...form,
  status: "Pending",
  createdAt: new Date(),
});
  alert("Appointment Saved Successfully!");
} catch (error) {
  console.error(error);
  alert("Error saving appointment");
}
  const message = `
🩺 New Appointment Request

Name: ${form.name}
Phone: ${form.phone}
Age: ${form.age}
Gender: ${form.gender}
City: ${form.city}
Specialist: ${form.specialist}
Hospital: ${form.hospital}
Symptoms: ${form.symptoms}
Date: ${form.date}
`;

  const whatsappUrl =
    `https://wa.me/918795807257?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
};

  return (
    <section className="appointment-form">

      <h2>Book Doctor Appointment</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Patient Name"
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        />

        <select
          name="specialist"
          onChange={handleChange}
        >
          <option value="">
            Select Specialist
          </option>

          <option>Cardiologist</option>
          <option>Neurologist</option>
          <option>Orthopedic</option>
          <option>Dermatologist</option>
          <option>General Physician</option>
        </select>

        <input
          type="date"
          name="date"
          onChange={handleChange}
        />
        <input
  type="number"
  name="age"
  placeholder="Patient Age"
  onChange={handleChange}
/>

<select
  name="gender"
  onChange={handleChange}
>
  <option value="">Select Gender</option>
  <option>Male</option>
  <option>Female</option>
  <option>Other</option>
</select>

<input
  type="text"
  name="hospital"
  placeholder="Preferred Hospital"
  onChange={handleChange}
/>

<textarea
  name="symptoms"
  placeholder="Describe Symptoms"
  rows="4"
  onChange={handleChange}
></textarea>

        <button type="submit">
          Book Appointment
        </button>

      </form>

    </section>
  );
}

export default AppointmentForm;