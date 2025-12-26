import { useNavigate } from "react-router-dom";
import "./index.css";
import { Navigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };

  const goToLogin = () => {
    navigate("/login");
  };
  const token = localStorage.getItem("popxToken");

  if (token) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div className="landing-page-main-container">
      <div className="landing-page-sign-up-container">
        <h1>Welcome to PopX</h1>
        <p>
          Create your PopX account to manage your profile, access personalized
          features, and get started with a secure and seamless experience.
        </p>
        <div>
          <button onClick={goToRegister}>Create Account</button>
          <button onClick={goToLogin}>Already Registered? Login</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
