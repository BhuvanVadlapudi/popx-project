import { useNavigate } from "react-router-dom";
import Login from "../Login";

const LoginWithNavigation = (props) => {
  const navigate = useNavigate();
  return <Login {...props} navigate={navigate} />;
};

export default LoginWithNavigation;
