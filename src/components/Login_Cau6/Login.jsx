import { useAuth } from "./AuthContext"
import { useNavigate } from "react-router-dom"

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    login()
    navigate("/profile-c6")
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}

export default Login