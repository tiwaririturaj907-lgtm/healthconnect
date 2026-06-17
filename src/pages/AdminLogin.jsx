import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
if (
  email === "tiwaririturaj907@gmail.com" &&
  password === "geetatiwari@123"
) {
  localStorage.setItem("adminLoggedIn", "true");
  navigate("/dashboard");
} else {
  alert("Invalid Credentials");
}
  };

  return (
    <div className="admin-login">

      <form onSubmit={handleLogin}>

        <h2>Admin Login</h2>
      

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default AdminLogin;