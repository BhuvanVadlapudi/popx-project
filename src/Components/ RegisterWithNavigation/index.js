import { useNavigate } from "react-router-dom";
import Register from "../Register";

const RegisterWithNavigation = (props) => {
  const navigate = useNavigate();
  return <Register {...props} navigate={navigate} />;
};

export default RegisterWithNavigation;
