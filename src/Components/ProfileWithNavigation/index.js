import { useNavigate } from "react-router-dom";
import Profile from "../Profile";

const ProfileWithNavigation = (props) => {
  const navigate = useNavigate();
  return <Profile {...props} navigate={navigate} />;
};

export default ProfileWithNavigation;