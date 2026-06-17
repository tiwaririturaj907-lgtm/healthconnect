import { useState } from "react";

function TrackOrder() {
  const [orderId, setOrderId] = useState("");

  const handleTrack = () => {
    alert(`Tracking Order: ${orderId}`);
  };

  return (
    <div className="track-order">

      <h1>Track Your Order</h1>

      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />

      <button onClick={handleTrack}>
        Track Order
      </button>

      {orderId && (
  <div className="order-status">
    📦 Status: Pending
  </div>
)}

    </div>
  );
}

export default TrackOrder;