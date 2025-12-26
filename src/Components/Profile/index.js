import { Component } from "react";
import { FaCamera } from "react-icons/fa";
import "./index.css";

class Profile extends Component {
  state = {
    user: null,
    profileImage: null,
  };

  componentDidMount() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const token = localStorage.getItem("popxToken");

    if (!loggedInUser || !token) {
      this.props.navigate("/login");
    } else {
      this.setState({ user: loggedInUser });
    }
  }

  onChangeProfileImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      this.setState({ profileImage: imageURL });
    }
  };

  onLogout = () => {
    localStorage.removeItem("popxToken");
    localStorage.removeItem("loggedInUser");
    this.props.navigate("/");
  };

  render() {
    const { user, profileImage } = this.state;

    if (!user) {
      return null;
    }

    return (
      <div className="profile-container">
        <h1 className="profile-title">Account Settings</h1>

        <div className="profile-card">
          <div className="profile-image-section">
            <img
              src={
                profileImage ||
                "https://assets.ccbp.in/frontend/react-js/profile-img.png"
              }
              alt="profile"
              className="profile-image"
            />

            <label className="camera-icon">
              <FaCamera />
              <input
                type="file"
                accept="image/*"
                onChange={this.onChangeProfileImage}
                hidden
              />
            </label>
          </div>

          <div className="profile-info">
            <h2>{user.fullName}</h2>
            <p>{user.email}</p>
          </div>
        </div>

        <p className="profile-description">
          This is your PopX account profile. You can view your registered
          details here, update your profile picture, and manage your account
          securely from this page.
        </p>

        <div className="logout-btn-container">
          <button className="logout-btn" onClick={this.onLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default Profile;
