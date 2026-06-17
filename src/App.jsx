import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrackOrder from "./pages/TrackOrder";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/track-order" element={<TrackOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;