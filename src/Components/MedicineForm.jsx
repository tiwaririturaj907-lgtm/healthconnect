import { useState, useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";
function MedicineForm() {
  const [form, setForm] = useState({
  name: "",
  phone: "",
  address: "",
  medicine: "",
  quantity: "",
  notes: ""
});
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const removeFile = () => {
  setPreview(null);
  setFileName("");

  if (fileInputRef.current) {
    fileInputRef.current.value = "";
  }
};
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "medicineOrders"), {
      ...form,
      prescription: fileName,
      createdAt: new Date(),
      status: "Pending",
    });

    setSuccess(true);

    const message = `
💊 New Medicine Order

Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}
Medicine: ${form.medicine}
Quantity: ${form.quantity}
Notes: ${form.notes}
`;

    const whatsappUrl =
      `https://wa.me/918795807257?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

  } catch (error) {
    console.error(error);
    alert("Error saving order");
  }
};

  return (
    <section className="medicine-form">

      <h2>Order Medicines</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
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
          name="address"
          placeholder="Delivery Address"
          onChange={handleChange}
        />

        <input
          type="text"
          name="medicine"
          placeholder="Medicine Name"
          onChange={handleChange}
        />
        <label className="upload-label">
          📄 Upload Prescription
        </label>

        <input
  ref={fileInputRef}
  type="file"
  accept="image/*,.pdf"
  onChange={(e) => {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
    }

    if (file && file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
    }
  }}
/>
      {fileName && (
  <button
    type="button"
    className="remove-file"
    onClick={removeFile}
  >
    Remove File
  </button>
)}
        <p className="upload-note">
          Upload prescription (Image or PDF)
        </p>
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          onChange={handleChange}
        />

        <textarea
          name="notes"
          placeholder="Additional Notes"
          rows="4"
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          Submit Request
        </button>

      </form>
{success && (
  <div className="success-message">
    ✅ Order Request Submitted Successfully
  </div>
)}
    </section>
  );
}

export default MedicineForm;